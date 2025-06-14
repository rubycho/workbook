import {Button, Chip, Divider, Stack} from "@mui/material";
import type {ChoiceQuiz} from "../../data/quiz.ts";

interface ChoiceFieldProps {
  quiz: ChoiceQuiz,
  onCorrect: () => void,
  onIncorrect: () => void
}

export default function ChoiceField(props: ChoiceFieldProps) {
  return (
    <>
      <Divider>
        <Chip label="선택지" size="small" />
      </Divider>

      <Stack>
        {props.quiz.choices.map((choice, idx) =>
          <Button variant={"text"} onClick={() => {
            if (props.quiz?.answer == idx) props.onCorrect()
            else props.onIncorrect()
          }}>
            {choice}
          </Button>
        )}
      </Stack>
    </>
  )
}
