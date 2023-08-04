import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryPage from "./pages/CategoryPage"
import DetailPage from './pages/DetailPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import CreateProfilePage from './pages/CreateProfilePage'

import Home from './pages/HomePage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/detailPage/:id' element={<DetailPage/>}></Route>
          <Route path='/categoryPage/:category' element={<CategoryPage/>}></Route>
          <Route path='/profilePage/:id' element={<ProfilePage/>}></Route>
          <Route path='/loginPage/' element={<LoginPage/>}></Route>
          <Route path='/createProfile/' element={<CreateProfilePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
