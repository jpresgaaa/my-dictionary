export default function Word() {
  return (
    <li>
      <p>Hello</p>
      <div className="buttons">
        <button>
          <i className="bi bi-eye"></i>
        </button>
        <button className="delete">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
