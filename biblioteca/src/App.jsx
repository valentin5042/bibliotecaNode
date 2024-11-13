import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Fourmulario from './components/Formulario.jsx'
import Biblioteca from './components/Biblioteca.jsx'

function App() {
  return (
    <BrowserRouter>
    <Link to='/'>
    </Link>

    <Routes>
      <Route path='/' element={<Fourmulario/>}></Route>
      <Route path='/biblioteca' element={<Biblioteca/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
