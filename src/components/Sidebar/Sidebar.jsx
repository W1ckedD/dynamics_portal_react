// Styles
import 'styles/Sidebar.css';

import { Link } from 'react-router-dom';
import {
  FaNewspaper,
  FaListAlt,
  FaTasks,
  FaBell,
  FaImages,
  FaCalendarAlt,
} from 'react-icons/fa';
import cx from 'classnames';

const menuItems = [
  {
    text: 'اخبار',
    url: '/',
    icon: <FaNewspaper size={24} />,
  },
  {
    text: 'اطلاعیه ها',
    url: '/',
    icon: <FaListAlt size={24} />,
  },
  {
    text: 'وظایف',
    url: '/',
    icon: <FaTasks size={24} />,
  },
  {
    text: 'وظایف شخصی',
    url: '/',
    icon: <FaTasks size={24} />,
  },
  {
    text: 'نوتیفیکیشن ها',
    url: '/',
    icon: <FaBell size={24} />,
  },
  {
    text: 'گالری تصاویر',
    url: '/',
    icon: <FaImages size={24} />,
  },
  {
    text: 'تقویم',
    url: '/',
    icon: <FaCalendarAlt size={24} />,
  },
];

export default function Sidebar({ show }) {
  return (
    <nav className={cx('sidebar', { show })}>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li className={cx('menu-item', { show })} key={item.text}>
            <Link to={item.url} className={cx('menu-link', { show })}>
              {item.icon}
              <span className={cx('menu-link-text', { show })}>
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
