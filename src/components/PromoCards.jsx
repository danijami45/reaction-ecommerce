import PromoCardBox from './sub_components/PromoCardBox';

function PromoCards() {
  let promoCard1 = {
    data_aos_delay: '100',
    small_text: 'Etiam vel augue 222',
    promo_title: 'Nullam quis ante',
    promo_description:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu in enim justo rhoncus ut.',
    btn_href: '#',
    btn_label: 'Shop Now',
    img_src: 'src/theme/assets/img/product/product-1.webp',
  };

  let promoCard2 = {
    data_aos_delay: '200',
    small_text: 'Maecenas tempus',
    promo_title: 'Sed fringilla mauris',
    promo_description:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu in enim justo rhoncus ut.',
    btn_href: '#',
    btn_label: 'Shop Now',
    img_src: 'src/theme/assets/img/product/product-2.webp',
  };

  let promoCard3 = {
    data_aos_delay: '300',
    small_text: 'Aenean commodo',
    promo_title: 'Fusce vulputate eleifend',
    promo_description:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu in enim justo rhoncus ut.',
    btn_href: '#',
    btn_label: 'Shop Now',
    img_src: 'src/theme/assets/img/product/product-f-1.webp',
  };

  let promoCard4 = {
    data_aos_delay: '400',
    small_text: 'Pellentesque auctor',
    promo_title: 'Vestibulum dapibus nunc',
    promo_description:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu in enim justo rhoncus ut.',
    btn_href: '#',
    btn_label: 'Shop Now',
    img_src: 'src/theme/assets/img/product/product-m-1.webp',
  };

  return (
    <section id="promo-cards" className="promo-cards section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-4">
          {/* Promo Card 1 */}
          <PromoCardBox data={promoCard1} />
          {/* Promo Card 2 */}
          <PromoCardBox data={promoCard2} />
          {/* Promo Card 3 */}
          <PromoCardBox data={promoCard3} />
          {/* Promo Card 4 */}
          <PromoCardBox data={promoCard4} />
        </div>
      </div>
    </section>
  );
}

export default PromoCards;
