import { useState } from "react";
import AlertCopyToClipboard from "./components/AlertCopyToClipboard";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [userSearch, setUserSearch] = useState(["trending"]);

  return (
    <>
      <header className="header">
        <h1 className="site-logo">StickerApp</h1>
        <SearchBar userSearch={userSearch} setUserSearch={setUserSearch} />
      </header>
      <SearchResults userSearch={userSearch} />
    </>
  );
};

export default App;
