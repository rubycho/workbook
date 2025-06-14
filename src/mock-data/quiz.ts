import type {ChoiceQuiz, ShortAnswerQuiz, QuizMetadata} from '../data/quiz'

export const QuizLIST: Array<QuizMetadata> = [
  {
    id: 0,
    image: '',
    title: '초등학교의 옛 명칭',
    shortDescription: '초등학교의 옛 명칭은?',
  },
  {
    id: 1,
    image: 'problem2.jpg',
    title: '사자성어',
    shortDescription: '화가 바뀌어 오히려 복이 된다',
  },
  {
    id: 2,
    image: 'problem3.jpg',
    title: '계산 문제',
    shortDescription: '이미지의 수식을 계산하세요.',
  },
  {
    id: 3,
    image: 'problem4.jpg',
    title: '도형 문제',
    shortDescription: '사다리꼴의 넓이를 구하세요.',
  }
]

export const QuizGET: Array<ChoiceQuiz | ShortAnswerQuiz> = [
  {
    id: 0,
    image: '',
    title: '초등학교의 옛 명칭',
    shortDescription: '초등학교의 옛 명칭은?',
    description: '초등학교의 옛 명칭은?',
    choices: ['국민학교', '동아학교', '국가학교', '소인학교'],
    answer: 0
  },
  {
    id: 1,
    image: 'problem2.jpg',
    title: '사자성어',
    shortDescription: '화가 바뀌어 오히려 복이 된다',
    description: '"화가 바뀌어 오히려 복이 된다"라는 뜻의 사자성어는?',
    choices: ['고진감래', '새옹지마', '전화위복', '희로애락'],
    answer: 2
  },
  {
    id: 2,
    image: 'problem3.jpg',
    title: '계산 문제',
    shortDescription: '이미지의 수식을 계산하세요.',
    description: '이미지의 수식을 계산하세요.',
    answer: '23'
  },
  {
    id: 3,
    image: 'problem4.jpg',
    title: '도형 문제',
    shortDescription: '사다리꼴의 넓이를 구하세요.',
    description: '사다리꼴의 넓이를 구하세요.',
    answer: '48'
  }
]
