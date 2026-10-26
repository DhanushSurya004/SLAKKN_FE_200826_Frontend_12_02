const ProductHero = () => {
  return (
    <section className="product-hero" id="top">
      <div className="product-copy">
        <div className="product-badge">
          <span>✦</span> THE NEXT GENERATION
        </div>
        <h1>
          Latest
          <br />
          <em>Technology.</em>
        </h1>
        <p>Discover powerful products for your everyday life.</p>
        <a href="#product-card" className="shop-link">
          Explore collection <span>→</span>
        </a>
      </div>
      <div className="device-scene">
        <div className="scene-glow" />
        <div className="device">
          <div className="device-screen">
            <div className="screen-orb" />
            <div className="screen-lines">
              <i />
              <i />
              <i />
            </div>
            <span className="screen-label">
              CREATE
              <br />
              WITHOUT
              <br />
              LIMITS
            </span>
            <span className="screen-chip">01 / 03</span>
          </div>
          <div className="device-base" />
        </div>
        <span className="scene-caption">DESIGNED FOR WHAT’S NEXT</span>
        <span className="scene-number">01</span>
      </div>
    </section>
  );
};

export default ProductHero;
