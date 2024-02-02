import WordList from "./WordList";

export default function SavedWords() {
  return (
    <>
      <div className="word">
        <h1>saved words</h1>
      </div>
      <div className="definition-box list">
        <WordList />
      </div>
    </>
  );
}
