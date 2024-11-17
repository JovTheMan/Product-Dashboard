import React from 'react';

/**
 * Displays the details of an individual product.
 * @param {Object} product - The product object containing name, price, and description.
 */
function ProductItem({ product }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </li>
  );
}

export default ProductItem;
