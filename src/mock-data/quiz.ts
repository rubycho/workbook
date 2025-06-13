import type { Quiz, QuizMetadata } from '../data/quiz'

export const QuizLIST: Array<QuizMetadata> = [
  {
    id: 0,
    title: 'Problem 1',
    shortDescription: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 1,
    title: 'Problem 2',
    shortDescription: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    title: 'Problem 3',
    shortDescription: 'Lorem ipsum dolor sit amet',
  }
]

export const QuizGET: Array<Quiz> = [
  {
    id: 0,
    title: 'Problem 1',
    shortDescription: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    choices: ['Correct', 'B', 'C', 'D'],
    answer: 0
  },
  {
    id: 1,
    title: 'Problem 2',
    shortDescription: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    choices: ['A', 'B', 'Correct', 'D', 'E'],
    answer: 2
  },
  {
    id: 2,
    title: 'Problem 3',
    shortDescription: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    choices: ['A', 'Correct', 'C', 'D'],
    answer: 1
  }
]
