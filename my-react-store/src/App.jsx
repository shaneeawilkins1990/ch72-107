import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer' 
import Catalog from './components/Catalog'
import Product from './components/Product' 


function App() {
  

  return (
    <div>
      <h1>Hello from react</h1>
      <Navbar/>
      <Product/>   
      <Catalog/>
      <Footer/>
    </div>
  )
}




export default App
