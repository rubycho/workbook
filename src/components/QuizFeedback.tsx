import { Snackbar } from "@mui/material";

interface QuizFeedbackProps {
  open: boolean;
  message: string;
  handleClose: () => void;
}

export default function QuizFeedback(props: QuizFeedbackProps) {
  return (
    <Snackbar
      autoHideDuration={1000}
      anchorOrigin = {{ vertical: 'bottom', horizontal: 'center' }}
      open={props.open}
      onClose={props.handleClose}
      message={props.message}
    />
  )
}
