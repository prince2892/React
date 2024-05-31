// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Prince Patel</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="content">
        <div className="blog-post">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/640px-The_Earth_seen_from_Apollo_17.jpg" alt="Earth" className="blog-image" />
          <div className="blog-text">
            <h2>Exploring Our Home: The Earth</h2>
            <p className="blog-meta">By John Doe | Jan 1, 2024</p>
            <p>Earth, our beautiful blue planet, is the only known celestial body to harbor life. It is home to a diverse range of ecosystems, from vast oceans to lush forests and barren deserts.</p>
            <p>From space, Earth appears as a pale blue dot, a tiny oasis in the vastness of the cosmos. It is a reminder of the fragility and preciousness of life in the universe.</p>
            <p>Through satellite imagery and space exploration, scientists continue to study Earth's climate, geology, and biodiversity, seeking to understand the interconnected processes that sustain life on our planet.</p>
          </div>
        </div>
        <div className="blog-post">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/A_view_of_the_M87_supermassive_black_hole_in_polarised_light.tif/lossy-page1-640px-A_view_of_the_M87_supermassive_black_hole_in_polarised_light.tif.jpg" alt="Black Hole" className="blog-image" />
          <div className="blog-text">
            <h2>Into the Abyss: Exploring Black Holes</h2>
            <p className="blog-meta">By Jane Smith | Feb 15, 2024</p>
            <p>Black holes are some of the most mysterious objects in the universe. They are regions of spacetime where gravity is so strong that nothing, not even light, can escape.</p>
            <p>Despite their name, black holes are anything but empty. They can be millions or even billions of times more massive than our Sun, and their gravitational pull can warp spacetime itself.</p>
            <p>Studying black holes is challenging due to their extreme nature, but astronomers use techniques like gravitational lensing and observing the motion of nearby stars to unlock their secrets.</p>
          </div>
        </div>
        <div className="blog-post">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons.jpg/640px-Jupiter_New_Horizons.jpg" alt="Europa" className="blog-image" />
          <div className="blog-text">
            <h2>Exploring the Moons of Jupiter: Europa</h2>
            <p className="blog-meta">By Alex Brown | Mar 10, 2024</p>
            <p>Europa, one of Jupiter's largest moons, is a fascinating world with a global ocean beneath its icy surface. This subsurface ocean makes Europa one of the most promising places to search for extraterrestrial life.</p>
            <p>Scientists believe that Europa's ocean may contain more than twice the amount of water found on Earth, providing a potential habitat for microbial life.</p>
            <p>Future missions, such as NASA's Europa Clipper, aim to study Europa up close, searching for signs of habitability and potential landing sites for future exploration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
