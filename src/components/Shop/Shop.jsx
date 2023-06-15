import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the added product
    for (const id in storedCart) {
      // step to get product from product state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step 3 : added a Quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //  step 4: add the addedProducts to the save cart
        savedCart.push(addedProduct);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the SaveCart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // cart.push(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  const handleClearCart = () =>{
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}
        handleClearCart={handleClearCart}
        >
          <Link className="proceed-link" to='/orders'>
          <button className="btn-proceed">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
