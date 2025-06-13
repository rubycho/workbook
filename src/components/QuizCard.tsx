import reactLogo from '../assets/react.svg'

import type {QuizMetadata} from "../data/quiz.ts";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface QuizCardProps {
  metadata: QuizMetadata,
  onClick: (id: number) => void
}

export default function QuizCard(props: QuizCardProps) {
  return (
    <Card onClick = {() => props.onClick(props.metadata.id)}>
      <CardMedia component="img" height="140" image={reactLogo} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.metadata.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.metadata.shortDescription}
        </Typography>
      </CardContent>
    </Card>
  )
}
