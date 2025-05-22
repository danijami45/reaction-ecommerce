function ButtonShop({ children, ...props }) {
  return (
    <a {...props} className="btn btn-shop">
      {children} <i className="bi bi-arrow-right" />
    </a>
  );
}

export default ButtonShop;
