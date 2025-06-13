export type QuizMetadata = {
  id: number,
  title: string,
  shortDescription: string
}

export type Quiz = {
  id: number,
  title: string,
  shortDescription: string,
  description: string,
  choices: Array<string>,
  answer: number
}
