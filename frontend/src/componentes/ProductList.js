import { useState, useEffect } from "react";
import { data } from "../data"; // Datos de ejemplo
import AxiosInstance from "./Axios";
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


  const getUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await AxiosInstance.get("http://localhost:8000/api/obtener_usuario_logueado", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };

  // Guardar el estado del carrito en localStorage
  const saveToLocalStorage = async (products, count) => {
    const user = await getUser();
    if (user) {
      const userId = user.id;
      localStorage.setItem(`cartProducts_${userId}`, JSON.stringify(products));
      localStorage.setItem(`cartCount_${userId}`, count);
    } else {
      console.error("No se pudo obtener el ID del usuario");
    }
  };

  const onAddProduct = async (product) => {
    // Encontrar el producto original en la lista de productos
    const originalProduct = products.find((p) => p.id === product.id);
  
    // Verificar la cantidad actual en el carrito
    const existingProduct = allProducts.find((item) => item.id === product.id);
    const currentQuantity = existingProduct ? existingProduct.quantity : 0;
  
    // Validar si se alcanza el máximo permitido
    if (currentQuantity >= originalProduct.quantity) {
      alert("Cantidad máxima alcanzada para este canino :3");
      return;
    }
  
    let updatedProducts;
  
    if (existingProduct) {
      // Incrementar la cantidad si ya está en el carrito
      updatedProducts = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Agregar el producto por primera vez
      updatedProducts = [...allProducts, { ...product, quantity: 1 }];
    }
  
    const newTotal = total + product.price;
    const newCount = countProducts + 1;
  
    // Actualizar los estados
    setAllProducts(updatedProducts);
    setCountProducts(newCount);
    setTotal(newTotal);
  
    // Guardar en localStorage
    await saveToLocalStorage(updatedProducts, newCount);
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
              <p className="quantity">Cantidad: {product.quantity}</p>
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