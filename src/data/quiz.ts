export type QuizMetadata = {
  id: number,
  image: string
  title: string,
  shortDescription: string
}

export type Quiz = {
  id: number,
  image: string,
  title: string,
  shortDescription: string,
  description: string,
}

export type ChoiceQuiz = Quiz & {
  choices: Array<string>,
  answer: number
}

export type ShortAnswerQuiz = Quiz & {
  answer: string
}
