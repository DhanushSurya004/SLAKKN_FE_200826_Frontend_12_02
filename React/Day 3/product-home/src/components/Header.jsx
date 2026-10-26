const Header = () => {
  return (
    <header className="store-header">
      <a href="#top" className="store-brand">
        <span className="store-icon">◈</span> TechStore
      </a>
      <nav>
        <a href="#top">Home</a>
        <a href="#product-card">Products</a>
        <a href="mailto:hello@example.com">Contact</a>
      </nav>
      <a className="bag" href="#product-card" aria-label="Browse product">
        ↗
      </a>
    </header>
  );
};

export default Header;
