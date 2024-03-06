export default function NavBar() {
  return (
    <nav className="header-container">
      <ul className="nav-list">
        <li className="link-item">
          <a
            href="https://github.com/javaPepper"
            target="blank"
          >
            <button className="btn">GitHub
            </button>
          </a>
        </li>
        <li className="link-item">
          <a
            href="https://javapepper.github.io/cv/"
            target="blank"
          >
            <button className="btn">Back to CV
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
