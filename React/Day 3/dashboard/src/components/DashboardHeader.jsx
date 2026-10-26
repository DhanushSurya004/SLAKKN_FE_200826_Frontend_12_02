const DashboardHeader = () => {
  return (
    <header className="dash-header">
      <div>
        <span className="dash-crumb">
          WORKSPACE <span>/</span> HOME
        </span>
        <h1>Dashboard</h1>
      </div>
      <div className="dash-header-right">
        <span className="today">
          <i /> Your space is ready
        </span>
        <div className="header-avatar">DS</div>
      </div>
    </header>
  );
};

export default DashboardHeader;
