import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./InputButton.css";

const InputButton = ({nameButton, placeholder, nameLabel, maxLeght, value, onClick}) => {

   const [cuit, setCuit] = useState("");



  const sendCuit=()=>{
    if(value !== {} && value.nroDocumento !== undefined){
      console.log((value.nroDocumento).toString())
      setCuit(onClick((value.nroDocumento).toString(), (value.sexo).toString()));
    }
    console.log("No entro")
    return null;
  }
  useEffect(()=>{
    sendCuit();
  },[value.nroDocumento]) 


  console.log(cuit)

  return (
    <div className="formulario__grupo__inputs">
        <div className='formulario__grupo'>
            <label className='formulario__label mt-2' for="legajo">{nameLabel}</label>
        </div>
        <div className='form__grupo-input'>
            <input type="text" 
                    value={value != {} ? value.cuil : null}
                    maxLength={maxLeght}
                    class="formulario-input-Legajo col ml-0 px-0 mt-0 mb-2 mr-1" 
                    placeholder={placeholder} 
                    id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04" />
        </div>
			  <button onClick={onClick} type="button" 
              class="btn btn-validacion btn-outline-danger ml-2">
              {nameButton}</button>
    </div>
  )
}
export default InputButton;