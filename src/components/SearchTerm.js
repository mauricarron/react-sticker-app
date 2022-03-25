import { useGetStickers } from "../hooks/useGetStickers";
import { useState } from "react";
import Sticker from "./Sticker";
import AlertCopyToClipboard from "./AlertCopyToClipboard";
import PlaceholderGrid from "./PlaceholderGrid";

const SearchTerm = ({ search }) => {
  const { data, loading } = useGetStickers(search);
  const [copyState, setCopyState] = useState(false);

  return (
    <div className="grid-term">
      {loading ? (
        <PlaceholderGrid />
      ) : (
        data.map((d) => (
          <Sticker setCopyState={setCopyState} key={d.id} {...d} />
        ))
      )}

      {<AlertCopyToClipboard copyState={copyState} />}
    </div>
  );
};

export default SearchTerm;
