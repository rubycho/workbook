import {useState} from "react";

import { Grid } from '@mui/material'

import QuizCard from "./components/QuizCard.tsx";
import QuizModal from "./components/QuizModal.tsx";
import QuizFeedback from "./components/QuizFeedback.tsx";

import {QuizGET, QuizLIST} from './mock-data/quiz.ts'
import type {Quiz} from "./data/quiz.ts";

function App() {
  const [feedbackState, setFeedbackState] = useState({
    open: false,
    message: ""
  })
  const [modalState, setModalState] = useState({
    open: false,
    quiz: undefined as unknown as Quiz
  })

  const handleModalClose = () => {
    setModalState({...modalState, open: false})
  }
  const handleFeedbackClose = () => {
    setFeedbackState({...feedbackState, open: false})
  }

  const triggerFeedback = (message: string) => {
    setFeedbackState({open: true, message})
  }
  const onQuizCardClick = (id: number) => {
    setModalState({open: true, quiz: QuizGET[id]})
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

      <QuizModal
        quiz={modalState.quiz}
        open={modalState.open}
        triggerFeedback={triggerFeedback}
        handleClose={handleModalClose} />
      <QuizFeedback
        open={feedbackState.open}
        message={feedbackState.message}
        handleClose={handleFeedbackClose} />
    </>
  )
}

export default App
