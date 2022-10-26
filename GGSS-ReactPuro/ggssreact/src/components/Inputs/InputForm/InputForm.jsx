import React, { useState } from "react";
import "./InputForm.css";

const InputForm = ({nameInput, messageError, placeHolder, value, inputId, onChange}) => {

    

  return (
    <div className="formulario__grupo__inputs">
      <div className="formulario__grupo">
        <label className="formulario__label" for={idLegajo}>
          {nameInput}
        </label>
      </div>
      <div className="form__grupo-input">
        <input
          type="text"
          className="formulario-input-Legajo"
          id={idLegajo}
          placeholder={placeHolder}
          onKeyPress={(e) => validateNumbers(e)}
          value={value}
        />
      </div>
        <div className='formulario__grupo'>
            <label className='formulario__label' htmlFor={inputId}>{nameInput}</label>
        </div>
        <div className='form__grupo-input'>
            <input type="text" 
                    className='formulario-input-Legajo'                     
                    id={inputId}                                 
                    placeholder={placeHolder}
				    value={value} 
                    onChange={(e)=>onChange(e)}            
                    />
        </div>
        
        <div className='form__grupo__icons'>
            <i className="fas fa-times-circle form__grupo__icon"></i>            
        </div>  
       
        <div className='form__grupo__errors'>
            <p className='form__grupo__error'>{messageError}</p>
        </div>    
    </div>
  )
}

      <div className="form__grupo__icons">
        <i className="fas fa-times-circle form__grupo__icon"></i>
      </div>

      <div className="form__grupo__errors">
        <p className="form__grupo__error">{messageError}</p>
      </div>
    </div>
  );
};

export default InputForm;
