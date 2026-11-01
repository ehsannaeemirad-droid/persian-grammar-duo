import { Lock, CheckCircle2, ChevronLeft } from "lucide-react";
import type { GrammarPoint } from "../data/grammar";
import { useProgress } from "../store/progress";

type Props = {
  unit: string;
  points: GrammarPoint[];
  onSelect: (gp: GrammarPoint) => void;
  unlocked: boolean;
};

export function UnitCard({ unit, points, onSelect, unlocked }: Props) {
  const { completedLessons, lessonProgress } = useProgress();
  const completedCount = points.filter((p) => completedLessons.includes(p.id)).length;
  const percent = points.length ? Math.round((completedCount / points.length) * 100) : 0;

  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          {!unlocked && <Lock className="w-4 h-4 text-slate-400" />}
          {unit}
        </h2>
        <span className="text-sm text-slate-500 tabular-nums">
          {completedCount}/{points.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-slate-100 rounded-full mb-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="grid gap-2">
        {points.map((gp) => {
          const done = completedLessons.includes(gp.id);
          const prog = lessonProgress[gp.id] ?? 0;
          const isLocked = !unlocked;

          return (
            <button
              key={gp.id}
              disabled={isLocked}
              onClick={() => !isLocked && onSelect(gp)}
              className={`
                w-full text-right p-4 rounded-2xl border transition-all active:scale-[0.98]
                ${isLocked
                  ? "bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed"
                  : done
                  ? "bg-emerald-50 border-emerald-200 hover:border-emerald-300"
                  : "bg-white border-slate-200 hover:border-teal-300 hover:shadow-md"
                }
              `}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 leading-snug line-clamp-2">
                    {gp.titleFa}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">{gp.structure}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      GSE {gp.gse}
                    </span>
                    {prog > 0 && prog < 100 && (
                      <span className="text-[10px] text-teal-600">{prog}%</span>
                    )}
                  </div>
                </div>
                <div className="shrink-0 mt-0.5">
                  {done ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : isLocked ? (
                    <Lock className="w-5 h-5 text-slate-300" />
                  ) : (
                    <ChevronLeft className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
