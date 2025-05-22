function PromoCardBox({ data }) {
  return (
    <div
      className="col-md-6 col-lg-3"
      data-aos="fade-up"
      data-aos-delay={data.data_aos_delay}
    >
      <div className="promo-card card-1">
        <div className="promo-content">
          <p className="small-text">{data.small_text}</p>
          <h3 className="promo-title">{data.promo_title}</h3>
          <p className="promo-description">{data.promo_description}</p>
          <a href={data.btn_href} className="btn-shop">
            {data.btn_label}
          </a>
        </div>
        <div className="promo-image">
          <img src={data.img_src} alt="Product" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default PromoCardBox;
