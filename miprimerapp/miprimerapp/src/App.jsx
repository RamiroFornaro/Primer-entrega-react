import React, { useState } from 'react';
import './App.css';

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar">
      <div className="brand">My App</div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div className="cart-widget">🛒 Cart: {cartCount}</div>
      </div>
    </div>
  );
};

const Greeting = () => {
  return <div className="greeting">Hello! Welcome to our page.</div>;
};

const Menu = ({ addToCart }) => {
  const shoes = [
    {
      name: "Nike Air Max 1 ’86 OG",
      description: "Diseño retro con la clásica burbuja grande visible en la entresuela. Colores originales blanco y rojo.",
      price: "$101",
      stock: 5,
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      name: "Nike AlphaFly 3 Prototype",
      description: "Zapatillas de alto rendimiento diseñadas para correr largas distancias con espuma ZoomX y fibra de carbono.",
      price: "$310",
      stock: 5,
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      name: "Nike Dunk Low City of Love",
      description: "Inspiradas en París, con colores crema y burdeos, perfectas para uso casual.",
      price: "$140",
      stock: 5,
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      name: "Nike Air Max Plus Culers del Món",
      description: "Colaboración especial con el FC Barcelona, combinando detalles vibrantes en azul y granate.",
      price: "$209",
      stock: 5,
      image: "https://picsum.photos/id/237/200/300",
    },
  ];

  const [stocks, setStocks] = useState(shoes.map(shoe => shoe.stock));

  const handleAddToCart = (index) => {
    if (stocks[index] > 0) {
      setStocks(stocks.map((stock, i) => (i === index ? stock - 1 : stock)));
      addToCart();
    }
  };

  return (
    <ul className="menu">
      {shoes.map((shoe, index) => (
        <li key={index}>
          <img src={shoe.image} alt={shoe.name} className="shoe-image" />
          <h3>{shoe.name}</h3>
          <p>{shoe.description}</p>
          <p><strong>Price:</strong> {shoe.price}</p>
          <p><strong>Stock:</strong> {stocks[index]}</p>
          <button 
            onClick={() => handleAddToCart(index)} 
            disabled={stocks[index] === 0}
          >
            {stocks[index] === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <div className="container">
        <Greeting />
        <Menu addToCart={addToCart} />
      </div>
    </div>
  );
};

export default App;