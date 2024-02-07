import WordList from "./WordList";

export default function SavedWords({ wordList, onDelete, onViewWord }) {
  return (
    <>
      <div className="word">
        <h1>saved words</h1>
      </div>

      {wordList.length !== 0 ? (
        <div className="definition-box list">
          <WordList
            wordList={wordList}
            onDelete={onDelete}
            onViewWord={onViewWord}
          />
        </div>
      ) : (
        <div className="definition-box list">
          <p className="empty">---empty---</p>
        </div>
      )}
    </>
  );
}
