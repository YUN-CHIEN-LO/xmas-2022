import { Outlet, Link } from 'react-router-dom';

import style from './layout.module.scss';

const Layout = () => {
  return (
    <div className={style.layout}>
      {/* <nav className={style.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <div className={style.container}>
        <Outlet />
      </div>

      <div className={style.snow}></div>
    </div>
  );
};

export default Layout;
