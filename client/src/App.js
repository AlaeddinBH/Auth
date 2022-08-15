import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profil from './components/Profil';
import ProductList from './components/Product/ProductList';
import ContactForm from './components/ContactUs/ContactForm';


function App() {
  return (
    <div >
      <BrowserRouter>
      <div >
        <Routes>
          <Route path='/' element={<SignUp/>} /> 
          <Route path='/signin' element={<SignIn/>} />          
          <Route path='/profil' element={<Profil/>} /> 
          <Route path='/product' element={<ProductList/>} />
          <Route path='/contact' element={<ContactForm/>}/>  
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
