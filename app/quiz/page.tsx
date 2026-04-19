"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QuizQuestion, quizQuestions } from "@/lib/quiz-questions";
import { useState } from "react";

export default function Quiz() {
  const getRandomQuizQuestions = () => {
    return quizQuestions.toSorted(() => Math.random() - 0.5).slice(0, 10);
  };

  const [selectedQuizQuestions, setSelectedQuizQuestions] = useState<
    QuizQuestion[]
  >(() => getRandomQuizQuestions());

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(10).fill(""),
  );

  const [submitted, setSubmitted] = useState(false);
  const [numCorrect, setNumCorrect] = useState(0);

  const selectAnswer = (answer: string, index: number) => {
    if (submitted) {
      return;
    }

    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = answer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const submit = () => {
    if (submitted) {
      return;
    }

    let numIncorrect = 0;

    for (let i = 0; i < selectedAnswers.length; i++) {
      if (
        selectedAnswers[i] !=
        selectedQuizQuestions[i].answers[
          selectedQuizQuestions[i].correctAnswerIndex
        ]
      ) {
        numIncorrect++;
      }
    }

    setSubmitted(true);
    setNumCorrect(10 - numIncorrect);
  };

  return (
    <>
      <Header />

      <div className="p-4 space-y-16">
        {selectedQuizQuestions.map((quizQuestion, i) => (
          <div key={quizQuestion.question} className="space-y-4">
            <div className="flex justify-between">
              <h1>{quizQuestion.question}</h1>

              {submitted && (
                <p>
                  {selectedAnswers[i] ==
                  quizQuestion.answers[quizQuestion.correctAnswerIndex]
                    ? "1"
                    : "0"}
                  /1
                </p>
              )}
            </div>

            <RadioGroup
              onValueChange={(answer) => selectAnswer(answer, i)}
              disabled={submitted}
            >
              {quizQuestion.answers.map((answer) => (
                <div
                  key={answer}
                  className={
                    "flex items-center gap-4 p-4 rounded border " +
                    (submitted &&
                    answer ==
                      quizQuestion.answers[quizQuestion.correctAnswerIndex]
                      ? "bg-green-950 border-green-700"
                      : submitted &&
                          answer == selectedAnswers[i] &&
                          answer !=
                            quizQuestion.answers[
                              quizQuestion.correctAnswerIndex
                            ]
                        ? "bg-red-950 border-red-700"
                        : "")
                  }
                >
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

        <div className="flex gap-4">
          <Button className="cursor-pointer" onClick={submit}>
            Submit
          </Button>

          {submitted && (
            <Button
              variant="secondary"
              className="cursor-pointer"
              onClick={() => {
                setSelectedQuizQuestions(getRandomQuizQuestions());
                setSelectedAnswers(Array(10).fill(""));
                setNumCorrect(0);
                setSubmitted(false);
              }}
            >
              Retry
            </Button>
          )}
        </div>

        {submitted && <p>{numCorrect}/10</p>}
      </div>
    </>
  );
}
