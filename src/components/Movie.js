import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, CardHeader, Grid } from '@material-ui/core';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <Grid item xs={3}>
      <Card className="movie">
      <CardActionArea>
        <CardHeader title={movie.Title} />
        <CardMedia>
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        </CardMedia>
        <CardContent>
          <p>({movie.Year})</p>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Movie;
