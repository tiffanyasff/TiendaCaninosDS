import { useState, useEffect } from "react";
import { data } from "../data"; // Datos de ejemplo
import "../estilos/carrito.css";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [products, setProducts] = useState(data); // Inicialmente cargamos los datos de ejemplo
  const [selectedSize, setSelectedSize] = useState("Todos");

  // Comentado: Función para obtener los datos desde Django
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8000/api/products/");
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
    setAllProducts([...allProducts, { ...product, quantity: 1 }]);
  };

  // Filtrar productos por tamaño seleccionado
  const filteredProducts =
    selectedSize === "Todos"
      ? products
      : products.filter((product) => product.size === selectedSize);

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => setSelectedSize("Todos")}>Todos</button>
        <button onClick={() => setSelectedSize("Pequeño")}>Pequeño</button>
        <button onClick={() => setSelectedSize("Mediano")}>Mediano</button>
        <button onClick={() => setSelectedSize("Grande")}>Grande</button>
      </div>

      <div className="container-items">
        {filteredProducts.map((product) => (
          <div className="item" key={product.id}>
            <figure>
              <img src={product.img} alt={product.nameProduct} />
            </figure>
            <div className="info-product">
              <h2>{product.nameProduct}</h2>
              <p className="price">${product.price}</p>
              <p className="size">Tamaño: {product.size}</p>
              <button onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
