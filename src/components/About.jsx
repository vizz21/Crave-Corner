import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Crave Corner</h2>
          <p>
            Welcome to <strong>Crave Corner</strong>, where passion meets perfection! We specialize in crafting custom cakes, brownies, cheesecakes, tea cakes, and cupcakes for every occasion.
          </p>
          <p>
            From birthdays to weddings, our mission is to turn your sweet moments into delicious memories using the finest ingredients and artistic designs.
          </p>
          <div className="contact-links">
            <a
              href="https://wa.me/qr/675VOPBKGTG7N1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button whatsapp"
            >
              📱 WhatsApp Us
            </a>
            <a
              href="https://www.instagram.com/crave._corner?igsh=MW0zMmdsdGthc28xcA=="
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button instagram"
            >
              📸 Follow on Instagram
            </a>
          </div>
        </div>
        <a
  href="https://www.instagram.com/crave._corner?igsh=MW0zMmdsdGthc28xcA=="
  target="_blank"
  rel="noopener noreferrer"
  className="about-emoji"
  title="Visit our Instagram"
>
  🍰
</a>




      </div>
    </section>
  );
}

export default About;
