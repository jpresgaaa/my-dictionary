export default function Search({ query, setQuery, onSearchWord }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search a word..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={onSearchWord}>
        <i className="bx bx-search-alt-2"></i>
      </button>
    </div>
  );
}
