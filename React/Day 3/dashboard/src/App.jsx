import Sidebar from "./components/Sidebar.jsx";
import DashboardHeader from "./components/DashboardHeader.jsx";
import WelcomeSection from "./components/WelcomeSection.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx";
import "./App.css";

const App = () => {
  return (
    <main className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <DashboardHeader />
        <WelcomeSection />
        <Student />
        <Footer />
      </div>
    </main>
  );
};

export default App;
