import "./Home.scss";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className="homecontainer">
        <div className="homecontainer__text">
          <h1 className="homecontainer__text-title">
            Traveller ile dünyayı keşfet
          </h1>
          <p className="homecontainer__text-subtitle">Dünyanın en güzel şehirlerini uygun turlar ile gez.</p>
          <button className="homecontainer__text-btn">Turları Keşfet</button>
        </div>
      </div>
    </div>
  )
}

export default Home;