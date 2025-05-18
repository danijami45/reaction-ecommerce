import { useEffect } from 'react';
import AOS from 'aos';
import Swiper from 'swiper';

function Content() {
  useEffect(() => {
    AOS.init();

    new Swiper('.hero-slider', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="ecommerce-hero-2 hero section" id="hero">
        <div className="container">
          <div className="hero-slider swiper init-swiper" data-aos="fade-up">
            <div className="swiper-wrapper">
              {/* New Collection Slide */}
              <div className="swiper-slide slide-new">
                <div className="row align-items-center">
                  <div
                    className="col-lg-6 content-col"
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    <div className="slide-content">
                      <span className="slide-badge">New Arrivals</span>
                      <h1>
                        Discover Our <span>Latest</span> Collection
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget tortor risus. Vivamus magna justo, lacinia
                        eget consectetur sed, convallis at tellus.
                      </p>
                      <div className="slide-cta">
                        <a href="#" className="btn btn-shop">
                          Shop New Arrivals <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 image-col"
                    data-aos="fade-left"
                    data-aos-delay={200}
                  >
                    <div className="product-showcase">
                      <div className="product-grid">
                        <div
                          className="product-item"
                          data-aos="fade-up"
                          data-aos-delay={300}
                        >
                          <div className="product-image">
                            <img
                              src="src/theme/assets/img/product/product-1.webp"
                              alt="New Product 1"
                            />
                          </div>
                          <div className="product-info">
                            <h4>Modern Style</h4>
                            <span className="price">$79.99</span>
                          </div>
                        </div>
                        <div
                          className="product-item"
                          data-aos="fade-up"
                          data-aos-delay={400}
                        >
                          <div className="product-image">
                            <img
                              src="src/theme/assets/img/product/product-2.webp"
                              alt="New Product 2"
                            />
                          </div>
                          <div className="product-info">
                            <h4>Casual Collection</h4>
                            <span className="price">$64.99</span>
                          </div>
                        </div>
                        <div
                          className="product-item"
                          data-aos="fade-up"
                          data-aos-delay={500}
                        >
                          <div className="product-image">
                            <img
                              src="src/theme/assets/img/product/product-6.webp"
                              alt="New Product 3"
                            />
                          </div>
                          <div className="product-info">
                            <h4>Premium Design</h4>
                            <span className="price">$89.99</span>
                          </div>
                        </div>
                        <div
                          className="product-item"
                          data-aos="fade-up"
                          data-aos-delay={600}
                        >
                          <div className="product-image">
                            <img
                              src="src/theme/assets/img/product/product-7.webp"
                              alt="New Product 4"
                            />
                          </div>
                          <div className="product-info">
                            <h4>Elegant Series</h4>
                            <span className="price">$74.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sale Products Slide */}
              <div className="swiper-slide slide-sale">
                <div className="row align-items-center">
                  <div
                    className="col-lg-6 content-col"
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    <div className="slide-content">
                      <span className="slide-badge">Limited Time</span>
                      <h1>
                        Season <span>Sale</span> Up To 50% Off
                      </h1>
                      <p>
                        Curabitur aliquet quam id dui posuere blandit. Nulla
                        quis lorem ut libero malesuada feugiat. Mauris blandit
                        aliquet elit, eget tincidunt nibh pulvinar.
                      </p>
                      <div className="slide-cta">
                        <a href="#" className="btn btn-shop">
                          Shop Sale <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                      <div className="countdown-container">
                        <div className="countdown-label">Offer ends in:</div>
                        <div
                          className="countdown d-flex"
                          data-count="2025/6/15"
                        >
                          <div>
                            <h3 className="count-days" />
                            <h4>Days</h4>
                          </div>
                          <div>
                            <h3 className="count-hours" />
                            <h4>Hours</h4>
                          </div>
                          <div>
                            <h3 className="count-minutes" />
                            <h4>Minutes</h4>
                          </div>
                          <div>
                            <h3 className="count-seconds" />
                            <h4>Seconds</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 image-col"
                    data-aos="fade-left"
                    data-aos-delay={200}
                  >
                    <div className="sale-showcase">
                      <div className="main-product">
                        <img
                          src="src/theme/assets/img/product/product-8.webp"
                          alt="Sale Product"
                        />
                        <div className="discount-badge">
                          <span className="percent">50%</span>
                          <span className="text">OFF</span>
                        </div>
                      </div>
                      <div
                        className="floating-tag"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                      >
                        <div className="tag-content">
                          <span className="tag-label">Best Seller</span>
                          <span className="tag-price">
                            <span className="old-price">$129.99</span>
                            <span className="new-price">$64.99</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Featured Products Slide */}
              <div className="swiper-slide slide-featured">
                <div className="row align-items-center">
                  <div
                    className="col-lg-6 content-col"
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    <div className="slide-content">
                      <span className="slide-badge">Featured Collection</span>
                      <h1>
                        Premium <span>Quality</span> Products
                      </h1>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Donec rutrum congue leo eget malesuada.
                        Cras ultricies ligula sed magna dictum porta.
                      </p>
                      <div className="slide-cta">
                        <a href="#" className="btn btn-shop">
                          Explore Collection <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                      <div className="feature-list">
                        <div className="feature-item">
                          <i className="bi bi-check-circle-fill" />
                          <span>Premium Materials</span>
                        </div>
                        <div className="feature-item">
                          <i className="bi bi-check-circle-fill" />
                          <span>Handcrafted Quality</span>
                        </div>
                        <div className="feature-item">
                          <i className="bi bi-check-circle-fill" />
                          <span>Lifetime Warranty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 image-col"
                    data-aos="fade-left"
                    data-aos-delay={200}
                  >
                    <div className="featured-showcase">
                      <div className="featured-image">
                        <img
                          src="src/theme/assets/img/product/product-9.webp"
                          alt="Featured Product"
                        />
                        <div className="featured-badge">
                          <i className="bi bi-star-fill" />
                          <span>Featured</span>
                        </div>
                      </div>
                      <div
                        className="floating-review"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <div className="review-stars">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                        <div className="review-text">
                          "Exceptional quality and design"
                        </div>
                        <div className="review-author">
                          - Satisfied Customer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
      </section>
      {/* /Hero Section */}
      {/* Promo Cards Section */}
      <section id="promo-cards" className="promo-cards section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row g-4">
            {/* Promo Card 1 */}
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="promo-card card-1">
                <div className="promo-content">
                  <p className="small-text">Etiam vel augue</p>
                  <h3 className="promo-title">Nullam quis ante</h3>
                  <p className="promo-description">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu in enim justo rhoncus ut.
                  </p>
                  <a href="#" className="btn-shop">
                    Shop Now
                  </a>
                </div>
                <div className="promo-image">
                  <img
                    src="src/theme/assets/img/product/product-1.webp"
                    alt="Product"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* Promo Card 2 */}
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="promo-card card-2">
                <div className="promo-content">
                  <p className="small-text">Maecenas tempus</p>
                  <h3 className="promo-title">Sed fringilla mauris</h3>
                  <p className="promo-description">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu in enim justo rhoncus ut.
                  </p>
                  <a href="#" className="btn-shop">
                    Shop Now
                  </a>
                </div>
                <div className="promo-image">
                  <img
                    src="src/theme/assets/img/product/product-2.webp"
                    alt="Product"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* Promo Card 3 */}
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="promo-card card-3">
                <div className="promo-content">
                  <p className="small-text">Aenean commodo</p>
                  <h3 className="promo-title">Fusce vulputate eleifend</h3>
                  <p className="promo-description">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu in enim justo rhoncus ut.
                  </p>
                  <a href="#" className="btn-shop">
                    Shop Now
                  </a>
                </div>
                <div className="promo-image">
                  <img
                    src="src/theme/assets/img/product/product-f-1.webp"
                    alt="Product"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* Promo Card 4 */}
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="promo-card card-4">
                <div className="promo-content">
                  <p className="small-text">Pellentesque auctor</p>
                  <h3 className="promo-title">Vestibulum dapibus nunc</h3>
                  <p className="promo-description">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu in enim justo rhoncus ut.
                  </p>
                  <a href="#" className="btn-shop">
                    Shop Now
                  </a>
                </div>
                <div className="promo-image">
                  <img
                    src="src/theme/assets/img/product/product-m-1.webp"
                    alt="Product"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Promo Cards Section */}
      {/* Category Cards Section */}
      <section
        id="category-cards"
        className="category-cards section light-background"
      >
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="category-tabs">
            <ul
              className="nav justify-content-center"
              id="category-cards-tabs"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="category-cards-men-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#category-cards-men-content"
                  type="button"
                  role="tab"
                  aria-controls="category-cards-men-content"
                  aria-selected="false"
                >
                  SHOP MEN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="category-cards-women-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#category-cards-women-content"
                  type="button"
                  role="tab"
                  aria-controls="category-cards-women-content"
                  aria-selected="true"
                >
                  SHOP WOMEN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="category-cards-accesoires-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#category-cards-accesoires-content"
                  type="button"
                  role="tab"
                  aria-controls="category-cards-accesoires-content"
                  aria-selected="false"
                >
                  SHOP ACCESSOIRCES
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="category-cards-tabContent">
            {/* Men's Categories */}
            <div
              className="tab-pane fade"
              id="category-cards-men-content"
              role="tabpanel"
              aria-labelledby="category-cards-men-tab"
            >
              <div className="row g-4">
                {/* Leather Category */}
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="category-card">
                    <img
                      src="src/theme/assets/img/product/product-m-11.webp"
                      alt="Men's Leather"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <a href="#" className="category-link">
                      LEATHER <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Denim Category */}
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="category-card">
                    <img
                      src="src/theme/assets/img/product/product-m-12.webp"
                      alt="Men's Denim"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <a href="#" className="category-link">
                      DENIM <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Swimwear Category */}
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="category-card">
                    <img
                      src="src/theme/assets/img/product/product-m-19.webp"
                      alt="Men's Swimwear"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <a href="#" className="category-link">
                      SWIMWEAR <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Women's Categories */}
            <div
              className="tab-pane fade show active"
              id="category-cards-women-content"
              role="tabpanel"
              aria-labelledby="category-cards-women-tab"
            >
              <div className="row g-4">
                {/* Dresses Category */}
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="category-card">
                    <img
                      src="src/theme/assets/img/product/product-f-11.webp"
                      alt="Women's Dresses"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <a href="#" className="category-link">
                      DRESSES <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Tops Category */}
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="category-card">
                    <img
                      src="src/theme/assets/img/product/product-f-18.webp"
                      alt="Women's Tops"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <a href="#" className="category-link">
                      TOPS <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Accessories Category */}
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="category-card">
                    <img
                      src="src/theme/assets/img/product/product-f-13.webp"
                      alt="Women's Accessories"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <a href="#" className="category-link">
                      ACCESSORIES <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Kid's Categories */}
            <div
              className="tab-pane fade"
              id="category-cards-accesoires-content"
              role="tabpanel"
              aria-labelledby="category-cards-accesoires-tab"
            >
              <div className="row g-4">
                {/* Boys Category */}
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="category-card">
                    <img
                      src="src/theme/assets/img/product/product-1.webp"
                      alt="Boys Clothing"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <a href="#" className="category-link">
                      BOYS <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Girls Category */}
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="category-card">
                    <img
                      src="src/theme/assets/img/product/product-2.webp"
                      alt="Girls Clothing"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <a href="#" className="category-link">
                      GIRLS <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Toys Category */}
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="category-card">
                    <img
                      src="src/theme/assets/img/product/product-3.webp"
                      alt="Kids Toys"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <a href="#" className="category-link">
                      TOYS <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Category Cards Section */}
      {/* Best Sellers Section */}
      <section id="best-sellers" className="best-sellers section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Best Sellers</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row g-4">
            {/* Product 1 */}
            <div className="col-6 col-lg-3">
              <div className="product-card" data-aos="zoom-in">
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-f-1.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="src/theme/assets/img/product/product-f-2.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye" />
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Women's Fashion</div>
                  <h4 className="product-title">
                    <a href="product-details.html">Tempor Incididunt</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$129.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill" />
                      4.8 <span>(42)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="col-6 col-lg-3">
              <div
                className="product-card"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-m-1.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="src/theme/assets/img/product/product-m-2.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye" />
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="product-badge new">New</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Men's Collection</div>
                  <h4 className="product-title">
                    <a href="product-details.html">Elit Consectetur</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$95.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill" />
                      4.6 <span>(28)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="col-6 col-lg-3">
              <div
                className="product-card"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-f-3.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="src/theme/assets/img/product/product-f-4.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye" />
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="product-badge sale">-25%</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Accessories</div>
                  <h4 className="product-title">
                    <a href="product-details.html">Adipiscing Magna</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">
                      $75.00
                      <span className="original-price">$99.00</span>
                    </div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill" />
                      4.9 <span>(56)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="col-6 col-lg-3">
              <div
                className="product-card"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-m-3.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="src/theme/assets/img/product/product-m-4.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye" />
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Footwear</div>
                  <h4 className="product-title">
                    <a href="product-details.html">Labore Dolore</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$145.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill" />
                      4.7 <span>(35)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 5 */}
            <div className="col-6 col-lg-3">
              <div
                className="product-card"
                data-aos="zoom-in"
                data-aos-delay={400}
              >
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-f-5.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="src/theme/assets/img/product/product-f-6.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye" />
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Men's Fashion</div>
                  <h4 className="product-title">
                    <a href="product-details.html">Magna Aliqua</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$89.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill" />
                      4.5 <span>(23)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 6 */}
            <div className="col-6 col-lg-3">
              <div
                className="product-card"
                data-aos="zoom-in"
                data-aos-delay={500}
              >
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-m-5.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="src/theme/assets/img/product/product-m-6.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye" />
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="product-badge sale">-15%</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Women's Fashion</div>
                  <h4 className="product-title">
                    <a href="product-details.html">Eiusmod Tempor</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">
                      $110.00
                      <span className="original-price">$129.00</span>
                    </div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill" />
                      4.8 <span>(47)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 7 */}
            <div className="col-6 col-lg-3">
              <div
                className="product-card"
                data-aos="zoom-in"
                data-aos-delay={600}
              >
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-f-7.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="src/theme/assets/img/product/product-f-8.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye" />
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Accessories</div>
                  <h4 className="product-title">
                    <a href="product-details.html">Incididunt Labore</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$55.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill" />
                      4.6 <span>(31)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 8 */}
            <div className="col-6 col-lg-3">
              <div
                className="product-card"
                data-aos="zoom-in"
                data-aos-delay={700}
              >
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-m-7.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="src/theme/assets/img/product/product-m-8.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye" />
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="product-badge new">New</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Men's Fashion</div>
                  <h4 className="product-title">
                    <a href="product-details.html">Aliqua Magna</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$79.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill" />
                      4.7 <span>(39)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Best Sellers Section */}
      {/* Product List Section */}
      <section id="product-list" className="product-list section">
        <div
          className="container isotope-layout"
          data-aos="fade-up"
          data-aos-delay={100}
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="row">
            <div className="col-12">
              <div
                className="product-filters isotope-filters mb-5 d-flex justify-content-center"
                data-aos="fade-up"
              >
                <ul className="d-flex flex-wrap gap-2 list-unstyled">
                  <li className="filter-active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".filter-clothing">Clothing</li>
                  <li data-filter=".filter-accessories">Accessories</li>
                  <li data-filter=".filter-electronics">Electronics</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="row product-container isotope-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {/* Product Item 1 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-clothing">
              <div className="product-card">
                <div className="product-image">
                  <span className="badge">Sale</span>
                  <img
                    src="src/theme/assets/img/product/product-1.webp"
                    alt="Product"
                    className="img-fluid main-img"
                  />
                  <img
                    src="src/theme/assets/img/product/product-1-variant.webp"
                    alt="Product Hover"
                    className="img-fluid hover-img"
                  />
                  <div className="product-overlay">
                    <a href="cart.html" className="btn-cart">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </a>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <a href="product-details.html">
                      Lorem ipsum dolor sit amet
                    </a>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$89.99</span>
                    <span className="old-price">$129.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <span>(24)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}
            {/* Product Item 2 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-electronics">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-2.webp"
                    alt="Product"
                    className="img-fluid main-img"
                  />
                  <img
                    src="src/theme/assets/img/product/product-2-variant.webp"
                    alt="Product Hover"
                    className="img-fluid hover-img"
                  />
                  <div className="product-overlay">
                    <a href="cart.html" className="btn-cart">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </a>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <a href="product-details.html">
                      Consectetur adipiscing elit
                    </a>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$249.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star" />
                    <span>(18)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}
            {/* Product Item 3 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-accessories">
              <div className="product-card">
                <div className="product-image">
                  <span className="badge">New</span>
                  <img
                    src="src/theme/assets/img/product/product-3.webp"
                    alt="Product"
                    className="img-fluid main-img"
                  />
                  <img
                    src="src/theme/assets/img/product/product-3-variant.webp"
                    alt="Product Hover"
                    className="img-fluid hover-img"
                  />
                  <div className="product-overlay">
                    <a href="cart.html" className="btn-cart">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </a>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <a href="product-details.html">Sed do eiusmod tempor</a>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$59.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star" />
                    <i className="bi bi-star" />
                    <span>(7)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}
            {/* Product Item 4 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-clothing">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-4.webp"
                    alt="Product"
                    className="img-fluid main-img"
                  />
                  <img
                    src="src/theme/assets/img/product/product-4-variant.webp"
                    alt="Product Hover"
                    className="img-fluid hover-img"
                  />
                  <div className="product-overlay">
                    <a href="cart.html" className="btn-cart">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </a>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <a href="product-details.html">
                      Incididunt ut labore et dolore
                    </a>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$79.99</span>
                    <span className="old-price">$99.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <span>(32)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}
            {/* Product Item 5 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-electronics">
              <div className="product-card">
                <div className="product-image">
                  <span className="badge">Sale</span>
                  <img
                    src="src/theme/assets/img/product/product-5.webp"
                    alt="Product"
                    className="img-fluid main-img"
                  />
                  <img
                    src="src/theme/assets/img/product/product-5-variant.webp"
                    alt="Product Hover"
                    className="img-fluid hover-img"
                  />
                  <div className="product-overlay">
                    <a href="cart.html" className="btn-cart">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </a>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <a href="product-details.html">
                      Magna aliqua ut enim ad minim
                    </a>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$199.99</span>
                    <span className="old-price">$249.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <i className="bi bi-star" />
                    <span>(15)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}
            {/* Product Item 6 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-accessories">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-6.webp"
                    alt="Product"
                    className="img-fluid main-img"
                  />
                  <img
                    src="src/theme/assets/img/product/product-6-variant.webp"
                    alt="Product Hover"
                    className="img-fluid hover-img"
                  />
                  <div className="product-overlay">
                    <a href="cart.html" className="btn-cart">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </a>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <a href="product-details.html">
                      Veniam quis nostrud exercitation
                    </a>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$45.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star" />
                    <span>(21)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}
            {/* Product Item 7 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-clothing">
              <div className="product-card">
                <div className="product-image">
                  <span className="badge">New</span>
                  <img
                    src="src/theme/assets/img/product/product-7.webp"
                    alt="Product"
                    className="img-fluid main-img"
                  />
                  <img
                    src="src/theme/assets/img/product/product-7-variant.webp"
                    alt="Product Hover"
                    className="img-fluid hover-img"
                  />
                  <div className="product-overlay">
                    <a href="cart.html" className="btn-cart">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </a>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <a href="product-details.html">
                      Ullamco laboris nisi ut aliquip
                    </a>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$69.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <i className="bi bi-star" />
                    <span>(11)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}
            {/* Product Item 8 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-electronics">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="src/theme/assets/img/product/product-8.webp"
                    alt="Product"
                    className="img-fluid main-img"
                  />
                  <img
                    src="src/theme/assets/img/product/product-8-variant.webp"
                    alt="Product Hover"
                    className="img-fluid hover-img"
                  />
                  <div className="product-overlay">
                    <a href="cart.html" className="btn-cart">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </a>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye" />
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <a href="product-details.html">Ex ea commodo consequat</a>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$159.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <span>(29)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}
          </div>
          <div className="text-center mt-5" data-aos="fade-up">
            <a href="category.html" className="view-all-btn">
              View All Products <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </section>
      {/* /Product List Section */}
    </main>
  );
}

export default Content;
