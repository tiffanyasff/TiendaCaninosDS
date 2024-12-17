import React, { useState } from "react";
import { data } from "../data";
import AxiosInstance from "./Axios";

function Inicio() {
    const [products, setProducts] = useState(data);
    const [editMode, setEditMode] = useState(null);
    const [editedProduct, setEditedProduct] = useState(null);

    const handleEdit = (product) => {
        setEditMode(product.id);
        setEditedProduct({ ...product });
    };

    const handleCancel = () => {
        setEditMode(null);
        setEditedProduct(null);
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "img" && files?.[0]) {
            setEditedProduct({
                ...editedProduct,
                img: URL.createObjectURL(files[0]),
                imgFile: files[0],
            });
        } else {
            setEditedProduct({
                ...editedProduct,
                [name]: value,
            });
        }
    };

    const handleSaveChanges = async () => {
        try {
            const formData = new FormData();
            formData.append("id", editedProduct.id);
            formData.append("nombre", editedProduct.nameProduct);
            formData.append("precio", editedProduct.price);
            formData.append("cantidad", editedProduct.quantity);
            formData.append("tamano", editedProduct.size);
            formData.append("estado", editedProduct.estado || "En venta");
            if (editedProduct.imgFile) {
                formData.append("imagen", editedProduct.imgFile);
            }

            const response = await AxiosInstance.post(
                "http://localhost:8000/api/actualizar-perro/",
                formData
            );

            setProducts((prev) =>
                prev.map((product) =>
                    product.id === editedProduct.id ? { ...editedProduct } : product
                )
            );
            alert("Producto actualizado con éxito");
            handleCancel();
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            alert("Error al actualizar el producto");
        }
    };

    const handleDelete = (productId) => {
        setProducts((prev) => prev.filter((product) => product.id !== productId));
        alert("Producto eliminado exitosamente");
    };

    return (
        <div className="container">
            <h3 className="title">Perritos en Venta</h3>
            <div className="card-product">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <div className="image-wrapper">
                            {editMode === product.id ? (
                                <>
                                    {editedProduct.img && (
                                        <img
                                            src={editedProduct.img}
                                            alt={editedProduct.nameProduct}
                                            className="image preview"
                                        />
                                    )}
                                    <label htmlFor={`file-input-${product.id}`} className="file-label">
                                        Cambiar Imagen
                                    </label>
                                    <input
                                        id={`file-input-${product.id}`}
                                        type="file"
                                        name="img"
                                        accept="image/*"
                                        className="file-input"
                                        onChange={handleInputChange}
                                    />
                                </>
                            ) : (
                                <img
                                    src={product.img}
                                    alt={product.nameProduct}
                                    className="image"
                                />
                            )}
                        </div>

                        <div className="info edit-mode">
                            {editMode === product.id ? (
                                <>
                                    <select
                                        name="estado"
                                        value={editedProduct.estado || "En venta"}
                                        className="small-select"
                                        onChange={handleInputChange}
                                    >
                                        <option value="En venta">En venta</option>
                                        <option value="En proceso">En proceso</option>
                                        <option value="Vendido">Vendido</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="nameProduct"
                                        value={editedProduct.nameProduct}
                                        className="small-input"
                                        onChange={handleInputChange}
                                        placeholder="Nombre del producto"
                                    />
                                    <select
                                        name="size"
                                        value={editedProduct.size}
                                        className="small-select"
                                        onChange={handleInputChange}
                                    >
                                        <option value="Pequeño">Pequeño</option>
                                        <option value="Mediano">Mediano</option>
                                        <option value="Grande">Grande</option>
                                    </select>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={editedProduct.quantity}
                                        className="small-input"
                                        onChange={handleInputChange}
                                        placeholder="Cantidad"
                                    />
                                    <input
                                        type="number"
                                        name="price"
                                        value={editedProduct.price}
                                        className="small-input"
                                        onChange={handleInputChange}
                                        placeholder="Precio"
                                    />
                                </>
                            ) : (
                                <>
                                    <h4 className="order">{product.estado || "En venta"}</h4>
                                    <p>
                                        <strong className="name">{product.nameProduct}</strong>
                                    </p>
                                    <p className="size">Tamaño: {product.size}</p>
                                    <p className="quantity">{product.quantity} unidad(es)</p>
                                    <p className="price">${product.price} c/u</p>
                                </>
                            )}
                        </div>

                        <div className="buttons">
                            {editMode === product.id ? (
                                <>
                                    <button className="primary-button" onClick={handleSaveChanges}>
                                        Aceptar cambios
                                    </button>
                                    <button className="cancel-button" onClick={handleCancel}>
                                        Cancelar cambios
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="primary-button" onClick={() => handleEdit(product)}>
                                        Editar
                                    </button>
                                    <button
                                        className="cancel-button"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        Eliminar Canino
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
                <div className="total">
                    <p>
                        <strong>
                            Total de productos:{" "}
                            {products.reduce((acc, product) => acc + product.quantity, 0)}
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
