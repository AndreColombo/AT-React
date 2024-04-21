import { Link } from "react-router-dom";

export default function Header({ menuItems }) {
  return (
    <header>
      <nav>
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link to={menuItem.link}>{menuItem.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
