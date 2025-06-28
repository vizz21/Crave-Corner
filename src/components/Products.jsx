import './products.css';

const productData = [
  {
    title: 'Custom Cupcakes',
    image: '/cupcake.jpg',
    description: 'Decorated cupcakes for every occasion. Perfect for parties and gifts!',
  },
  {
    title: 'Signature Cheesecakes',
    image: '/cheesecake.jpg',
    description: 'Rich, creamy, and melt-in-the-mouth delicious. Available in many flavors.',
  },
  {
    title: 'Gourmet Brownies',
    image: '/brownie.jpg',
    description: 'Fudgy, chocolatey brownies in classic, walnut, and caramel flavors.',
  },
  {
    title: 'Artisan Tea Cakes',
    image: '/teacake.jpg',
    description: 'Light, fluffy cakes paired beautifully with your favorite tea or coffee.',
  },
];

function Products() {
  return (
    <section id="products" className="products-section">
      <h2>Our Specialties</h2>
      <div className="products-grid">
        {productData.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.title} className="product-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
