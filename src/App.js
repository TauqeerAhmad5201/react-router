import './App.css';
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
