import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, CardHeader, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const DEFAULT_PLACEHOLDER_IMAGE = "https://via.placeholder.com/200x270";

const Movie = ({ movie }) => {
  const classes = useStyles();
  
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <Grid item xs={12} sm={6} md={3} className={classes.paper}>
      <Card className="movie">
      <CardActionArea>
        <CardHeader title={movie.Title} titleTypographyProps={{variant:'h6' }} />
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
