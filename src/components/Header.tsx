import { Heart, Flame, Star, Home } from "lucide-react";
import { useProgress } from "../store/progress";

type Props = {
  onHome?: () => void;
  showBack?: boolean;
};

export function Header({ onHome, showBack }: Props) {
  const { xp, hearts, streak } = useProgress();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200 px-4 py-3 safe-top">
      <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {showBack && onHome && (
            <button
              onClick={onHome}
              className="p-2 -ml-2 rounded-full hover:bg-slate-100 active:scale-95 transition"
              aria-label="Home"
            >
              <Home className="w-5 h-5 text-slate-600" />
            </button>
          )}
          <div className="flex items-center gap-1.5 text-amber-500 font-bold">
            <Star className="w-5 h-5 fill-amber-400" />
            <span className="tabular-nums">{xp}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-orange-500 font-semibold">
            <Flame className="w-5 h-5 fill-orange-400" />
            <span className="tabular-nums">{streak}</span>
          </div>
          <div className="flex items-center gap-1 text-rose-500 font-semibold">
            <Heart className="w-5 h-5 fill-rose-400" />
            <span className="tabular-nums">{hearts}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
