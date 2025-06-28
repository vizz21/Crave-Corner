export default function Menu() {
  const items = ['Brownies', 'Cheesecakes', 'Tea Cakes', 'Cupcakes'];

  return (
    <section style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Our Menu</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {items.map(item => (
          <div key={item} style={{
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '10px',
            width: '150px',
            background: '#fff0f5'
          }}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
