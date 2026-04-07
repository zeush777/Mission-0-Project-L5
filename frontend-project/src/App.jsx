import "./App.css";
import SearchFunctionality from './components/searchfunctionality/SearchFuncationality.jsx';

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">WAnime</div>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About Me</a>
          <a href="#">Contact Us</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero" >
        <div className="hero-text">
          <h1>Geo<h1></h1>Ani.com<br />A Site To Find Your Favourite Anime!</h1>

          {/* This part shows the search functionality whenever you try to search for an anime of your liking. */}
          <div>
            <SearchFunctionality />
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder"></div>
        </div>
      </div>

      {/* CARDS */}
      <div className="cards">
        <div className="card">
          <div className="card-img"></div>
          <h3>Watch Together?</h3>
          <p>With the kids, friends or your partner!</p>
        </div>

        <div className="card">
          <div className="card-img"></div>
          <h3>Watch Alone?</h3>
          <p>Be a big loner and feel happy about it!</p>
        </div>

        <div className="card">
          <div className="card-img"></div>
          <h3>Not watch at all?</h3>
          <p>That is perfectly fine as well!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
