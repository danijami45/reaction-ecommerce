import { base_url } from '../constants';
function HeaderNavBar() {
  return (
    <div className="header-nav">
      <div className="container-fluid container-xl position-relative">
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href={base_url} className="active">
                Home
              </a>
            </li>
            <li>
              <a href={base_url + '/categories'}>Categories</a>
            </li>
            <li>
              <a href={base_url + '/about'}>About</a>
            </li>
            <li>
              <a href={base_url + '/contact'}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNavBar;
