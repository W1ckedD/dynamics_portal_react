import { useState } from 'react';

import Navbar from 'components/Navbar/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';
import cx from 'classnames';

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <Sidebar show={showSidebar} />
      <div className={cx('app', { expand: !showSidebar })}>{children}</div>
    </>
  );
}
