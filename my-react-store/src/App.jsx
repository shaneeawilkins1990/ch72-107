import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer' 
import Product from './components/Product' 
import Catalog from './pages/Catalog'




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
