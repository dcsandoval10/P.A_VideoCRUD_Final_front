import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function PeliculaIndividual ({pelicula}){
    const navigate = useNavigate()

    function deleteMovie(movieID){
        axios.post('/api/usuario/deletemovie', {movieID: movieID}).then(res => {
            console.log(res.data)
            alert('el dato eliminado es:'+ JSON.stringify(res.data))
            navigate(0)
        })
        .catch(err=> {
            console.log('error en borrado:' +err)
        })
    }

    return (
        <div>
            <h1>
                Lista de peliculas
            </h1>
            <div className='container'>
                <div className='row'>
                    <ul className='list-group'>
                        {/* <li className='list-group-item'>{pelicula.movieID}</li> */}
                        <li className='list-group-item'>{pelicula.titleMovie}</li>
                        <li className='list-group-item'>{pelicula.year}</li>
                        <li className='list-group-item'>{pelicula.duration}</li>
                        <li className='list-group-item'>{pelicula.lang}</li>
                        <li className='list-group-item'>{pelicula.release}</li>
                        <li className='list-group-item'>{pelicula.country}</li>

                    </ul>

                    <Link to={`/editarpelicula/${pelicula.movieID}`}><li className='btn btn-success'>Editar</li></Link>
                    {/* <button className='btn btn-success'>Editar</button> */}
                    <button className='btn btn-danger' onClick={()=>{deleteMovie(pelicula.movieID)}}>Borrar</button>

                    <hr className='mt-4'/>

                </div>

            </div>
        </div>
    )
}

export default PeliculaIndividual