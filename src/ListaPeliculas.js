import React, { useEffect, useState } from 'react'
import PeliculaIndividual from './PeliculaIndividual'
import axios from 'axios'
import {FaTheaterMasks} from 'react-icons/fa'

function ListaPeliculas() {
    const [datapeliculas, setDatapeliculas] = useState([])

    useEffect(() => {
        axios.get('api/usuario/obtenerpeliculas').then(res => {
            console.log(res.data)
            console.log(datapeliculas)
            setDatapeliculas(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const listaPeliculas = datapeliculas.map(pelicula=>{
        console.log("corro")
        return (
            <div>
                <PeliculaIndividual pelicula ={pelicula}/>
            </div>
        )
    })

    return (
        <div className='container movies '>
        <h1 className='listMovies'>
                Aquí encuentras un listado de peliculas  <FaTheaterMasks/>
            </h1>
        <div className='row'>
        <div class="col-sm-12 col-md-6">
        {listaPeliculas}
        </div>
        </div>
            
            
        </div>
    )
}

export default ListaPeliculas