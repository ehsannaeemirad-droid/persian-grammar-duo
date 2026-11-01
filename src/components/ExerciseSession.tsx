import { useState, useEffect } from "react";
import type { GrammarPoint } from "../data/grammar";
import { generateExercises, type Exercise } from "../lib/exercises";
import { useProgress } from "../store/progress";
import { Check, X, ChevronRight } from "lucide-react";

type Props = {
  gp: GrammarPoint;
  onComplete: (xpEarned: number) => void;
  onFail: () => void; // out of hearts
};

export function ExerciseSession({ gp, onComplete, onFail }: Props) {
  const [exercises] = useState(() => generateExercises(gp));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | string[] | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [reorderSelected, setReorderSelected] = useState<string[]>([]);

  const { hearts, loseHeart, addXp, updateStreak, setLessonProgress } = useProgress();

  const current = exercises[index];
  const progress = ((index) / exercises.length) * 100;

  useEffect(() => {
    updateStreak();
  }, []);

  if (!current) {
    onComplete(xpEarned);
    return null;
  }

  const checkAnswer = () => {
    if (selected === null && current.type !== "reorder") return;
    if (current.type === "reorder" && reorderSelected.length === 0) return;

    let correct = false;
    if (current.type === "reorder") {
      correct =
        Array.isArray(current.correct) &&
        reorderSelected.length === current.correct.length &&
        reorderSelected.every((w, i) => w === (current.correct as string[])[i]);
    } else if (Array.isArray(current.correct)) {
      correct = current.correct.includes(selected as string);
    } else {
      correct =
        (selected as string).toLowerCase().trim() ===
        (current.correct as string).toLowerCase().trim();
    }

    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      const gained = 10;
      setXpEarned((x) => x + gained);
      addXp(gained);
    } else {
      loseHeart();
      if (hearts <= 1) {
        // will be 0 after lose
        setTimeout(() => onFail(), 1200);
      }
    }
  };

  const next = () => {
    setShowFeedback(false);
    setSelected(null);
    setReorderSelected([]);
    const nextIndex = index + 1;
    setLessonProgress(gp.id, Math.round((nextIndex / exercises.length) * 100));
    if (nextIndex >= exercises.length) {
      onComplete(xpEarned + (isCorrect ? 10 : 0));
    } else {
      setIndex(nextIndex);
    }
  };

  const toggleReorderWord = (word: string, fromSelected: boolean) => {
    if (showFeedback) return;
    if (fromSelected) {
      setReorderSelected((prev) => prev.filter((w) => w !== word));
    } else {
      setReorderSelected((prev) => [...prev, word]);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 pb-8 pt-2 min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Progress */}
      <div className="h-2 bg-slate-100 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-teal-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1">
        <p className="text-xs text-slate-400 mb-1 text-right">
          تمرین {index + 1} از {exercises.length}
        </p>
        <h2 className="text-lg font-bold text-slate-800 mb-1 text-right leading-relaxed">
          {current.promptFa || current.prompt}
        </h2>
        {current.promptFa && (
          <p className="text-sm text-slate-500 mb-6 text-right">{current.prompt}</p>
        )}

        {/* MCQ / TrueFalse */}
        {(current.type === "mcq" || current.type === "truefalse") && current.options && (
          <div className="space-y-3">
            {current.options.map((opt) => {
              const isSelected = selected === opt;
              let style = "border-slate-200 bg-white hover:border-teal-300";
              if (showFeedback) {
                if (opt === current.correct) style = "border-emerald-400 bg-emerald-50";
                else if (isSelected) style = "border-rose-400 bg-rose-50";
              } else if (isSelected) {
                style = "border-teal-500 bg-teal-50";
              }
              return (
                <button
                  key={opt}
                  disabled={showFeedback}
                  onClick={() => setSelected(opt)}
                  className={`w-full text-right p-4 rounded-2xl border-2 transition-all text-sm font-medium ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        )}

        {/* Fill */}
        {current.type === "fill" && (
          <div className="mt-4">
            <input
              type="text"
              disabled={showFeedback}
              value={(selected as string) || ""}
              onChange={(e) => setSelected(e.target.value)}
              placeholder="پاسخ را بنویسید..."
              className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-teal-500 outline-none text-center text-lg font-medium"
              dir="ltr"
            />
          </div>
        )}

        {/* Reorder */}
        {current.type === "reorder" && current.options && (
          <div className="mt-4 space-y-4">
            <div className="min-h-[3.5rem] p-3 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-wrap gap-2 justify-end">
              {reorderSelected.map((w, i) => (
                <button
                  key={`${w}-${i}`}
                  onClick={() => toggleReorderWord(w, true)}
                  className="px-3 py-1.5 bg-teal-500 text-white rounded-xl text-sm font-medium"
                >
                  {w}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              {current.options
                .filter((w) => !reorderSelected.includes(w))
                .map((w, i) => (
                  <button
                    key={`${w}-${i}`}
                    onClick={() => toggleReorderWord(w, false)}
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-sm font-medium hover:border-teal-400"
                  >
                    {w}
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Feedback */}
        {showFeedback && (
          <div
            className={`mt-6 p-4 rounded-2xl flex items-start gap-3 ${
              isCorrect ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"
            }`}
          >
            {isCorrect ? (
              <Check className="w-6 h-6 shrink-0 mt-0.5" />
            ) : (
              <X className="w-6 h-6 shrink-0 mt-0.5" />
            )}
            <div className="text-sm leading-relaxed">
              <p className="font-bold mb-1">{isCorrect ? "آفرین!" : "اشتباه بود"}</p>
              {!isCorrect && (
                <p className="opacity-90">
                  پاسخ درست:{" "}
                  {Array.isArray(current.correct)
                    ? current.correct.join(" ")
                    : current.correct}
                </p>
              )}
              {current.explanation && (
                <p className="mt-1 opacity-80 text-xs">{current.explanation}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action button */}
      <div className="mt-6">
        {!showFeedback ? (
          <button
            onClick={checkAnswer}
            disabled={
              (current.type !== "reorder" && !selected) ||
              (current.type === "reorder" && reorderSelected.length === 0)
            }
            className="w-full py-4 rounded-2xl font-bold text-white bg-teal-500 disabled:bg-slate-200 disabled:text-slate-400 active:scale-[0.98] transition"
          >
            بررسی
          </button>
        ) : (
          <button
            onClick={next}
            className="w-full py-4 rounded-2xl font-bold text-white bg-teal-500 flex items-center justify-center gap-2 active:scale-[0.98] transition"
          >
            ادامه
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
