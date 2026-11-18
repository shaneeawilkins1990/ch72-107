import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer' 
import Catalog from './pages/Catalog'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <div>
      <h1>Wilkins's  
        <br></br>Farm & Garden</h1>
      <Navbar/>
      <Catalog/>
      <Footer/>
    </div>
  )
}




export default App
