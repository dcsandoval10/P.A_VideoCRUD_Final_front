import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {RiEditCircleFill} from 'react-icons/ri'
import {AiFillDelete} from 'react-icons/ai'


function PeliculaIndividual({ pelicula }) {
  const navigate = useNavigate();

  function deleteMovie(movieID) {
    axios
      .post("/api/usuario/deletemovie", { movieID: movieID })
      .then((res) => {
        console.log(res.data);
        alert("el dato eliminado es:" + JSON.stringify(res.data));
        navigate(0);
      })
      .catch((err) => {
        console.log("error en borrado:" + err);
      });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <ul className="list-group">
            {/* <li className='list-group-item'>{pelicula.movieID}</li> */}
            <li className="list-group-item">Titulo: {pelicula.titleMovie}</li>
            <li className="list-group-item">Año: {pelicula.year}</li>
            <li className="list-group-item"> Duración: {pelicula.duration}</li>
            <li className="list-group-item"> Idioma: {pelicula.lang}</li>
            <li className="list-group-item"> Fecha de :{pelicula.release}</li>
            <li className="list-group-item"> País: {pelicula.country}</li>
            <div className="container-button">
            <Link to={`/editarpelicula/${pelicula.movieID}`}>
              <li className="btn btn-success">Editar</li>
            </Link>
            {/* <button className='btn btn-success'>Editar</button> */}
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteMovie(pelicula.movieID);
              }}
            >Eliminar
            </button>
            </div>
          </ul>

          <hr className="mt-3" />
        </div>
      </div>
    </div>
  );
}

export default PeliculaIndividual;
