import { useState } from "react";
import "../estilos/carrito.css";

export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const onBuyCart = () => {
    alert("Compra realizada con éxito!");
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const onAdd = (product) => {
    const updatedProducts = allProducts.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  
    setAllProducts(updatedProducts);
    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
  };
  
  const onSubtract = (product) => {
    if (product.quantity > 1) {
      const updatedProducts = allProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
  
      setAllProducts(updatedProducts);
      setTotal(total - product.price);
      setCountProducts(countProducts - 1);
    } else {
      // Si la cantidad es 1, eliminar el producto
      onDeleteProduct(product);
    }
  };
  
  return (
    <header>
      <h1>Nuestros caninos</h1>

      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>
                      <p className="titulo-producto-carrito">
                        {product.nameProduct}
                      </p>
                      <span className="precio-producto-carrito">
                        ${product.price}
                      </span>
                    </div>

                    <svg //Suma
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="icon-add"
                      onClick={() => onAdd(product)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                    
                    <svg //Resta
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="icon-subtract"
                      onClick={() => onSubtract(product)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12h12"
                      />
                    </svg>


                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>

              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
              <button className="btn-buy-all" onClick={onBuyCart}>
                Comprar
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
