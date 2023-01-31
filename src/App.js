import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Popular from './components/Popular/Popular';
import TourNavbar from './components/TourNavbar/TourNavbar';
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
       <TourNavbar/>
      <Popular/>
      <Footer/>
    </div>
  );
}

export default App;
