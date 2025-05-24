import { base_url } from '../constants';
import { useEffect } from 'react';
import AOS from 'aos';
function CategoriesPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href={base_url}>Home</a>
              </li>
              <li className="current">Category</li>
            </ol>
          </nav>
          <h1>Category</h1>
        </div>
      </div>
      {/* End Page Title */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4 sidebar">
            <div className="widgets-container">
              {/* Product Categories Widget */}
              <div className="product-categories-widget widget-item">
                <h3 className="widget-title">Categories</h3>
                <ul className="category-tree list-unstyled mb-0">
                  {/* Clothing Category */}
                  <li className="category-item">
                    <div
                      className="d-flex justify-content-between align-items-center category-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#categories-1-clothing-subcategories"
                      aria-expanded="false"
                      aria-controls="categories-1-clothing-subcategories"
                    >
                      <a href="javascript:void(0)" className="category-link">
                        Clothing
                      </a>
                      <span className="category-toggle">
                        <i className="bi bi-chevron-down" />
                        <i className="bi bi-chevron-up" />
                      </span>
                    </div>
                    <ul
                      id="categories-1-clothing-subcategories"
                      className="subcategory-list list-unstyled collapse ps-3 mt-2"
                    >
                      <li>
                        <a href="#" className="subcategory-link">
                          Men's Wear
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Women's Wear
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Kids' Clothing
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Accessories
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Electronics Category */}
                  <li className="category-item">
                    <div
                      className="d-flex justify-content-between align-items-center category-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#categories-1-electronics-subcategories"
                      aria-expanded="false"
                      aria-controls="categories-1-electronics-subcategories"
                    >
                      <a href="javascript:void(0)" className="category-link">
                        Electronics
                      </a>
                      <span className="category-toggle">
                        <i className="bi bi-chevron-down" />
                        <i className="bi bi-chevron-up" />
                      </span>
                    </div>
                    <ul
                      id="categories-1-electronics-subcategories"
                      className="subcategory-list list-unstyled collapse ps-3 mt-2"
                    >
                      <li>
                        <a href="#" className="subcategory-link">
                          Smartphones
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Laptops
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Tablets
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Accessories
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Home & Kitchen Category */}
                  <li className="category-item">
                    <div
                      className="d-flex justify-content-between align-items-center category-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#categories-1-home-subcategories"
                      aria-expanded="false"
                      aria-controls="categories-1-home-subcategories"
                    >
                      <a href="javascript:void(0)" className="category-link">
                        Home &amp; Kitchen
                      </a>
                      <span className="category-toggle">
                        <i className="bi bi-chevron-down" />
                        <i className="bi bi-chevron-up" />
                      </span>
                    </div>
                    <ul
                      id="categories-1-home-subcategories"
                      className="subcategory-list list-unstyled collapse ps-3 mt-2"
                    >
                      <li>
                        <a href="#" className="subcategory-link">
                          Furniture
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Kitchen Appliances
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Home Decor
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Bedding
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Beauty & Personal Care Category */}
                  <li className="category-item">
                    <div
                      className="d-flex justify-content-between align-items-center category-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#categories-1-beauty-subcategories"
                      aria-expanded="false"
                      aria-controls="categories-1-beauty-subcategories"
                    >
                      <a href="javascript:void(0)" className="category-link">
                        Beauty &amp; Personal Care
                      </a>
                      <span className="category-toggle">
                        <i className="bi bi-chevron-down" />
                        <i className="bi bi-chevron-up" />
                      </span>
                    </div>
                    <ul
                      id="categories-1-beauty-subcategories"
                      className="subcategory-list list-unstyled collapse ps-3 mt-2"
                    >
                      <li>
                        <a href="#" className="subcategory-link">
                          Skincare
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Makeup
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Hair Care
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Fragrances
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Sports & Outdoors Category */}
                  <li className="category-item">
                    <div
                      className="d-flex justify-content-between align-items-center category-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#categories-1-sports-subcategories"
                      aria-expanded="false"
                      aria-controls="categories-1-sports-subcategories"
                    >
                      <a href="javascript:void(0)" className="category-link">
                        Sports &amp; Outdoors
                      </a>
                      <span className="category-toggle">
                        <i className="bi bi-chevron-down" />
                        <i className="bi bi-chevron-up" />
                      </span>
                    </div>
                    <ul
                      id="categories-1-sports-subcategories"
                      className="subcategory-list list-unstyled collapse ps-3 mt-2"
                    >
                      <li>
                        <a href="#" className="subcategory-link">
                          Fitness Equipment
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Outdoor Gear
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Sports Apparel
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Team Sports
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Books Category (no subcategories) */}
                  <li className="category-item">
                    <div className="d-flex justify-content-between align-items-center category-header">
                      <a href="#" className="category-link">
                        Books
                      </a>
                    </div>
                  </li>
                  {/* Toys & Games Category */}
                  <li className="category-item">
                    <div
                      className="d-flex justify-content-between align-items-center category-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#categories-1-toys-subcategories"
                      aria-expanded="false"
                      aria-controls="categories-1-toys-subcategories"
                    >
                      <a href="javascript:void(0)" className="category-link">
                        Toys &amp; Games
                      </a>
                      <span className="category-toggle">
                        <i className="bi bi-chevron-down" />
                        <i className="bi bi-chevron-up" />
                      </span>
                    </div>
                    <ul
                      id="categories-1-toys-subcategories"
                      className="subcategory-list list-unstyled collapse ps-3 mt-2"
                    >
                      <li>
                        <a href="#" className="subcategory-link">
                          Board Games
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Puzzles
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Action Figures
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subcategory-link">
                          Educational Toys
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*/Product Categories Widget */}
              {/* Pricing Range Widget */}
              <div className="pricing-range-widget widget-item">
                <h3 className="widget-title">Price Range</h3>
                <div className="price-range-container">
                  <div className="current-range mb-3">
                    <span className="min-price">$0</span>
                    <span className="max-price float-end">$1000</span>
                  </div>
                  <div className="range-slider">
                    <div className="slider-track" />
                    <div className="slider-progress" />
                    <input
                      type="range"
                      className="min-range"
                      min={0}
                      max={1000}
                      defaultValue={0}
                      step={10}
                    />
                    <input
                      type="range"
                      className="max-range"
                      min={0}
                      max={1000}
                      defaultValue={500}
                      step={10}
                    />
                  </div>
                  <div className="price-inputs mt-3">
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="input-group input-group-sm">
                          <span className="input-group-text">$</span>
                          <input
                            type="number"
                            className="form-control min-price-input"
                            placeholder="Min"
                            min={0}
                            max={1000}
                            defaultValue={0}
                            step={10}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-group input-group-sm">
                          <span className="input-group-text">$</span>
                          <input
                            type="number"
                            className="form-control max-price-input"
                            placeholder="Max"
                            min={0}
                            max={1000}
                            defaultValue={500}
                            step={10}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-actions mt-3">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary w-100"
                    >
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
              {/*/Pricing Range Widget */}
              {/* Brand Filter Widget */}
              <h3 className="brand-filter-widget widget-item">
                Filter by Brand
              </h3>
              {/*/Brand Filter Widget */}
              {/* Color Filter Widget */}
              <div className="color-filter-widget widget-item">
                <h3 className="widget-title">Filter by Color</h3>
                <div className="color-filter-content">
                  <div className="color-options">
                    <div className="form-check color-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="black"
                        id="color-black"
                      />
                      <label className="form-check-label" htmlFor="color-black">
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: '#000000' }}
                          title="Black"
                        />
                      </label>
                    </div>
                    <div className="form-check color-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="white"
                        id="color-white"
                      />
                      <label className="form-check-label" htmlFor="color-white">
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: '#ffffff' }}
                          title="White"
                        />
                      </label>
                    </div>
                    <div className="form-check color-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="red"
                        id="color-red"
                      />
                      <label className="form-check-label" htmlFor="color-red">
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: '#e74c3c' }}
                          title="Red"
                        />
                      </label>
                    </div>
                    <div className="form-check color-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="blue"
                        id="color-blue"
                      />
                      <label className="form-check-label" htmlFor="color-blue">
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: '#3498db' }}
                          title="Blue"
                        />
                      </label>
                    </div>
                    <div className="form-check color-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="green"
                        id="color-green"
                      />
                      <label className="form-check-label" htmlFor="color-green">
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: '#2ecc71' }}
                          title="Green"
                        />
                      </label>
                    </div>
                    <div className="form-check color-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="yellow"
                        id="color-yellow"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="color-yellow"
                      >
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: '#f1c40f' }}
                          title="Yellow"
                        />
                      </label>
                    </div>
                    <div className="form-check color-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="purple"
                        id="color-purple"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="color-purple"
                      >
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: '#9b59b6' }}
                          title="Purple"
                        />
                      </label>
                    </div>
                    <div className="form-check color-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="orange"
                        id="color-orange"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="color-orange"
                      >
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: '#e67e22' }}
                          title="Orange"
                        />
                      </label>
                    </div>
                    <div className="form-check color-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="pink"
                        id="color-pink"
                      />
                      <label className="form-check-label" htmlFor="color-pink">
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: '#fd79a8' }}
                          title="Pink"
                        />
                      </label>
                    </div>
                    <div className="form-check color-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="brown"
                        id="color-brown"
                      />
                      <label className="form-check-label" htmlFor="color-brown">
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: '#795548' }}
                          title="Brown"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="filter-actions mt-3">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Clear All
                    </button>
                    <button type="button" className="btn btn-sm btn-primary">
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
              {/*/Color Filter Widget */}
              {/* Brand Filter Widget */}
              <div className="brand-filter-widget widget-item">
                <h3 className="widget-title">Filter by Brand</h3>
                <div className="brand-filter-content">
                  <div className="brand-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search brands..."
                    />
                    <i className="bi bi-search" />
                  </div>
                  <div className="brand-list">
                    <div className="brand-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brand1"
                        />
                        <label className="form-check-label" htmlFor="brand1">
                          Nike
                          <span className="brand-count">(24)</span>
                        </label>
                      </div>
                    </div>
                    <div className="brand-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brand2"
                        />
                        <label className="form-check-label" htmlFor="brand2">
                          Adidas
                          <span className="brand-count">(18)</span>
                        </label>
                      </div>
                    </div>
                    <div className="brand-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brand3"
                        />
                        <label className="form-check-label" htmlFor="brand3">
                          Puma
                          <span className="brand-count">(12)</span>
                        </label>
                      </div>
                    </div>
                    <div className="brand-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brand4"
                        />
                        <label className="form-check-label" htmlFor="brand4">
                          Reebok
                          <span className="brand-count">(9)</span>
                        </label>
                      </div>
                    </div>
                    <div className="brand-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brand5"
                        />
                        <label className="form-check-label" htmlFor="brand5">
                          Under Armour
                          <span className="brand-count">(7)</span>
                        </label>
                      </div>
                    </div>
                    <div className="brand-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brand6"
                        />
                        <label className="form-check-label" htmlFor="brand6">
                          New Balance
                          <span className="brand-count">(6)</span>
                        </label>
                      </div>
                    </div>
                    <div className="brand-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brand7"
                        />
                        <label className="form-check-label" htmlFor="brand7">
                          Converse
                          <span className="brand-count">(5)</span>
                        </label>
                      </div>
                    </div>
                    <div className="brand-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brand8"
                        />
                        <label className="form-check-label" htmlFor="brand8">
                          Vans
                          <span className="brand-count">(4)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="brand-actions">
                    <button className="btn btn-sm btn-outline-primary">
                      Apply Filter
                    </button>
                    <button className="btn btn-sm btn-link">Clear All</button>
                  </div>
                </div>
              </div>
              {/*/Brand Filter Widget */}
            </div>
          </div>
          <div className="col-lg-8">
            {/* Category Header Section */}
            <section id="category-header" className="category-header section">
              <div className="container" data-aos="fade-up">
                {/* Filter and Sort Options */}
                <div
                  className="filter-container mb-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="filter-item search-form">
                        <label htmlFor="productSearch" className="form-label">
                          Search Products
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="productSearch"
                            placeholder="Search for products..."
                            aria-label="Search for products"
                          />
                          <button className="btn search-btn" type="button">
                            <i className="bi bi-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                      <div className="filter-item">
                        <label htmlFor="priceRange" className="form-label">
                          Price Range
                        </label>
                        <select className="form-select" id="priceRange">
                          <option selected="">All Prices</option>
                          <option>Under $25</option>
                          <option>$25 to $50</option>
                          <option>$50 to $100</option>
                          <option>$100 to $200</option>
                          <option>$200 &amp; Above</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                      <div className="filter-item">
                        <label htmlFor="sortBy" className="form-label">
                          Sort By
                        </label>
                        <select className="form-select" id="sortBy">
                          <option selected="">Featured</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Customer Rating</option>
                          <option>Newest Arrivals</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="filter-item">
                        <label className="form-label">View</label>
                        <div className="d-flex align-items-center">
                          <div className="view-options me-3">
                            <button
                              type="button"
                              className="btn view-btn active"
                              data-view="grid"
                              aria-label="Grid view"
                            >
                              <i className="bi bi-grid-3x3-gap-fill" />
                            </button>
                            <button
                              type="button"
                              className="btn view-btn"
                              data-view="list"
                              aria-label="List view"
                            >
                              <i className="bi bi-list-ul" />
                            </button>
                          </div>
                          <div className="items-per-page">
                            <select
                              className="form-select"
                              id="itemsPerPage"
                              aria-label="Items per page"
                            >
                              <option value={12}>12 per page</option>
                              <option value={24}>24 per page</option>
                              <option value={48}>48 per page</option>
                              <option value={96}>96 per page</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div
                      className="col-12"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div className="active-filters">
                        <span className="active-filter-label">
                          Active Filters:
                        </span>
                        <div className="filter-tags">
                          <span className="filter-tag">
                            Electronics{' '}
                            <button className="filter-remove">
                              <i className="bi bi-x" />
                            </button>
                          </span>
                          <span className="filter-tag">
                            $50 to $100{' '}
                            <button className="filter-remove">
                              <i className="bi bi-x" />
                            </button>
                          </span>
                          <button className="clear-all-btn">Clear All</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Category Header Section */}
            {/* Category Product List Section */}
            <section
              id="category-product-list"
              className="category-product-list section"
            >
              <div
                className="container"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="row gy-4">
                  {/* Product 1 */}
                  <div className="col-lg-6">
                    <div className="product-box">
                      <div className="product-thumb">
                        <span className="product-label">New Season</span>
                        <img
                          src="src/theme/assets/img/product/product-3.webp"
                          alt="Product Image"
                          className="main-img"
                          loading="lazy"
                        />
                        <div className="product-overlay">
                          <div className="product-quick-actions">
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-heart" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-arrow-repeat" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-eye" />
                            </button>
                          </div>
                          <div className="add-to-cart-container">
                            <button type="button" className="add-to-cart-btn">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-details">
                          <h3 className="product-title">
                            <a href="product-details.html">
                              Vestibulum ante ipsum primis
                            </a>
                          </h3>
                          <div className="product-price">
                            <span>$149.99</span>
                          </div>
                        </div>
                        <div className="product-rating-container">
                          <div className="rating-stars">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <span className="rating-number">4.0</span>
                        </div>
                        <div className="product-color-options">
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#3b82f6' }}
                          />
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#22c55e' }}
                          />
                          <span
                            className="color-option active"
                            style={{ backgroundColor: '#f97316' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product 1 */}
                  {/* Product 2 */}
                  <div className="col-lg-6">
                    <div className="product-box">
                      <div className="product-thumb">
                        <span className="product-label product-label-sale">
                          -30%
                        </span>
                        <img
                          src="src/theme/assets/img/product/product-6.webp"
                          alt="Product Image"
                          className="main-img"
                          loading="lazy"
                        />
                        <div className="product-overlay">
                          <div className="product-quick-actions">
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-heart" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-arrow-repeat" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-eye" />
                            </button>
                          </div>
                          <div className="add-to-cart-container">
                            <button type="button" className="add-to-cart-btn">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-details">
                          <h3 className="product-title">
                            <a href="product-details.html">
                              Aliquam tincidunt mauris eu risus
                            </a>
                          </h3>
                          <div className="product-price">
                            <span className="original">$199.99</span>
                            <span className="sale">$139.99</span>
                          </div>
                        </div>
                        <div className="product-rating-container">
                          <div className="rating-stars">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </div>
                          <span className="rating-number">4.5</span>
                        </div>
                        <div className="product-color-options">
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#0ea5e9' }}
                          />
                          <span
                            className="color-option active"
                            style={{ backgroundColor: '#111827' }}
                          />
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#a855f7' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product 2 */}
                  {/* Product 3 */}
                  <div className="col-lg-6">
                    <div className="product-box">
                      <div className="product-thumb">
                        <img
                          src="src/theme/assets/img/product/product-9.webp"
                          alt="Product Image"
                          className="main-img"
                          loading="lazy"
                        />
                        <div className="product-overlay">
                          <div className="product-quick-actions">
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-heart" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-arrow-repeat" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-eye" />
                            </button>
                          </div>
                          <div className="add-to-cart-container">
                            <button type="button" className="add-to-cart-btn">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-details">
                          <h3 className="product-title">
                            <a href="product-details.html">
                              Cras ornare tristique elit
                            </a>
                          </h3>
                          <div className="product-price">
                            <span>$89.50</span>
                          </div>
                        </div>
                        <div className="product-rating-container">
                          <div className="rating-stars">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                            <i className="bi bi-star" />
                          </div>
                          <span className="rating-number">3.0</span>
                        </div>
                        <div className="product-color-options">
                          <span
                            className="color-option active"
                            style={{ backgroundColor: '#ef4444' }}
                          />
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#64748b' }}
                          />
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#eab308' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product 3 */}
                  {/* Product 4 */}
                  <div className="col-lg-6">
                    <div className="product-box">
                      <div className="product-thumb">
                        <img
                          src="src/theme/assets/img/product/product-11.webp"
                          alt="Product Image"
                          className="main-img"
                          loading="lazy"
                        />
                        <div className="product-overlay">
                          <div className="product-quick-actions">
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-heart" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-arrow-repeat" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-eye" />
                            </button>
                          </div>
                          <div className="add-to-cart-container">
                            <button type="button" className="add-to-cart-btn">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-details">
                          <h3 className="product-title">
                            <a href="product-details.html">
                              Integer vitae libero ac risus
                            </a>
                          </h3>
                          <div className="product-price">
                            <span>$119.00</span>
                          </div>
                        </div>
                        <div className="product-rating-container">
                          <div className="rating-stars">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                          </div>
                          <span className="rating-number">5.0</span>
                        </div>
                        <div className="product-color-options">
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#10b981' }}
                          />
                          <span
                            className="color-option active"
                            style={{ backgroundColor: '#8b5cf6' }}
                          />
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#ec4899' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product 4 */}
                  {/* Product 5 */}
                  <div className="col-lg-6">
                    <div className="product-box">
                      <div className="product-thumb">
                        <span className="product-label product-label-sold">
                          Sold Out
                        </span>
                        <img
                          src="src/theme/assets/img/product/product-2.webp"
                          alt="Product Image"
                          className="main-img"
                          loading="lazy"
                        />
                        <div className="product-overlay">
                          <div className="product-quick-actions">
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-heart" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-arrow-repeat" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-eye" />
                            </button>
                          </div>
                          <div className="add-to-cart-container">
                            <button
                              type="button"
                              className="add-to-cart-btn disabled"
                            >
                              Sold Out
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-details">
                          <h3 className="product-title">
                            <a href="product-details.html">
                              Donec eu libero sit amet quam
                            </a>
                          </h3>
                          <div className="product-price">
                            <span>$75.00</span>
                          </div>
                        </div>
                        <div className="product-rating-container">
                          <div className="rating-stars">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </div>
                          <span className="rating-number">4.7</span>
                        </div>
                        <div className="product-color-options">
                          <span
                            className="color-option active"
                            style={{ backgroundColor: '#4b5563' }}
                          />
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#e11d48' }}
                          />
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#4f46e5' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product 5 */}
                  {/* Product 6 */}
                  <div className="col-lg-6">
                    <div className="product-box">
                      <div className="product-thumb">
                        <span className="product-label product-label-hot">
                          Hot
                        </span>
                        <img
                          src="src/theme/assets/img/product/product-12.webp"
                          alt="Product Image"
                          className="main-img"
                          loading="lazy"
                        />
                        <div className="product-overlay">
                          <div className="product-quick-actions">
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-heart" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-arrow-repeat" />
                            </button>
                            <button type="button" className="quick-action-btn">
                              <i className="bi bi-eye" />
                            </button>
                          </div>
                          <div className="add-to-cart-container">
                            <button type="button" className="add-to-cart-btn">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-details">
                          <h3 className="product-title">
                            <a href="product-details.html">
                              Pellentesque habitant morbi tristique
                            </a>
                          </h3>
                          <div className="product-price">
                            <span>$64.95</span>
                          </div>
                        </div>
                        <div className="product-rating-container">
                          <div className="rating-stars">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                            <i className="bi bi-star" />
                          </div>
                          <span className="rating-number">3.6</span>
                        </div>
                        <div className="product-color-options">
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#eab308' }}
                          />
                          <span
                            className="color-option"
                            style={{ backgroundColor: '#14b8a6' }}
                          />
                          <span
                            className="color-option active"
                            style={{ backgroundColor: '#facc15' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product 6 */}
                </div>
              </div>
            </section>
            {/* /Category Product List Section */}
            {/* Category Pagination Section */}
            <section
              id="category-pagination"
              className="category-pagination section"
            >
              <div className="container">
                <nav
                  className="d-flex justify-content-center"
                  aria-label="Page navigation"
                >
                  <ul>
                    <li>
                      <a href="#" aria-label="Previous page">
                        <i className="bi bi-arrow-left" />
                        <span className="d-none d-sm-inline">Previous</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li className="ellipsis">...</li>
                    <li>
                      <a href="#">8</a>
                    </li>
                    <li>
                      <a href="#">9</a>
                    </li>
                    <li>
                      <a href="#">10</a>
                    </li>
                    <li>
                      <a href="#" aria-label="Next page">
                        <span className="d-none d-sm-inline">Next</span>
                        <i className="bi bi-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
            {/* /Category Pagination Section */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CategoriesPage;
