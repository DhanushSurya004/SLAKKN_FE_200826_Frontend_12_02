const Sidebar = () => {
  return (
    <aside className="sidebar">
      <a className="dash-brand" href="#home">
        <span className="dash-logo">◫</span>
        <span>
          space<span className="brand-sub"> / personal</span>
        </span>
      </a>
      <div className="workspace-label">WORKSPACE</div>
      <nav className="side-nav">
        <a className="selected" href="#home">
          <span>⌂</span>Home
        </a>
        <a href="#profile">
          <span>◉</span>Profile
        </a>
        <a href="#settings">
          <span>⚙</span>Settings
        </a>
      </nav>
      <div className="sidebar-bottom">
        <div className="mini-profile">
          <div className="mini-avatar">DS</div>
          <div>
            <b>Dhanush Surya</b>
            <span>MCA student</span>
          </div>
          <span className="more">···</span>
        </div>
        <a href="#home" className="logout">
          <span>↪</span> Log out
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
