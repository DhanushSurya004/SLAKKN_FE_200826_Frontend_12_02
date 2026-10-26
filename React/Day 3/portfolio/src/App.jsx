import Navbar from "./components/portfolio/Navbar.jsx";
import Hero from "./components/portfolio/Hero.jsx";
import Footer from "./components/portfolio/Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <main className="portfolio-page">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
};

export default App;
