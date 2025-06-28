import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* 🎂 Floating Emoji */}
      <div className="emoji-top">🎂</div>

      {/* 📦 Main Content */}
      <div className="hero-content">
        <img src="\public\Crave Corner.jpeg" alt="Crave Corner" className="hero-logo" />
        <h1>Crave Corner</h1>
        <p>Custom Cakes, Brownies, Cheesecakes & More</p>
        <a href="#products" className="cta-button">Explore Our Treats</a>
      </div>
    </section>
  );
}

export default Hero;



