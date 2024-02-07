export default function Word({ word, onDelete, onViewWord }) {
  return (
    <li>
      <p>{word.name}</p>
      <div className="buttons">
        <button onClick={() => onViewWord(word.id)}>
          <i className="bi bi-eye"></i>
        </button>
        <button className="delete" onClick={() => onDelete(word.id)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
