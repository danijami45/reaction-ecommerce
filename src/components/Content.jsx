import { useEffect } from 'react';

import Banner from './Banner';
import PromoCards from './PromoCards';
import CategoryCards from './CategoryCards';
import BestSellers from './BestSellers';
import ProductList from './ProductList';

import AOS from 'aos';

function Content() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="main">
      {/* Hero Section Banner */}
      <Banner />
      {/* /Hero Section Banner */}
      {/* Promo Cards Section */}
      <PromoCards />
      {/* /Promo Cards Section */}
      {/* Category Cards Section */}
      <CategoryCards />
      {/* /Category Cards Section */}
      {/* Best Sellers Section */}
      <BestSellers />
      {/* /Best Sellers Section */}
      {/* Product List Section */}
      <ProductList />
      {/* /Product List Section */}
    </main>
  );
}

export default Content;
