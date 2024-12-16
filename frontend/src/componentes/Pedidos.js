import React, { useEffect, useState } from "react";
import "../estilos/Pedidos.css";

function Pedidos() {
  const [savedProducts, setSavedProducts] = useState([]);
  const [savedCount, setSavedCount] = useState(0);

  const deliveryStatus = "Enviando"; //datos prueba
  const deliveryDate = "12 de diciembre"; //datos prueba

  // Cargar datos del localStorage al montar el componente
  useEffect(() => {
    const fetchOrderData = async () => {
      const user = localStorage.getItem('userIdBuy')
      if (user ) {
        // Recuperar datos específicos del usuario
        const products = JSON.parse(localStorage.getItem(`cartProductsBuy_${user}`)) || [];
        const count = parseInt(localStorage.getItem(`cartCountBuy_${user}`)) || 0;

        // Actualizar el estado
        setSavedProducts(products);
        setSavedCount(count);
      } else {
        console.warn("No se pudo obtener el ID del usuario");
      }
    };

    fetchOrderData();
  }, []);

  return (
    <div className="container">
      <h3 className="date">7 de diciembre</h3>
      <div className="card-product">
        {savedProducts.map((product, index) => (
          <div key={index} className="product">
            <img src={product.img} alt={product.nameProduct} className="image" />
            <div className="info">
              <h4 className="status">{deliveryStatus}</h4>
              <p><strong>Llegará el {deliveryDate}</strong></p>
              <p className="name"><strong>{product.nameProduct}</strong></p>
              <p className="quantity">{product.quantity} unidad(es) - ${product.price}</p>
            </div>
            <div className="buttons">
              <button className="primary-button">Ver compra</button>
              <button className="cancel-button">Cancelar compra</button>
            </div>
          </div>
        ))}
        <div className="total">
          <p><strong>Total de productos: {savedCount}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
