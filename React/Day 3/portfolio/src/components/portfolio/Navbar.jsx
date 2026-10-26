const Navbar = () => {
  return (
    <nav className="portfolio-nav">
      <a className="brand" href="#home">
        <span className="brand-mark">D</span>
        <span>
          Dhanush<span className="brand-dot">.</span>
        </span>
      </a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="mailto:hello@example.com">Contact</a>
      </div>
      <span className="nav-status">
        <i /> Open to opportunities
      </span>
    </nav>
  );
};

export default Navbar;
