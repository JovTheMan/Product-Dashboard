import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import AddProductForm from './AddProductForm.jsx';
import './App.css';

/**
 * The main component of the application.
 * Manages the state for the list of products and renders the dashboard.
 */
function App() {
  // Initial state for the product list
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 150,
      description: 'High-quality noise-canceling headphones with Bluetooth support.',
    },
    {
      id: 2,
      name: 'Gaming Mouse',
      price: 75,
      description: 'Ergonomic gaming mouse with customizable buttons and RGB lighting.',
    },
  ]);

  /**
   * Adds a new product to the list of products.
   * @param {Object} newProduct - The product object to add.
   */
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Product Dashboard</h1>
      </header>
      <main>
        {/* Displays the list of products */}
        <ProductList products={products} />
        {/* Form to add a new product */}
        <AddProductForm addProduct={addProduct} />
      </main>
    </div>
  );
}

export default App;

