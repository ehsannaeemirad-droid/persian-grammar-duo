import type { GrammarPoint } from "../data/grammar";

export type ExerciseType = "mcq" | "fill" | "reorder" | "truefalse";

export type Exercise = {
  id: string;
  type: ExerciseType;
  prompt: string;
  promptFa?: string;
  options?: string[];
  correct: string | string[];
  explanation?: string;
  explanationFa?: string;
};

/** Generate a small set of exercises from a grammar point for the MVP */
export function generateExercises(gp: GrammarPoint): Exercise[] {
  const exercises: Exercise[] = [];
  const exs = gp.examples;

  // 1. Multiple choice – identify the correct structure example
  if (exs.length >= 1) {
    const correct = exs[0];
    const distractors = [
      correct.replace(/is|are|was|were/i, (m) => (m.toLowerCase() === "is" || m.toLowerCase() === "are" ? "be" : "been")),
      correct.replace(/that|who|which/i, "what"),
      "I am going to the store yesterday."
    ].filter((d) => d !== correct);

    exercises.push({
      id: `${gp.id}-mcq-1`,
      type: "mcq",
      prompt: "Which sentence correctly uses the target structure?",
      promptFa: "کدام جمله ساختار مورد نظر را به درستی به کار برده است؟",
      options: shuffle([correct, ...distractors.slice(0, 2)]),
      correct,
      explanation: `Correct: ${correct}`,
      explanationFa: `درست: ${correct}`
    });
  }

  // 2. Fill the blank – simple gap from first example
  if (exs[0]) {
    const words = exs[0].split(" ");
    if (words.length > 4) {
      const gapIndex = Math.floor(words.length / 2);
      const answer = words[gapIndex].replace(/[.,!?]/g, "");
      const gapped = words.map((w, i) => (i === gapIndex ? "______" : w)).join(" ");
      exercises.push({
        id: `${gp.id}-fill-1`,
        type: "fill",
        prompt: `Complete the sentence:\n${gapped}`,
        promptFa: "جمله را کامل کنید:",
        correct: answer,
        explanation: exs[0],
        explanationFa: exs[0]
      });
    }
  }

  // 3. True / False about the structure
  exercises.push({
    id: `${gp.id}-tf-1`,
    type: "truefalse",
    prompt: `This grammar point is mainly about: ${gp.structure}`,
    promptFa: `این نکته دستوری عمدتاً درباره این است: ${gp.structure}`,
    options: ["True", "False"],
    correct: "True",
    explanation: gp.title,
    explanationFa: gp.titleFa
  });

  // 4. Another MCQ using second example if available
  if (exs[1]) {
    exercises.push({
      id: `${gp.id}-mcq-2`,
      type: "mcq",
      prompt: "Choose the sentence that best matches the grammar point.",
      promptFa: "جمله‌ای را انتخاب کنید که بهترین تطابق را با نکته دستوری دارد.",
      options: shuffle([
        exs[1],
        "She go to school every day.",
        "If I will see him, I tell him."
      ]),
      correct: exs[1],
      explanation: exs[1]
    });
  }

  // 5. Reorder (simple) – take a short example
  if (exs[0] && exs[0].split(" ").length <= 8) {
    const tokens = exs[0].replace(/[.,!?]/g, "").split(" ");
    exercises.push({
      id: `${gp.id}-reorder-1`,
      type: "reorder",
      prompt: "Put the words in the correct order:",
      promptFa: "کلمات را به ترتیب درست بچینید:",
      options: shuffle([...tokens]),
      correct: tokens,
      explanation: exs[0]
    });
  }

  return exercises.slice(0, 6); // keep sessions short
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
