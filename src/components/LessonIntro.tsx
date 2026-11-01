import type { GrammarPoint } from "../data/grammar";
import { BookOpen, Play } from "lucide-react";

type Props = {
  gp: GrammarPoint;
  onStart: () => void;
  onBack: () => void;
};

export function LessonIntro({ gp, onStart, onBack }: Props) {
  return (
    <div className="max-w-lg mx-auto px-4 pb-28 pt-4">
      <button
        onClick={onBack}
        className="text-sm text-teal-600 font-medium mb-4 flex items-center gap-1"
      >
        ← بازگشت
      </button>

      <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-6 text-white shadow-lg mb-6">
        <div className="flex items-center gap-2 mb-3 opacity-90">
          <BookOpen className="w-5 h-5" />
          <span className="text-sm font-medium">{gp.unit}</span>
        </div>
        <h1 className="text-xl font-bold leading-relaxed mb-2">{gp.titleFa}</h1>
        <p className="text-teal-100 text-sm leading-relaxed">{gp.title}</p>
        <div className="mt-4 flex gap-2">
          <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">GSE {gp.gse}</span>
          <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">{gp.cefr}</span>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-sm font-bold text-slate-500 mb-2">ساختار</h2>
        <p className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-mono text-slate-800 leading-relaxed">
          {gp.structure}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-slate-500 mb-3">مثال‌ها</h2>
        <ul className="space-y-3">
          {gp.examples.map((ex, i) => (
            <li
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-800 leading-relaxed shadow-sm"
            >
              {ex}
            </li>
          ))}
        </ul>
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent">
        <div className="max-w-lg mx-auto">
          <button
            onClick={onStart}
            className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 active:scale-[0.98] text-white font-bold py-4 rounded-2xl shadow-lg shadow-teal-200 transition"
          >
            <Play className="w-5 h-5 fill-white" />
            شروع تمرین
          </button>
        </div>
      </div>
    </div>
  );
}
