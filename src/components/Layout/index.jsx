import { Outlet } from 'react-router-dom';
import Header from './Header';
import './Layout.scss';

const Layout = () => {
  return (
    <div id="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Copyright © 2023 Some Company Inc. All rights reserved.</footer>
    </div>
  );
};

export default Layout;
