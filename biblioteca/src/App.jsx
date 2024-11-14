import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Fourmulario from './components/Formulario';
import Biblioteca from './components/Biblioteca';
import Registro from './components/Registro';

function App() {
  return (
    <BrowserRouter>
    <Link to='/'>
    </Link>

    <Routes>
      <Route path='/' element={<Fourmulario />}></Route>
      <Route path='/registro' element={ <Registro /> }/>
      <Route path='/biblioteca' element={<Biblioteca />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
