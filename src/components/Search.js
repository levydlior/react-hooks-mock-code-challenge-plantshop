import React from "react";

function Search({onSearchInput, search}) {
function handleSearch(e){
 const value = e.target.value
  onSearchInput(value)
}

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
