import './App.css';
import ListaPeliculas from './ListaPeliculas';
import AgregarPelicula from './AgregarPelicula';
import EditarPelicula from './EditarPelicula';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {RiVideoAddFill} from 'react-icons/ri'
import {GiFilmSpool} from 'react-icons/gi'

function App() {
  return (
    <>
  <header className='header'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <a href='/'><h3 className='logo text-center'>VIDEOCLUB<GiFilmSpool /></h3></a>
        </div>
        <div className='col-md-6 sm-3 navbar text-center'>
          <a href="agregarpelicula">Agregar Pelicula <RiVideoAddFill /></a>
          {/* <a href="editarpelicula">Editar Pelicula <RiEditCircleFill /></a> */}
        </div>
      </div>
    </div>
  </header> 

      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListaPeliculas />} exact></Route>
            <Route path='/agregarpelicula' element={<AgregarPelicula />} exact></Route>
            <Route path='/editarpelicula/:movieID' element={<EditarPelicula />} exact></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
