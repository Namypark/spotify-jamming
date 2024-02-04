/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import "./searchbar.css";

export default function SearchBar({ searchTerm }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = ({ target }) => {
    setSearchValue(target.value);
  };

  function passTerm() {
    searchTerm(searchValue);
  }
  return (
    <div className="searchBar">
      <div className="search">
        <input
          className="search-box"
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          value={searchValue}
        />
        <button
          type="submit"
          value="submit"
          className="search-btn"
          onClick={passTerm}
        >
          <i class="gg-search"></i>
        </button>
      </div>
    </div>
  );
}
