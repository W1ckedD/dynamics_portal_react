import 'styles/Navbar.css';

import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import cx from 'classnames';

export default function Navbar({ showSidebar, toggleSidebar }) {
  return (
    <nav className={cx('navbar', { expand: !showSidebar })}>
      <button className="btn" onClick={toggleSidebar}>
        <FaBars size={20} />
      </button>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link"></Link>
        </li>
      </ul>
    </nav>
  );
}
