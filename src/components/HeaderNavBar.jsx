function HeaderNavBar() {
  return (
    <div className="header-nav">
      <div className="container-fluid container-xl position-relative">
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="index.html" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="category.html">Category</a>
            </li>
            <li>
              <a href="product-details.html">Product Details</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNavBar;
