const ProductInfo = () => {
  return (
    <article className="product-info" id="product-card">
      <div className="product-thumb">
        <span>✳</span>
        <i />
        <i />
      </div>
      <div className="product-name">
        <span className="featured-label">FEATURED PRODUCT</span>
        <h2>Laptop</h2>
        <p>Lightweight power for big ideas.</p>
      </div>
      <div className="product-price">
        <span>PRICE</span>
        <strong>₹60,000</strong>
      </div>
      <div className="availability">
        <span className="availability-dot" /> Available
      </div>
      <a
        href="mailto:hello@example.com"
        className="product-arrow"
        aria-label="Ask about product"
      >
        ↗
      </a>
    </article>
  );
};

export default ProductInfo;
