import logo from './logo.svg';
import './App.css';
import ListaPeliculas from './ListaPeliculas';
import AgregarPelicula from './AgregarPelicula';
import EditarPelicula from './EditarPelicula';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <h3>CRUD videoclub</h3>
            </div>
            <div className='col-8'>
              <a href="agregarpelicula">Agregar Pelicula</a>
              <a href="editarpelicula">Editar Pelicula</a>
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
    </div>
  );
}

export default App;
