const WelcomeSection = () => {
  return (
    <section className="welcome-card" id="home">
      <div className="welcome-text">
        <span className="welcome-kicker">
          MONDAY, OCTOBER 26, 2026 <span>✳</span>
        </span>
        <h2>Welcome, Dhanush.</h2>
        <p>
          You have successfully logged into your dashboard.
          <br />
          Keep learning, keep building, and make your next idea real.
        </p>
        <div className="welcome-meta" id="profile">
          <div className="welcome-avatar">DS</div>
          <span className="name-details">
            <b>Dhanush Surya</b>
            <small>23 years · MCA</small>
          </span>
          <span className="meta-divider" />
          <span className="aspiring">Aspiring software developer</span>
        </div>
      </div>
      <div className="welcome-graphic">
        <div className="graphic-ring ring-a" />
        <div className="graphic-ring ring-b" />
        <div className="graphic-center">
          D<span>✳</span>
        </div>
        <div className="graphic-pill pill-one">LEARN</div>
        <div className="graphic-pill pill-two">BUILD</div>
        <div className="graphic-pill pill-three">GROW</div>
        <span className="graphic-star star-one">✳</span>
        <span className="graphic-star star-two">✧</span>
      </div>
    </section>
  );
};

export default WelcomeSection;
