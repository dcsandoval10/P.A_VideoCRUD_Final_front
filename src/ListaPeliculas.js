import React, { useEffect, useState } from 'react'
import PeliculaIndividual from './PeliculaIndividual'
import axios from 'axios'

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
        <div>
            <h1>
                Lista de peliculas!
            </h1>
            {listaPeliculas}

            <p>Hol</p>
            
        </div>
    )
}

export default ListaPeliculas