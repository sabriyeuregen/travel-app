import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Popular from './components/Popular/Popular';
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Popular/>
      <Footer/>
    </div>
  );
}

export default App;
