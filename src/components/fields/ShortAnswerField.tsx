import {Box, Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import type {ShortAnswerQuiz} from "../../data/quiz.ts";

interface ShortAnswerFieldProps {
  quiz: ShortAnswerQuiz,
  onCorrect: () => void,
  onIncorrect: () => void
}

export default function ShortAnswerField(props: ShortAnswerFieldProps) {
  const [shortAnswer, setShortAnswer] = useState('')
  useEffect(() => {
    setShortAnswer('')
  }, [props.quiz])

  return (
    <>
      <TextField
        autoFocus
        required
        fullWidth
        value={shortAnswer}
        onChange={(event) => {
          setShortAnswer(event.target.value)
        }}
        variant="standard"/>
      <Box textAlign="right">
        <Button
          variant="text"
          sx={{
            textAlign: 'right',
          }}
          onClick={() => {
            if (shortAnswer == props.quiz?.answer) props.onCorrect()
            else props.onIncorrect()
          }}>
          확인
        </Button>
      </Box>
    </>
  )
}