import React, { useState } from "react";
import { TextField, Button, Card } from '@material-ui/core';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
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
      <form className="search">
        <TextField 
          id="standard-basic" 
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Title here..."
        />
        {/*<input onClick={callSearchFunction} type="submit" value="SEARCH" />*/}
        <Button variant="contained" color="primary" onClick={callSearchFunction} type="submit" value="SEARCH">
          Search
        </Button>
      </form>
    );
}

export default Search;
