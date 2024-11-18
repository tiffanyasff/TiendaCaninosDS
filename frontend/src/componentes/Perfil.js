import React, { useEffect, useState } from "react";
import AxiosInstance from "./Axios";
import "../estilos/Perfil.css";

const Perfil = () => {
  const [editable, setEditable] = useState(false);
  const [user, setUser] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchUserData = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    AxiosInstance.get("http://localhost:8000/api/obtener_usuario_logueado", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response.data); // Aquí deberías ver los datos del usuario
        setUser(response.data); // Actualiza el estado con los datos del usuario
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del usuario:", error);
      });
  };

  const saveUserData = () => {
    AxiosInstance.put("http://localhost:8000/api/actualizar_usuario/1", user) // Cambiar "1" por el ID del usuario deseado
      .then(() => {
        alert("Cambios guardados correctamente.");
        setEditable(false);
      })
      .catch((err) => {
        console.error("Error al guardar los cambios:", err);
        alert("Error al guardar los cambios.");
      });
  };

  // Función para eliminar el usuario desde Django
  const deleteUser = () => {
    if (window.confirm("¿Estás seguro de eliminar tu cuenta?")) {
      AxiosInstance.delete(
        `http://localhost:8000/api/borrar-usuario/${user.id}/`
      ) // Comillas invertidas
        .then(() => {
          alert("Cuenta eliminada.");
          // Redirigir al usuario después de eliminar la cuenta
          window.location.href = "/login"; // Cambia la ruta según tu lógica
        })
        .catch((err) => {
          console.error("Error al eliminar la cuenta:", err);
          alert("Error al eliminar la cuenta.");
        });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="profile-page">
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="profile-container">
          <h2>Mi Perfil</h2>
          <div className="profile-card">
            <div className="profile-info">
              <p>
                <strong>Nombre:</strong>{" "}
                {editable ? (
                  <input
                    type="text"
                    name="nombre"
                    value={user.nombre || ""} // Si no existe el valor de 'nombre', se usa un string vacío
                    onChange={handleChange}
                  />
                ) : (
                  <span>{user.nombre}</span>
                )}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {editable ? (
                  <input
                    type="email"
                    name="correo"
                    value={user.correo}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{user.correo}</span>
                )}
              </p>
              <p>
                <strong>Teléfono:</strong>{" "}
                {editable ? (
                  <input
                    type="tel"
                    name="telefono"
                    value={user.telefono}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{user.telefono}</span>
                )}
              </p>
              <p>
                <strong>Dirección:</strong>{" "}
                {editable ? (
                  <input
                    type="text"
                    name="direccion"
                    value={user.direccion}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{user.direccion}</span>
                )}
              </p>
            </div>
            <div className="profile-actions">
              {!editable && (
                <button
                  onClick={() => setEditable(true)}
                  className="edit-button"
                >
                  Editar
                </button>
              )}
              {editable && (
                <button onClick={saveUserData} className="save-button">
                  Guardar Cambios
                </button>
              )}
              <button onClick={deleteUser} className="delete-button danger">
                Eliminar Cuenta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perfil;

// import React, { useState } from "react";
// import "../estilos/Perfil.css";

// const Perfil = () => {
//   const [editable, setEditable] = useState(false);
//   const [user, setUser] = useState({
//     name: "Juan Pérez",
//     email: "juan.perez@example.com",
//     phone: "+123456789",
//   });

//   const handleEdit = () => setEditable(true);

//   const handleSave = () => {
//     setEditable(false);
//     alert("Cambios guardados correctamente.");
//   };

//   const handleDelete = () => {
//     if (window.confirm("¿Estás seguro de eliminar tu cuenta?")) {
//       alert("Cuenta eliminada.");
//       // Aquí puedes añadir lógica para eliminar el perfil.
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="profile-page">
//       {/* Contenedor del perfil */}
//       <div className="profile-container">
//         <h2>Mi Perfil</h2>
//         <div className="profile-card">
//           <div className="profile-info">
//             <p>
//               <strong>Nombre:</strong>{" "}
//               {editable ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={user.name}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <span>{user.name}</span>
//               )}
//             </p>
//             <p>
//               <strong>Email:</strong>{" "}
//               {editable ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={user.email}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <span>{user.email}</span>
//               )}
//             </p>
//             <p>
//               <strong>Teléfono:</strong>{" "}
//               {editable ? (
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={user.phone}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <span>{user.phone}</span>
//               )}
//             </p>
//           </div>
//           <div className="profile-actions">
//             {!editable && (
//               <button onClick={handleEdit} className="edit-button">
//                 Editar
//               </button>
//             )}
//             {editable && (
//               <button onClick={handleSave} className="save-button">
//                 Guardar Cambios
//               </button>
//             )}
//             <button onClick={handleDelete} className="delete-button danger">
//               Eliminar Cuenta
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Perfil;
