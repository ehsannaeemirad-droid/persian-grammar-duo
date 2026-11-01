import { useState, useMemo } from "react";
import { grammarPoints, units } from "./data/grammar";
import type { GrammarPoint } from "./data/grammar";
import { useProgress } from "./store/progress";
import { Header } from "./components/Header";
import { UnitCard } from "./components/UnitCard";
import { LessonIntro } from "./components/LessonIntro";
import { ExerciseSession } from "./components/ExerciseSession";
import { LessonComplete } from "./components/LessonComplete";
import { Heart } from "lucide-react";

type Screen =
  | { name: "home" }
  | { name: "intro"; gp: GrammarPoint }
  | { name: "exercise"; gp: GrammarPoint }
  | { name: "complete"; gp: GrammarPoint; xp: number }
  | { name: "out-of-hearts" };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: "home" });
  const { completedLessons, refillHearts } = useProgress();

  const byUnit = useMemo(() => {
    const map = new Map<string, GrammarPoint[]>();
    for (const u of units) map.set(u, []);
    for (const gp of grammarPoints) {
      const list = map.get(gp.unit) || [];
      list.push(gp);
      map.set(gp.unit, list);
    }
    return map;
  }, []);

  const unlockedUnits = useMemo(() => {
    const result: Record<string, boolean> = {};
    let prevUnlocked = true;
    for (const u of units) {
      result[u] = prevUnlocked;
      const pts = byUnit.get(u) || [];
      const done = pts.filter((p) => completedLessons.includes(p.id)).length;
      const ratio = pts.length ? done / pts.length : 0;
      prevUnlocked = ratio >= 0.5;
    }
    return result;
  }, [byUnit, completedLessons]);

  const goHome = () => setScreen({ name: "home" });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      <Header onHome={goHome} showBack={screen.name !== "home"} />

      {screen.name === "home" && (
        <main className="max-w-lg mx-auto px-4 py-6">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-1">دستور زبان انگلیسی</h1>
            <p className="text-sm text-slate-500">سطح B2 · GSE 59–66 · مخصوص فارسی‌زبانان</p>
          </div>

          {units.map((unit) => (
            <UnitCard
              key={unit}
              unit={unit}
              points={byUnit.get(unit) || []}
              unlocked={unlockedUnits[unit]}
              onSelect={(gp) => setScreen({ name: "intro", gp })}
            />
          ))}

          <footer className="mt-12 text-center text-xs text-slate-400 pb-8">
            بر اساس GSE Teacher Toolkit · ساخته‌شده برای یادگیرندگان فارسی‌زبان
          </footer>
        </main>
      )}

      {screen.name === "intro" && (
        <LessonIntro
          gp={screen.gp}
          onStart={() => setScreen({ name: "exercise", gp: screen.gp })}
          onBack={goHome}
        />
      )}

      {screen.name === "exercise" && (
        <ExerciseSession
          gp={screen.gp}
          onComplete={(xp) => {
            const { markLessonComplete } = useProgress.getState();
            markLessonComplete(screen.gp.id);
            setScreen({ name: "complete", gp: screen.gp, xp });
          }}
          onFail={() => setScreen({ name: "out-of-hearts" })}
        />
      )}

      {screen.name === "complete" && (
        <LessonComplete xpEarned={screen.xp} onContinue={goHome} />
      )}

      {screen.name === "out-of-hearts" && (
        <div className="max-w-lg mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 mx-auto bg-rose-100 rounded-full flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-rose-500 fill-rose-400" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">قلب‌هایت تمام شد</h2>
          <p className="text-slate-500 mb-8">برای ادامه تمرین، قلب‌هایت را پر کن.</p>
          <button
            onClick={() => {
              refillHearts();
              goHome();
            }}
            className="w-full py-4 rounded-2xl font-bold text-white bg-rose-500 hover:bg-rose-600 active:scale-[0.98] transition"
          >
            پر کردن قلب‌ها (فعلاً رایگان)
          </button>
        </div>
      )}
    </div>
  );
}
