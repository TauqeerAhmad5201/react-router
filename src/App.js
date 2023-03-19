import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar'
import Signin from './components/Signin';
import ProductList from './components/ProductList'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Signin></Signin>
    <ProductList></ProductList>
    </>
  );
}

export default App;
