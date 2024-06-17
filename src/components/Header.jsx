import { Github } from "react-bootstrap-icons";

function Header() {
  return (
    <header className="header">
      <a href="https://github.com/" target="_blank">
        <Github color="black" size={36} />
      </a>
      <h1>Wisevision github repos finder</h1>
    </header>
  );
}

export default Header;
