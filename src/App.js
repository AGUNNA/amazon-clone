import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';



function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={
          <>
          <Header/> 
          <Checkout/>
          </>
        }/>

          <Route path="/login" element={
          <>
          <Login/>
          </>
        } />

          <Route path="/" element={
          <>
          <Header/>
          <Home />
          </>
        }/>
        </Routes>
        
      </div>
    </Router>  
  )
}

export default App;