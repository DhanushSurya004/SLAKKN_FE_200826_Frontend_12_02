import Student from "../Student.jsx";

const Hero = () => {
  return (
    <section className="portfolio-hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" /> HELLO, WORLD
        </div>
        <h1>
          Hello, I’m
          <br />
          <span>Dhanush Surya.</span>
        </h1>
        <h2>Aspiring software developer</h2>
        <p className="hero-summary">
          I’m learning to build thoughtful digital experiences, one component at a time.
        </p>
        <div className="profile-tags">
          <span>MCA</span>
          <span>23 years old</span>
          <span>React learner</span>
        </div>
        <a className="contact-link" href="mailto:hello@example.com">
          Let’s connect <span>↗</span>
        </a>
      </div>
      <div className="hero-art" id="about">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <Student />
        <span className="float-label label-code">&lt; create /&gt;</span>
        <span className="float-label label-year">2026</span>
      </div>
    </section>
  );
};

export default Hero;
