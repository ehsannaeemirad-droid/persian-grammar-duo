import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProgressState = {
  xp: number;
  hearts: number;
  streak: number;
  lastPlayedDate: string | null;
  completedLessons: string[];
  lessonProgress: Record<string, number>;
  addXp: (amount: number) => void;
  loseHeart: () => void;
  refillHearts: () => void;
  markLessonComplete: (id: string) => void;
  setLessonProgress: (id: string, percent: number) => void;
  updateStreak: () => void;
  resetProgress: () => void;
};

const today = () => new Date().toISOString().slice(0, 10);

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      xp: 0,
      hearts: 5,
      streak: 0,
      lastPlayedDate: null,
      completedLessons: [],
      lessonProgress: {},

      addXp: (amount) => set((s) => ({ xp: s.xp + amount })),

      loseHeart: () =>
        set((s) => ({
          hearts: Math.max(0, s.hearts - 1),
        })),

      refillHearts: () => set({ hearts: 5 }),

      markLessonComplete: (id) =>
        set((s) => {
          if (s.completedLessons.includes(id)) return s;
          return {
            completedLessons: [...s.completedLessons, id],
            lessonProgress: { ...s.lessonProgress, [id]: 100 },
          };
        }),

      setLessonProgress: (id, percent) =>
        set((s) => ({
          lessonProgress: { ...s.lessonProgress, [id]: Math.min(100, percent) },
        })),

      updateStreak: () => {
        const s = get();
        const t = today();
        if (s.lastPlayedDate === t) return;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const y = yesterday.toISOString().slice(0, 10);
        const newStreak = s.lastPlayedDate === y ? s.streak + 1 : 1;
        set({ streak: newStreak, lastPlayedDate: t });
      },

      resetProgress: () =>
        set({
          xp: 0,
          hearts: 5,
          streak: 0,
          lastPlayedDate: null,
          completedLessons: [],
          lessonProgress: {},
        }),
    }),
    {
      name: "persian-grammar-duo-progress",
    }
  )
);
