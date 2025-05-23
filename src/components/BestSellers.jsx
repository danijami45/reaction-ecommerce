function BestSellers() {
  return (
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
  );
}

export default BestSellers;
