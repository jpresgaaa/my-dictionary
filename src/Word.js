export default function Word() {
  return (
    <li>
      <p>Hello</p>
      <div className="buttons">
        <button>
          <i class="bi bi-eye"></i>
        </button>
        <button className="delete">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
