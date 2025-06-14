import type {ChoiceQuiz, ShortAnswerQuiz} from "../data/quiz.ts";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import classImage from "../assets/classroom.jpg";
import ChoiceField from "./fields/ChoiceField.tsx";
import ShortAnswerField from "./fields/ShortAnswerField.tsx";

interface QuizModalProps {
  quiz?: ChoiceQuiz | ShortAnswerQuiz,
  open: boolean,
  handleClose: () => void
  triggerFeedback: (message: string) => void
}

export default function QuizModal(props: QuizModalProps) {
  const onCorrect = () => {
    props.triggerFeedback("맞았습니다!")
    props.handleClose()
  }
  const onIncorrect = () => {
    props.triggerFeedback("틀렸습니다 :(")
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}>
      {
        props.quiz?.image != '' ?
          <img src={"/public/" + props.quiz?.image} style={{maxWidth: "100%"}}/>
          :
          <img src={classImage} style={{maxWidth: "100%"}}/>
      }

      <DialogTitle>{props.quiz?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.quiz?.description}
        </DialogContentText>

        {
          props.quiz && 'choices' in props.quiz ?
            <ChoiceField
              quiz={props.quiz}
              onCorrect={onCorrect}
              onIncorrect={onIncorrect}
            />
            :
            <ShortAnswerField
              quiz={props.quiz as ShortAnswerQuiz}
              onCorrect={onCorrect}
              onIncorrect={onIncorrect}
            />
        }
      </DialogContent>
    </Dialog>
  )
}
