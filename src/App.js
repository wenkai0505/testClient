import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Add from './components/add'
import './css/style.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />

      </Routes>


    </div>
  )
}

export default App
