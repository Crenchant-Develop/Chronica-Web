import {
  Card as MUICard,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import s from "./card.module.scss";

interface cardProps {
  imageLink: string;
  name: string;
  description: string;
  count: number;
}

const cardImageStyle: React.CSSProperties = {
  height: "10vh",
  maxWidth: "70%",
  margin: "auto",
  marginTop: "2vh",
  display: "block",
  marginBottom: "0",
};

const Cards: React.FC<{ cards: cardProps[] }> = (props) => {
  return (
    <div className={s.cardContainer}>
      {props.cards.map((v) => (
        <Card
          imageLink={v.imageLink}
          count={v.count}
          description={v.description}
          name={v.name}
        ></Card>
      ))}
    </div>
  );
};
const Card: React.FC<cardProps> = (props) => {
  return (
    <MUICard variant="outlined" className={s.cardObject}>
      <CardMedia image={props.imageLink} style={cardImageStyle}></CardMedia>
      <CardContent>
        <Typography variant={"h5"} className={s.cardTitle}>
          {props.name}
        </Typography>
        <hr />
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </MUICard>
  );
};

export { Cards };
