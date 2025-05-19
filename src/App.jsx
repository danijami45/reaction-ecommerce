import { useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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
    }, 100); // 100ms delay is usually enough
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
