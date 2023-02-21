import React, {useState} from 'react'
import axios from 'axios'
import uniquid from 'uniquid'
import {BsFillCameraReelsFill} from 'react-icons/bs'
import Swal from 'sweetalert2'


function AgregarPelicula() {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [duration, setDuration] = useState('')
    const [lang, setLang] = useState('')
    const [release, setRelease] = useState('')
    const [country, setCountry] = useState('')

    function addPelicula() {
        var pelicula = {
            movieID: uniquid(),
            title: title,
            year: year,
            duration: duration,
            lang: lang,
            release: release,
            country: country
        }

        console.log(pelicula)

        axios.post('api/usuario/agregarpelicula', pelicula)
        .then(res => {
            Swal.fire(res.data)
        })
        .then(err => {console.log(err)})

    }

    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-4 text'>
                ¡Agrega una pelicula! 
            </h1> 

            <div className='container mt-4 card'>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="titleMovie" className='form-label'>Titulo </label>
                        <input type="text" className='form-control' value={title} onChange={(e)=> {setTitle(e.target.value)}} />
                    </div>
                    <div className='col-6'>
                        <label htmlFor="year" className='form-label'>Año </label>
                        <input type="text" className='form-control' value={year} onChange={(e)=> {setYear(e.target.value)}}/>
                    </div>
                    <div className='col-6'>
                        <label htmlFor="duration" className='form-label'>Duración</label>
                        <input type="text" className='form-control' value={duration} onChange={(e)=> {setDuration(e.target.value)}} />
                    </div>
                    <div className='col-6'>
                        <label htmlFor="lang" className='form-label'>Idioma</label>
                        <input type="text" className='form-control' value={lang} onChange={(e)=> {setLang(e.target.value)}}/>
                    </div>
                    <div className='col-6'>
                        <label htmlFor="release" className='form-label'>Fecha de estreno</label>
                        <input type="text" className='form-control' value={release} onChange={(e)=> {setRelease(e.target.value)}}/>
                    </div>
                    <div className='col-6'>
                        <label htmlFor="country" className='form-label'>Pais</label>
                        <input type="text" className='form-control' value={country} onChange={(e)=> {setCountry(e.target.value)}}/>
                    </div>
                    <div className='mb-4'> 
                    <button className="button" onClick={addPelicula}>Guardar pelicula <BsFillCameraReelsFill /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgregarPelicula