import SearchTerm from "./SearchTerm";

const SearchResults = ({ userSearch }) => {
  return (
    <div>
      {userSearch.map((search, i) => {
        return <SearchTerm key={`${i}_${search}`} search={search} />;
      })}
    </div>
  );
};

export default SearchResults;
