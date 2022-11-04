  //#region Imports

import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import DNICboBox from "../Inputs/DNICboBox/DNICboBox";
import InputButton from "../Inputs/InputButton/InputButton";
import InputCbo from "../Inputs/InputCbo/InputCbo";
import InputDate from "../Inputs/InputDate/InputDate";
import InputFile from "../Inputs/InputFile/InputFile";
import InputForm from "../Inputs/InputForm/InputForm";
import InputRadio from "../Inputs/InputRadio/InputRadio";
import TextArea from "../Inputs/TextArea/TextArea";
import Navbar from "../Navbar/Navbar";
import "./DatosPersonales.css";
import { employeContext } from "../../context/employeContext";
import axios from "axios";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import Domicilios from "../Domicilios/Domicilios";
import { getData } from "../../services/fetchAPI";

  //#endregion

const DatosPersonales = () => {
  const optionsDNI = ["D.N.I.", "L.C.", "L.E."];

  //------------------------------------------------------------------------------CONTEXT
  const { saveEmpl, saveEstados, saveEstado,  saveEstadosCiviles,  saveEstadoCivil, saveNacionalidades, saveNacionalidad ,saveEstudios, saveEstudio, saveTipoDNI, saveTiposDNI} = useContext(employeContext);
  //------------------------------------------------------------------------------ESTADOS
  const [error, setError] = useState("");

  //#region ------------------------------------------------------------------------------URLs (Luego cambiar a archivos Js)
  const url = "http://54.243.192.82/api/Estados";
  const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles";
  const urlPaisesNac = "http://54.243.192.82/api/Paises";
  const urlEstudios = "http://54.243.192.82/api/Estudios";
  const urlTiposDNI = "http://54.243.192.82/api/TiposDocumento";
  //#endregion

  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS
  const estadosCivilesMasculinos = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (estado.masculino); }) : []; 
  const estadosCivilesFemeninos = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (estado.femenino); }) : [];
  const estadosCiviles = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (`Masculino: ${estado.masculino}, Femenino: ${estado.femenino}`); }) : [];    
  const nacionalidadesMasculinas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nacionalidad_masc); }) : []; 
  const nacionalidadesFemeninas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nacionalidad_fem); }) : []; 
  const nacionalidades = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (`Masculino: ${nac.nacionalidad_masc}, Femenino: ${nac.nacionalidad_fem}`); }) : [];
  const paises = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nombrePais); }) : [];
  const idPaisOrigen = saveEmpl[0].idPaisOrigen !== undefined ? saveEmpl[0].idPaisOrigen : 0;
  const paisSelected = saveNacionalidad !== undefined ? saveNacionalidad.find(pais => pais.idPais === idPaisOrigen) : "ARGENTINO"; 
  const estudios = saveEstudio !== undefined ? saveEstudio.map((nac, i)=>{ return (nac.estudiosNivel); }) : [];
  const idSelected = saveEmpl[0].iDestudios !== undefined ? saveEmpl[0].iDestudios : 0;
  const estudioSelect = saveEstudio !== undefined ? saveEstudio.find(estudio => estudio.iDestudios === idSelected) : "(Ninguno)";
  const estadosArray = saveEstado.map((m,i)=>{return (m.nombreEstado)});
  const estadosEmpleado = saveEstado !== undefined ? saveEstado.map(est => {return (est.nombreEstado)}) : null;
  const idEstadoSelec = saveEmpl[0] !== undefined ? saveEmpl[0].idEstado : 0;
  const estadoSEleccionado = saveEstado !== undefined ? saveEstado.find(est => est.idEstado === idEstadoSelec) : "ARGENTINO"; 
  const tiposDNI = saveTipoDNI !== undefined ? saveTipoDNI.map(tdni=> {return tdni.tipoDocumento}) : null;
  //#endregion
  
  //#region ------------------------------------------------------------------------------USEEFFECTS (Queda mejorarlos para que no sean muchos)

  useEffect(() => {
    getData(url, saveEstados);
    }, []);
  useEffect(() => {
    getData(urlEstadosCiviles, saveEstadosCiviles);    
  }, [ ]);
  useEffect(() => {
    getData(urlPaisesNac, saveNacionalidades);
  }, [ ]);
  useEffect(()=>{
    getData(urlEstudios, saveEstudios);
  },[])
  useEffect(()=>{
    getData(urlTiposDNI, saveTiposDNI);
  },[])
  
  //#endregion
  
  //#region ------------------------------------------------------------------------------VALIDACIONES

  
  const validateNumbers = (e) => {
    if (!/[0-9]/.test(e.key)) {
      setError("Ingrese sólo números");
      e.preventDefault();
    }
  };
  const validateNumbersTelefono = (e) => {
    if (!/[0-9]/.test(e.key)) {
      setError("Ingrese sólo números");
      e.preventDefault();
    }
  };
  const validateNumbersDNI = (e) => {
    if (!/^([0-9]?){8}$/.test(e.key)) {
      setError("Ingrese sólo números");
      swal({
        title: "¡Error!",
        text: `${error}`,
        icon: "error",
      });
      e.preventDefault();
    }
  };
  const validateTexts = (e) => {
    if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(e.key)) {
      setError("Ingrese sólo letras y espacios");
      e.preventDefault();
    }
  };
  const validateEmails = (e) => {
    if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(e.key)) {
      setError("Ingrese sólo letras y espacios");
      e.preventDefault();
    }
  };
  //#endregion
  
  return (
    //#region Menú Principal
    <div className="Lateral-Derecho">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Datos Personales
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <section className="container">
                <div className="row">
                  <div className="formulario__grupo">

                  </div>
                  <form action="" className="form__datos__personales ">
                    <div className="row row-cols-12">
                      <div className="segunda__columna col-5">
                        {
                          //#endregion

                        }
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined || saveEmpl[0] === null
                              ? saveEmpl[0].legajo
                              : null
                          }
                          nameInput="Legajo N°"
                          messageError="Solo puede contener números."
                          placeHolder="N° Legajo"
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].apellido
                              : null
                          }
                          nameInput="Apellido"
                          messageError="Solo puede contener letras."
                          placeHolder="Ingrese Apellidos"
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].nombres
                              : null
                          }
                          nameInput="Nombres"
                          messageError="Solo puede contener letras."
                          placeHolder="Ingrese Nombres"
                        />
                        <DNICboBox
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].nroDocumento
                              : null
                          }
                          nameInput="Documento"
                          messageError="Solo puede contener números, sin puntos."
                          placeHolder="23456789"
                          array={tiposDNI}
                        />
                        <InputButton
                          value={
                            saveEmpl[0] !== undefined ? saveEmpl[0].cuil : null
                          }
                          id="inputCuil"
                          nameLabel="C.U.I.L"
                          nameButton="Generar"
                          placeholder="##-########-#"
                          idModal="modalCuil"
                          array={[]}
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].telFijo
                              : null
                          }
                          nameInput="Teléfono"
                          messageError="Solo puede contener números."
                          placeHolder="11352458965"
                        />
                       <InputCbo
                          value={
                            saveEstadoCivil[0] !== undefined
                              ? saveEstadoCivil[0].idEstadoCivil
                              : null
                          }
                          sexo={saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null}
                          nameButton="..."
                          nameLabel="Estado Civil"
                          array={estadosCiviles}
                          propArray="Casado"
                          masculinos={estadosCivilesMasculinos}
                          femeninos={estadosCivilesFemeninos}
                          display={true}
                          idModal="EstadoCivil"
                        />
                       <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idNacionalidad
                              : null
                          }
                          sexo={saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null}
                          nameButton="..."
                          nameLabel="Nacionalidad"
                          array={ nacionalidades !== undefined ? nacionalidades : ["Nacionalidad"]}
                          propArray="Casado"
                          masculinos={nacionalidadesMasculinas}
                          femeninos={nacionalidadesFemeninas}
                          display={true}
                          idModal="nacionalidades"
                        />
                      </div>
                      <div className="tercera_columna col-5">
                        <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idEstado
                              : null
                          }
                          sexo=""
                          nameButton="..."
                          nameLabel="Estado"
                          array={estadosArray !== undefined  ? estadosArray : ["Activo"]}
                          propArray={estadoSEleccionado !== undefined ? estadoSEleccionado.nombreEstado : ""}
                          masculinos=""
                          femeninos=""
                          display={true}
                          idModal="estadosEmpleados"
                        />
                        <InputRadio
                          value={
                            saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null
                          }
                          nameFirst="Masculino"
                          nameSecond="Femenino"
                          nameInput="Sexo"
                        />
                        <InputDate
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].fechaNacimiento
                              : null
                          }
                          nameInput="Nacimiento"
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].telMovil
                              : null
                          }
                          nameInput="Móvil"
                          messageError="Solo puede contener números."
                          placeHolder="Ingrese su celular"
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined ? saveEmpl[0].mail : null
                          }
                          nameInput="E-mail"
                          messageError="Ingrese un email válido."
                          placeHolder="correo@correo.com.ar"
                        />
                        <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idPaisdeOrigen
                              : null
                          }
                          sexo=""
                          nameButton="..."
                          nameLabel="País de Origen"
                          array={paises}
                          propArray={paisSelected !== undefined ? paisSelected.nombrePais : ""}
                          masculinos=""
                          femeninos=""
                          display={true}
                          idModal="paises"
                        />
                       <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idEstudios
                              : null
                          }
                          sexo=""
                          nameButton="..."
                          nameLabel="Estudios"
                          array={estudios}
                          propArray={estudioSelect !== undefined ? estudioSelect.estudiosNivel : "Cursos"}
                          masculinos=""
                          femeninos=""
                          display={true}
                          idModal="Estudios"
                        />
                        <TextArea inputName="Obs. Estudios" maxLength="55" />
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    
                    <div className="col-xl-5 mt-2">
                      <InputFile inputName="Arrastre su imagen" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Domicilios />
      </div>
      <div className="d-flex justify-content-end">
        <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" />
      </div>
    </div>
  );
};
export default DatosPersonales;
