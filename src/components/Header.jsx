import AnnouncementBar from './AnnouncementBar';
import HeaderNavBar from './HeaderNavBar';

function Header() {
  return (
    <header id="header" className="header position-relative">
      {/* Top Bar */}
      <div className="top-bar py-2 d-none d-lg-block">
        <div className="container-fluid container-xl">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <div className="top-bar-item me-4">
                  <i className="bi bi-telephone-fill me-2" />
                  <span>Customer Support: </span>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
                <div className="top-bar-item">
                  <i className="bi bi-envelope-fill me-2" />
                  <a href="mailto:support@example.com">support@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-end">
                <div className="top-bar-item me-4">
                  <a href="track-order.html">
                    <i className="bi bi-truck me-2" />
                    Track Order
                  </a>
                </div>
                <div className="top-bar-item dropdown me-4">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bi bi-translate me-2" />
                    English
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-check2 me-2 selected-icon" />
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Español
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Français
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Deutsch
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="top-bar-item dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bi bi-currency-dollar me-2" />
                    USD
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-check2 me-2 selected-icon" />
                        USD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        EUR
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        GBP
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="main-header">
        <div className="container-fluid container-xl">
          <div className="d-flex py-3 align-items-center justify-content-between">
            {/* Logo */}
            <a href="index.html" className="logo d-flex align-items-center">
              {/* Uncomment the line below if you also wish to use an image logo */}
              {/* <img src="assets/img/logo.webp" alt=""> */}
              <h1 className="sitename">
                React<span>ION</span>
              </h1>
            </a>
            {/* Search */}
            <form className="search-form desktop-search-form">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products..."
                />
                <button className="btn search-btn" type="submit">
                  <i className="bi bi-search" />
                </button>
              </div>
            </form>
            {/* Actions */}
            <div className="header-actions d-flex align-items-center justify-content-end">
              {/* Mobile Search Toggle */}
              <button
                className="header-action-btn mobile-search-toggle d-xl-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileSearch"
                aria-expanded="false"
                aria-controls="mobileSearch"
              >
                <i className="bi bi-search" />
              </button>
              {/* Account */}
              <div className="dropdown account-dropdown">
                <button
                  type="button"
                  className="header-action-btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person" />
                  <span className="action-text d-none d-md-inline-block">
                    Account
                  </span>
                </button>
                <div className="dropdown-menu">
                  <div className="dropdown-header">
                    <h6>
                      Welcome to{' '}
                      <span className="sitename">
                        React<span>ION</span>
                      </span>
                    </h6>
                    <p className="mb-0">Access account &amp; manage orders</p>
                  </div>
                  <div className="dropdown-body">
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="account.html"
                    >
                      <i className="bi bi-person-circle me-2" />
                      <span>My Profile</span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="orders.html"
                    >
                      <i className="bi bi-bag-check me-2" />
                      <span>My Orders</span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="wishlist.html"
                    >
                      <i className="bi bi-heart me-2" />
                      <span>My Wishlist</span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="returns.html"
                    >
                      <i className="bi bi-arrow-return-left me-2" />
                      <span>Returns &amp; Refunds</span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="settings.html"
                    >
                      <i className="bi bi-gear me-2" />
                      <span>Settings</span>
                    </a>
                  </div>
                  <div className="dropdown-footer">
                    <a href="login.html" className="btn btn-primary w-100 mb-2">
                      Sign In
                    </a>
                    <a
                      href="register.html"
                      className="btn btn-outline-primary w-100"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
              {/* Wishlist */}
              <a
                href="wishlist.html"
                className="header-action-btn d-none d-md-flex"
              >
                <i className="bi bi-heart" />
                <span className="action-text d-none d-md-inline-block">
                  Wishlist
                </span>
                <span className="badge">0</span>
              </a>
              {/* Cart */}
              <div className="dropdown cart-dropdown">
                <button className="header-action-btn" data-bs-toggle="dropdown">
                  <i className="bi bi-cart3" />
                  <span className="action-text d-none d-md-inline-block">
                    Cart
                  </span>
                  <span className="badge">3</span>
                </button>
                <div className="dropdown-menu cart-dropdown-menu">
                  <div className="dropdown-header">
                    <h6>Shopping Cart (3)</h6>
                  </div>
                  <div className="dropdown-body">
                    <div className="cart-items">
                      {/* Cart Item 1 */}
                      <div className="cart-item">
                        <div className="cart-item-image">
                          <img
                            src="assets/img/product/product-1.webp"
                            alt="Product"
                            className="img-fluid"
                          />
                        </div>
                        <div className="cart-item-content">
                          <h6 className="cart-item-title">
                            Wireless Headphones
                          </h6>
                          <div className="cart-item-meta">1 × $89.99</div>
                        </div>
                        <button className="cart-item-remove">
                          <i className="bi bi-x" />
                        </button>
                      </div>
                      {/* Cart Item 2 */}
                      <div className="cart-item">
                        <div className="cart-item-image">
                          <img
                            src="assets/img/product/product-2.webp"
                            alt="Product"
                            className="img-fluid"
                          />
                        </div>
                        <div className="cart-item-content">
                          <h6 className="cart-item-title">Smart Watch</h6>
                          <div className="cart-item-meta">1 × $129.99</div>
                        </div>
                        <button className="cart-item-remove">
                          <i className="bi bi-x" />
                        </button>
                      </div>
                      {/* Cart Item 3 */}
                      <div className="cart-item">
                        <div className="cart-item-image">
                          <img
                            src="assets/img/product/product-3.webp"
                            alt="Product"
                            className="img-fluid"
                          />
                        </div>
                        <div className="cart-item-content">
                          <h6 className="cart-item-title">Bluetooth Speaker</h6>
                          <div className="cart-item-meta">1 × $59.99</div>
                        </div>
                        <button className="cart-item-remove">
                          <i className="bi bi-x" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-footer">
                    <div className="cart-total">
                      <span>Total:</span>
                      <span className="cart-total-price">$279.97</span>
                    </div>
                    <div className="cart-actions">
                      <a href="cart.html" className="btn btn-outline-primary">
                        View Cart
                      </a>
                      <a href="checkout.html" className="btn btn-primary">
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Navigation Toggle */}
              <i className="mobile-nav-toggle d-xl-none bi bi-list me-0" />
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <HeaderNavBar />
      {/* Announcement Bar */}
      <AnnouncementBar />
      {/* Mobile Search Form */}
      <div className="collapse" id="mobileSearch">
        <div className="container">
          <form className="search-form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products..."
              />
              <button className="btn search-btn" type="submit">
                <i className="bi bi-search" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
