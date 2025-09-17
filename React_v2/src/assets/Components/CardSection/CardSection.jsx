import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
