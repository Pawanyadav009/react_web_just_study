import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Home'
import Products from './Components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Donate from './Components/Donate'
import About from './Components/About'
import Page404 from './Components/Page404'
import ProductDetails from './Components/ProductDetails'
 import ParentInput from './Components/ParentInput'
 import SignIn from './Components/SignIn'
import ProductInfo from './Components/ProductInfo'
import Usecontex from './Components/Usecontex'
import Profile from './Components/Profile'
import Editprofile from './Components/Editprofile'
import LoginInfo from './Components/LoginInfo'
// import ParentInput from './Components/ParentInput'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <SignIn/> */}
    {/* <ParentInput/>
    <ParentInput/> */}

    {/* <ProductInfo/> */}

    
    <LoginInfo>
    <BrowserRouter>
    <Routes>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/Editprofile' element={<Editprofile/>}/>

      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Donate' element={<Donate/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Profile' element={<Profile/>}/>

      <Route path='/Products/:ProductId' element={<ProductInfo/>}/>

      
      <Route path='/*' element={<Page404/>}/>
    </Routes>
    </BrowserRouter>
    </LoginInfo>
    </>
  )
}

export default App
