import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import ButtonLarge from '../Buttons/ButtonLarge';
import DNICboBox from '../Inputs/DNICboBox/DNICboBox';
import InputButton from '../Inputs/InputButton/InputButton';
import InputCbo from '../Inputs/InputCbo/InputCbo';
import InputDate from '../Inputs/InputDate/InputDate';
import InputFile from '../Inputs/InputFile/InputFile';
import InputForm from '../Inputs/InputForm/InputForm';
import InputRadio from '../Inputs/InputRadio/InputRadio';
import TextArea from '../Inputs/TextArea/TextArea';
import Navbar from '../Navbar/Navbar';
import printPannel from '../Navbar/printPannel';
// import TableBasic from '../Tables/TableBasic';
import "./DatosPersonales.css";
import Browser from '../Browser/Browser';
import { employeContext } from '../../context/employeContext';
import Domicilios from '../Domicilios/Domicilios';
import Footer from '../Footer/Footer';
import axios from 'axios';


const DatosPersonales = () => {

    const optionsDNI = [ "DNI", "LC", "LE"]
    const estados = ["Activo", "Baja", "Suspendido", "Anulado"]

    const {saveEmpl, saveEstados, saveEstado} = useContext(employeContext);

    const [error, setError] = useState("");
    const [inputValue, setInputValue] = useState ("");
    const url = "http://54.243.192.82/api/Estados";

    useEffect(()=>{
        axios
        .get(url)
        .then(res=> saveEstados(res.data) )
    },[])

    const estadosCiviles = [{
        "id" : 1,
        "estado" : "Soltero"
    },{
        "id" : 2,
        "estado" : "Casado" 
    },{
        "id" : 3,
        "estado" : "Viudo"
    },
    {
        "id" : 4,
        "estado" : "Algo"
    }];

    

    const validateNumbers =(e)=>{		
        if (!/[0-9]/.test(e.key)) {
            setError("Ingrese sólo números");
            e.preventDefault();
        }
    }
    const validateNumbersTelefono =(e)=>{		
        if (!/[0-9]/.test(e.key)) {
            setError("Ingrese sólo números");
            e.preventDefault();
        }
    }
    
    const validateNumbersDNI =(e)=>{		
        if (!/^([0-9]?){8}$/.test(e.key)) {
            setError("Ingrese sólo números");
            swal({
                title: "¡Error!",
                text: `${error}`,
                icon: "error",
              });
            e.preventDefault();
        }
    }
    const validateTexts =(e)=>{		
        if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(e.key)) {
            setError("Ingrese sólo letras y espacios");
            e.preventDefault();
        }
    }
    const validateEmails =(e)=>{		
        if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(e.key)) {
            setError("Ingrese sólo letras y espacios");
            e.preventDefault();
        }
    }


  return (
        <div className='containter '>
        <div class="row">   
            <div className='Lateral-Derecho col-9'>   
            <div className='menuEmpleados'>
                <Navbar />
            </div>
{/*--- Sección de Datos Personales ---*/}
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Datos Personales        
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                    <section className='container'>
                        <div className='row'>
                            <div className="formulario__grupo">
                                {/* <label for="usuario" className="mainABMTitle">Datos Personales</label> */}
                            </div> 
                            <form action="" className='form__datos__personales '>
                            {/* <div class="container text-center"> */}
                                <div class="row row-cols-12">
                                {/* <div className='primera__columna col-3'>
                                    <InputForm validations={validateNumbers} nameInput=" "  messageError="Solo puede contener números." placeHolder="N° Legajo"/>
                                    <InputForm nameInput=" " messageError="Solo puede contener letras." placeHolder="Ingrese Nombres"/>
                                </div> */}
                                <div className='segunda__columna col-4'>
                                <InputForm value={saveEmpl[0] !== undefined || saveEmpl[0] === null? saveEmpl[0].legajo : null} nameInput="Legajo N°"  messageError="Solo puede contener números." placeHolder="N° Legajo"/>
                    <InputForm value={saveEmpl[0] !== undefined ? saveEmpl[0].apellido : null} nameInput="Apellido" messageError="Solo puede contener letras." placeHolder="Ingrese Apellidos"/>
                    <InputForm value={saveEmpl[0] !== undefined ? saveEmpl[0].nombres : null} nameInput="Nombres" messageError="Solo puede contener letras." placeHolder="Ingrese Nombres"/>
                    <DNICboBox value={saveEmpl[0] !== undefined ? saveEmpl[0].nrodocumento : null} nameInput="DNI" messageError="Solo puede contener números, sin puntos." placeHolder="23456789" array={optionsDNI}/>
                    <InputButton value={saveEmpl[0] !== undefined ? saveEmpl[0].cuil : null} id="inputCuil" nameLabel="C.U.I.L" nameButton="Validar" placeholder="##-########-#" idModal="modalCuil" array={[]}/>
                    <InputForm value={saveEmpl[0] !== undefined ? saveEmpl[0].telFijo : null} nameInput="Teléfono"  messageError="Solo puede contener números." placeHolder="11352458965"/>
                    <InputButton value={saveEmpl[0] !== undefined ? saveEmpl[0].estadoCivil : null} id="inputEstadosCiviles" nameLabel="Estado Civil" nameButton="..." placeholder="Ingrese Estado Civil"  idModal="modalEstadosCiviles" array={estadosCiviles}/>
                    <InputButton value={saveEmpl[0] !== undefined ? saveEmpl[0].nacionalidad : null} id="inputNacionalidad" nameLabel="Nacionalidad" nameButton="..." placeholder="Ingrese Nacionalidad" idModal="modalNacionalidades" array={[]}/>
                                </div>
                                <div className='tercera_columna col-4'>
                                <InputCbo value={saveEmpl[0] !== undefined ? saveEmpl[0].estado : null} nameButton="Estados" nameLabel="Estado" array={saveEstado} />
                    <InputRadio value={saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null} nameFirst="Masculino" nameSecond="Femenino" nameInput="Sexo" />
                    <InputDate value={saveEmpl[0] !== undefined ? saveEmpl[0].fechaNacimiento : null} nameInput="Nacimiento" />
                    <InputForm value={saveEmpl[0] !== undefined ? saveEmpl[0].telMovil : null} nameInput="Móvil"  messageError="Solo puede contener números." placeHolder="Ingrese su celular"/>
                    <InputForm value={saveEmpl[0] !== undefined ? saveEmpl[0].mail : null} nameInput="E-mail"  messageError="Ingrese un email válido." placeHolder="correo@correo.com.ar"/>
                    <InputButton value={saveEmpl[0] !== undefined ? saveEmpl[0].paisOrigen : null} id="inputPaisO" nameLabel="País de Origen" nameButton="..." placeholder="Ingrese su País de Origen" idModal="modalPasiO" array={[]}/>
                    <InputButton value={saveEmpl[0] !== undefined ? saveEmpl[0].estudios : null} id="inputEstudios" nameLabel="Estudios" nameButton="..." placeholder="Ingrese sus Estudios" idModal="modalEstudios" array={[]}/>
                                </div>
                                </div>
                                {/* </div> */}
                            </form>
                            <div className='row'>
                                <div className='col-xl-6'>
                                    <TextArea inputName="Observaciones" maxLength="255"/>
                                </div>
                                <div className='col-xl-6'>
                                    <InputFile inputName="Arrastre su imagen"/>
                                </div>
                            </div>
                        </div>        
                    </section>
                            
                      </div>
                    </div>
                  </div>
{/*--- Sección de Domicilios ---*/}
                <Domicilios />
            </div>
            <div className= "d-flex justify-content-end"
                > 
            
            <ButtonCancelarAceptar/>
                
            
            </div>
            </div>
        </div>
            {/* 2do corte */}
            
    </div>
  )
}
export default DatosPersonales