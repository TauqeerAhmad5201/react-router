import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Signin from './components/Signin';
import ProductList from './components/ProductList'
import Projects from './components/Projects';
import Home from './components/Home'

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
    <Route path="/" element= {<Home/>} />  
    <Route path="/projects" element= {<Projects/>} />
    <Route path="/signin" element= {<Signin/>} />
    <Route path="/shop" element= {<ProductList/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
