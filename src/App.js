import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import TourNavbar from "./components/TourNavbar/TourNavbar";
import FilterTour from "./components/FilterTour/FilterTour";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home />
       <TourNavbar/>
       <FilterTour/>
       <AboutUs />
       <Contact />
      <Footer/>
    </div>
  );
}

export default App;
