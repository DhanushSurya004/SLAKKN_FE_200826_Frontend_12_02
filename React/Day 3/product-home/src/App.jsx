import Header from "./components/Header.jsx";
import ProductHero from "./components/ProductHero.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx";
import "./App.css";

const App = () => {
  return (
    <main className="store">
      <div className="store-top">
        <span>TECHSTORE / EVERYDAY INNOVATION</span>
        <span>FEATURED</span>
      </div>
      <Header />
      <ProductHero />
      <ProductInfo />
      <Student />
      <Footer />
    </main>
  );
};

export default App;
