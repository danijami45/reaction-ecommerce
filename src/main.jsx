import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './theme/assets/vendor/bootstrap/css/bootstrap.min.css';
import './theme/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './theme/assets/vendor/swiper/swiper-bundle.min.css';
import './theme/assets/vendor/aos/aos.css';
import './theme/assets/vendor/glightbox/css/glightbox.min.css';
import './theme/assets/vendor/drift-zoom/drift-basic.css';
import './theme/assets/css/main.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
