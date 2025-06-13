import React from 'react'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Feature from './components/Web_Pages/Feature'
import { Route, Routes} from "react-router-dom";
import Contact from './components/Web_Pages/Contact'
import Sign_Up from './components/Web_Pages/Sign_Up'
import Sign_In from './components/Web_Pages/Sign_In'
import Join_Us from './components/Web_Pages/Join_Us'
import Try_Now from './components/Web_Pages/Try_Now'
import Learn_More from './components/Web_Pages/Learn_More'

function App() {

  return (
    <>
      <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/sign_up' element={<Sign_Up />} />
            <Route path='/sign_in' element={<Sign_In />} />
            <Route path='/join_us' element={<Join_Us />} />
            <Route path='/try_now' element={<Try_Now />} />
            <Route path='/learn_more' element={<Learn_More />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
