import React, {useState, useEffect} from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SkinForm from './pages/SkinForm'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer'
import Login from './pages/Login'
import UserForm from './pages/UserForm'
import ContentForm from './pages/ContentForm'
import Recommendations from './pages/Recommendations'
import Signup from './pages/Signup'
import Cleanser from './pages/Clean'
import Mask from './pages/Facemask'
import Sunscreen from './pages/Sunscreen'
import Toner from './pages/Toner'
import Moisturizer from './pages/Most'
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element ={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/skin' element={<SkinForm />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/login2' element={<Signup />}/>
          <Route path='/user' element={<UserForm/>}/>
          <Route path='/content' element={<ContentForm/>}/>
          <Route path='/recommend' element={<Recommendations/>}/>
          <Route path='/clean' element={<Cleanser/>}/>
          <Route path='/mask' element={<Mask/>}/>
          <Route path='/sun' element={<Sunscreen/>}/>
          <Route path='/ton' element={<Toner/>}/>
          <Route path='/most' element={<Moisturizer/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
