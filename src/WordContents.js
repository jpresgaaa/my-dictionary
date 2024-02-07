export default function WordContents({ searchedWord, onSave }) {
  return (
    <>
      <div className="word">
        <h1>{searchedWord.name}</h1>
      </div>
      <div className="definition-box list">
        <div className="figure-of-speech">{searchedWord.figure}</div>
        <div className="definition">
          <h1>Definition</h1>
          <p>{searchedWord.definition}</p>
        </div>
        <div className="synonym">
          <h1>Synonym</h1>
          <div className="synonym-paragraph">
            {searchedWord.synonym1.map((syn) => (
              <span key={syn}>{syn}</span>
            ))}
          </div>
        </div>
        <button className="save-btn" onClick={onSave}>
          Save
        </button>
      </div>
    </>
  );
}
