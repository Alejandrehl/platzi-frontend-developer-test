import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ searchField, onChangeSearch, placeholder }: any) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      value={searchField}
      onChange={onChangeSearch}
    />
  );
};

export default SearchBox;
