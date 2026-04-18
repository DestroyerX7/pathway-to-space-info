"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QuizQuestion, quizQuestions } from "@/lib/quiz-questions";
import { useEffect, useState } from "react";

export default function Quiz() {
  const [selectedQuizQuestions, setSelectedQuizQuestions] = useState<
    QuizQuestion[]
  >([]);

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(10).fill(""),
  );

  useEffect(() => {
    const randomQuizQuestions = quizQuestions
      .toSorted((_) => Math.random() - 0.5)
      .slice(0, 10);

    setSelectedQuizQuestions(randomQuizQuestions);
  }, []);

  const selectAnswer = (answer: string, index: number) => {
    const updatedSelectedAnswers = selectedAnswers;
    updatedSelectedAnswers[index] = answer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const submit = () => {
    let numIncorrect = 0;

    for (let i = 0; i < selectedAnswers.length; i++) {
      if (
        selectedAnswers[i] !=
        selectedQuizQuestions[i].answers[
          selectedQuizQuestions[i].correctAnswerIndex
        ]
      ) {
        console.log("Incorrect: " + selectedAnswers[i]);
        console.log(
          "Correct: " +
            selectedQuizQuestions[i].answers[
              selectedQuizQuestions[i].correctAnswerIndex
            ],
        );
        console.log();

        numIncorrect++;
      }
    }

    console.log(`${10 - numIncorrect}/${10}`);
  };

  return (
    <>
      <Header />

      <div className="p-4 space-y-16">
        {selectedQuizQuestions.map((quizQuestion, i) => (
          <div key={quizQuestion.question} className="space-y-4">
            <h1>{quizQuestion.question}</h1>

            <RadioGroup onValueChange={(answer) => selectAnswer(answer, i)}>
              {quizQuestion.answers.map((answer) => (
                <div key={answer} className="flex items-center gap-3">
                  <RadioGroupItem
                    value={answer}
                    id={quizQuestion.question + answer}
                  />
                  <Label htmlFor={quizQuestion.question + answer}>
                    {answer}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}

        <Button className="cursor-pointer" onClick={submit}>
          Submit
        </Button>
      </div>
    </>
  );
}
