const ProductCard = ({ name, price, category, available }) => (
  <article className="product-card">
    <h3>{name}</h3>
    <p>Price: {price}</p>
    <p>Category: {category}</p>
    <p>Availability: {available ? 'In stock' : 'Out of stock'}</p>
  </article>
)

export default ProductCard
