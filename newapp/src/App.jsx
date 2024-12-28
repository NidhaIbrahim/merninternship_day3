import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Tabulari from './components/Tabulari'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Api from './components/Api'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/table" element={<Tabulari />} />
        <Route path="/state" element={<StateBasics />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/api" element={<Api />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
