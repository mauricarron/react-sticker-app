import { useState } from "react";

const SearchBar = ({ userSearch, setUserSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length >= 3) {
      setUserSearch([inputValue, ...userSearch]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="user-search"
        id="user-search"
        value={inputValue}
        autoComplete="on"
        autoFocus
        placeholder="Compartí diversión!"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
