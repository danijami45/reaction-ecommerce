function AnnouncementBar() {
  return (
    <div className="announcement-bar py-2">
      <div className="container-fluid container-xl">
        <div className="announcement-slider swiper init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              🚚 Free shipping on orders over $50
            </div>
            <div className="swiper-slide">💰 30 days money back guarantee</div>
            <div className="swiper-slide">
              🎁 20% off on your first order - Use code: FIRST20
            </div>
            <div className="swiper-slide">
              ⚡ Flash Sale! Up to 70% off on selected items
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AnnouncementBar;
