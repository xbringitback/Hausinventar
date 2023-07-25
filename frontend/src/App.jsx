import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryPage from "./pages/CategoryPage"

import Home from './pages/HomePage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/detailPage/:id' element={<Home/>}></Route>
          <Route path='/categoryPage/:category' element={<CategoryPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
