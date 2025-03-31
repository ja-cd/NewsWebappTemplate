import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to TechHub</h1>
        <p className="subtitle">Your source for the latest in technology news and research</p>
      </section>

      <section className="features-section">
        <a href={'/news'} className="feature-card">
          <h2>Latest News</h2>
          <p>Stay updated with the most recent developments in technology and programming.</p>
        </a>
        <a href={'/research'} className="feature-card">
          <h2>Research Papers</h2>
          <p>Explore cutting-edge academic research in computer science and related fields.</p>
        </a>
        <a href={'/gallery'} className="feature-card">
          <h2>Image Gallery</h2>
          <p>Browse our collection of visual content related to technology and computing.</p>
        </a>
      </section>
    </div>
  );
}

export default Home;
