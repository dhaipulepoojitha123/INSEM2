export default function Navbar({ bookCount }) {
  return (
    <nav className="navbar">
      <a className="brand" href="/" aria-label="PageTurner home">
        <span className="brand-icon">B</span>
        <span>PageTurner</span>
      </a>
      <span className="nav-note">{bookCount} books in your library</span>
    </nav>
  );
}