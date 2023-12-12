import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Copyright © 2023 Some Company Inc. All rights reserved.</footer>
    </>
  );
};

export default Layout;
