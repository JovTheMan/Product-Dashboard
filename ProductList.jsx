import React from 'react';
import ProductItem from './ProductItem.jsx';

/**
 * Displays a list of products.
 * @param {Array} products - The list of products to display.
 */
function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {/* Map over the products array and render a ProductItem for each product */}
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
