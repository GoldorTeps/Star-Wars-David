import React, { useContext, useEffect } from "react";
import { Context } from '../store/appContext.js';
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getDataPeople();
    actions.getDataPlanets();
    actions.getDataVehicles();
  }, []);

  const handleDelete = (index) => {
    actions.deleteFavorite(index);
  };

  const renderFavorites = () => {
    return (
      <ul className="dropdown-menu">
        {store.favorites.map((favorite, index) => (
          <li key={index}>
            <p>
              {favorite}
              <button
                className="btn btn-link text-danger"
                onClick={() => handleDelete(index)}
              >
                <i className="bi bi-trash text-danger" title="Eliminar favorito"></i>
              </button>
            </p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle navbar-text" // Agregar la clase "navbar-text" aquí
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites {store.favorites.length}
              </a>
              {renderFavorites()}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
