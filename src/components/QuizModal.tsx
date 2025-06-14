import type {Quiz} from "../data/quiz.ts";
import {Button, Chip, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, Stack} from "@mui/material";

interface QuizModalProps {
  quiz?: Quiz,
  open: boolean,
  handleClose: () => void
  triggerFeedback: (message: string) => void
}

export default function QuizModal(props: QuizModalProps) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}>
      <DialogTitle>{props.quiz?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.quiz?.description}
        </DialogContentText>

        <Divider>
          <Chip label="Choices" size="small" />
        </Divider>

        <Stack>
        {props.quiz?.choices.map((choice, idx) =>
          <Button variant={"text"} onClick={() => {
            if (props.quiz?.answer == idx) {
              props.triggerFeedback("Correct!")
              setTimeout(() => {
                props.handleClose()
              }, 1000)
            } else {
              props.triggerFeedback("Incorrect :(")
            }
          }}>
            {choice}
          </Button>
        )}
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
