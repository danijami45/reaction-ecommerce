import { useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import CategoriesPage from './components/CategoriesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

const Layout = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    <Header />
    <div style={{ flex: 1 }}>
      <Outlet />
    </div>
    <Footer />
  </div>
);

function App() {
  useEffect(() => {
    // Wait for DOM to fully load
    setTimeout(() => {
      new Swiper('.hero-slider', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      new Swiper('.announcement-slider', {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 1,
        effect: 'slide',
        direction: 'vertical',
      });

      const swiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }, 100); // 100ms delay is usually enough
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
