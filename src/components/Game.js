import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Game({ game, onFavouriteToggle }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={game.background_image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <ImageList
          sx={{ width: 500, height: 160 }}
          cols={4}
          rowHeight={80}
        >
          {game.short_screenshots.map((item) => (
            <ImageListItem
              key={item.id}
            >
              <img
                src={`${item.image}`}
                width="80"
                height="80"
                alt={item.image}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Rating name="read-only" value={game.rating} />
      </CardActions>
    </Card>
  );
}
