import { Grid } from '@mui/material'

import QuizCard from "./components/QuizCard.tsx";
import { QuizLIST } from './mock-data/quiz.ts'

function App() {
  const onQuizCardClick = (id: number) => {
    alert(`${id} TODO!`)
  }

  return (
    <>
      <Grid container spacing={2}>
        {QuizLIST.map((item) =>
          <Grid size={4}>
            <QuizCard metadata={item} onClick={onQuizCardClick} />
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default App
