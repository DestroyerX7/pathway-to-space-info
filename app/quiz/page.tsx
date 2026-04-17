"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

export default function Quiz() {
  const quizQuestions: QuizQuestion[] = [
    {
      question: "What year was the Apollo 11 moon landing?",
      options: ["1972", "1969", "1958", "1962"],
      correctIndex: 1,
    },
  ];

  return (
    <>
      {quizQuestions.map((quizQuestion) => (
        <div key={quizQuestion.question}>
          <h1>{quizQuestion.question}</h1>

          <RadioGroup>
            {quizQuestion.options.map((option) => (
              <div key={option} className="flex items-center gap-3">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </>
  );
}
