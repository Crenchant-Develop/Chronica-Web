import React from "react";

import {
  Card as MUICard,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Collapse,
  Avatar,
  IconButton,
  IconButtonProps,
  Chip,
  Stack,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import s from "./card.module.scss";

interface cardProps {
  imageLink: string;
  name: string;
  summary: string;
  description: string;
  count: number;
  tags: string[];
}

const Cards: React.FC<{ cards: cardProps[] }> = (props) => {
  return (
    <div className={s.cardContainer}>
      {props.cards.map((v) => (
        <Card
          imageLink={v.imageLink}
          name={v.name}
          summary={v.summary}
          description={v.description}
          count={v.count}
          tags={v.tags}
        ></Card>
      ))}
    </div>
  );
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Tag: React.FC<{ tag: string }> = ({ tag }) => (
  <Chip label={tag} sx={{ color: "black" }} variant="outlined"></Chip>
);
const Card: React.FC<cardProps> = ({
  count,
  summary,
  description,
  imageLink,
  name,
  tags,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <MUICard className={s.cardObject} sx={{ borderRadius: "5%", zIndex: "1" }}>
      <CardMedia
        component="img"
        height="100vh"
        image={imageLink}
        alt={`${name} image`}
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="count">
            {`x ${count}`}
          </Avatar>
        }
        title={name}
        sx={{ paddingBottom: "0" }}
      />
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ paddingBottom: "1vh" }}>
          {tags.map((v) => (
            <Tag tag={v} />
          ))}
        </Stack>
        <Typography paragraph sx={{ margin: "0" }}>
          {summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ margin: "auto" }}
        >
          <ExpandMoreIcon sx={{ color: "white" }} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </MUICard>
  );
};

export { Cards };
