import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormularioUp from './Components/FormularioUp';
import Navbar from './Components/Navbar';
import SectionTabla from './Components/SectionTabla';
import FormularioDown from './Components/FormularioDown';
import SectionCRUD from './Components/SectionCRUD';
import Footer from './Components/Footer';
// import PoppusOk from './Components/PoppusOK';
// import ContactForm from './Components/ContactForm';
// import Modals from './Components/Modals';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/> 
    {/* <Modals/> */}
    {/* <ContactForm/> */}
    {/* <PoppusOk/> */}
    
    <Navbar/>
    <FormularioUp/>
    <FormularioDown/>
    <SectionTabla/>
    <SectionCRUD/>
    <Footer/>


  </React.StrictMode>
);

reportWebVitals();
