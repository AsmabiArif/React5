import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import State from './components/State'
import Apiget from './components/Apiget'
import Product from './components/Product'
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
       {/* <Counter/> */}
       {/* <State/> */}
       {/* <Apiget/> */}
       {/* <Product/> */}
       <NavBar/>
       <Routes>
       <Route path='/' element={<Product/>}/>
       <Route path='/a' element={<Apiget/>}/>
       <Route path='/c' element={<Counter/>}/>
       <Route path='/s' element={<State/>}/>
       </Routes>
    </>
  )
}

export default App
