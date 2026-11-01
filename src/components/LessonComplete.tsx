import { Trophy, Star, Flame } from "lucide-react";
import { useProgress } from "../store/progress";

type Props = {
  xpEarned: number;
  onContinue: () => void;
};

export function LessonComplete({ xpEarned, onContinue }: Props) {
  const { streak, xp } = useProgress();

  return (
    <div className="max-w-lg mx-auto px-4 py-12 text-center">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-300 to-orange-400 rounded-full flex items-center justify-center shadow-lg shadow-amber-200 mb-6">
          <Trophy className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">درس کامل شد!</h1>
        <p className="text-slate-500">آفرین، خوب کار کردی</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <Star className="w-8 h-8 text-amber-500 mx-auto mb-2 fill-amber-400" />
          <p className="text-2xl font-bold text-amber-700 tabular-nums">+{xpEarned}</p>
          <p className="text-xs text-amber-600 mt-1">امتیاز این درس</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
          <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2 fill-orange-400" />
          <p className="text-2xl font-bold text-orange-700 tabular-nums">{streak}</p>
          <p className="text-xs text-orange-600 mt-1">روز متوالی</p>
        </div>
      </div>

      <p className="text-sm text-slate-400 mb-8">کل امتیاز: {xp}</p>

      <button
        onClick={onContinue}
        className="w-full py-4 rounded-2xl font-bold text-white bg-teal-500 hover:bg-teal-600 active:scale-[0.98] transition shadow-lg shadow-teal-200"
      >
        ادامه یادگیری
      </button>
    </div>
  );
}
