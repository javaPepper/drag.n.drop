export default function Header() {
  return (
    <nav className="header-container">
      <ul className="nav-list">
        <li className="nav-list-item">
          <button className="btn">Main Page</button>
        </li>
        <li className="link-item">
          <button className="btn">GitHub</button>
        </li>
        <li className="nav-list-item">
          <button className="btn">About</button>
        </li>
        <li className="nav-list-item">
          <button className="btn sign-in">Sign In</button>
        </li>
      </ul>
    </nav>
  );
}
