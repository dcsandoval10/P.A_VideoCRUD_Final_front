import React, {useState} from 'react'
import axios from 'axios'
import uniquid from 'uniquid'

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
            alert(res.data)
        })
        .then(err => {console.log(err)})

    }

    return (
        <div>
            <h1>
                Agregar pelicula
            </h1>

            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <label htmlFor="titleMovie" className='form-label'>Titulo de la pelicula</label>
                        <input type="text" className='form-control' value={title} onChange={(e)=> {setTitle(e.target.value)}} />
                    </div>
                    <div className='col-6'>
                        <label htmlFor="year" className='form-label'>Año de la pelicula</label>
                        <input type="text" className='form-control' value={year} onChange={(e)=> {setYear(e.target.value)}}/>
                    </div>
                    <div className='col-6'>
                        <label htmlFor="duration" className='form-label'>Duracion</label>
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
                    <div> <button onClick={addPelicula} className='btn btn-success'>Guardar Pelicula</button></div>
                </div>
            </div>
        </div>
    )
}

export default AgregarPelicula