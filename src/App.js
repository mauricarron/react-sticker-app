import { useState } from "react";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [userSearch, setUserSearch] = useState([]);

  return (
    <>
      <h1>StickerApp</h1>
      <SearchBar userSearch={userSearch} setUserSearch={setUserSearch} />
    </>
  );
};

export default App;
