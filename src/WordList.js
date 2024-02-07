import Word from "./Word";

export default function WordList({ wordList, onDelete, onViewWord }) {
  return (
    <ul>
      {wordList.map((word) => (
        <Word
          word={word}
          key={word.id}
          onDelete={onDelete}
          onViewWord={onViewWord}
        />
      ))}
    </ul>
  );
}
