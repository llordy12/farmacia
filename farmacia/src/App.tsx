import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import ListaCategorias from './categorias/listacategorias/ListaCategorias'
import FormCategorias from './categorias/formcategorias/FormCategorias'


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className=" bg-slate-800 min-h-[90vh]" >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategorias" element={<FormCategorias />} />
              <Route path="/editarcategorias/:id" element={<FormCategorias />} />
              <Route path="/deletarcategorias/:id" element={<ListaCategorias />} />
            </Routes>

          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App