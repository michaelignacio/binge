import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      marginTop: 30,
      marginBottom: 30
    },
  },
}));


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const classes = useStyles();
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      // <form className="search">
      <form className={classes.root}>
        <TextField 
          id="standard-basic" 
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Type title here..."
        />
        {/*<input onClick={callSearchFunction} type="submit" value="SEARCH" />*/}
        <Button variant="contained" color="primary" onClick={callSearchFunction} type="submit" value="SEARCH">
          Watch!
        </Button>
      </form>
    );
}

export default Search;
