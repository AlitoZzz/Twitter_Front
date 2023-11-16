import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Home, Login, Registro, UserProfile} from "./Pages"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registro' element = {<Registro/>}/>
      <Route path='/:username' element= {<UserProfile/>}/>
    </Routes>
  )
}

export default App
