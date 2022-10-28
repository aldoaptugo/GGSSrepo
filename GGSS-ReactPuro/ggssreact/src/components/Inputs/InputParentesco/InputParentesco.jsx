import React, { useEffect, useState } from 'react'
import "./InputParentesco.css";
const InputParentesco = ({nameInput, array, placeHolder, nameButton, nameCheck, checked, display}) => {
    const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  return (
    <div className="formulario__grupo mt-2">
        <div className="">
            <label class="formulario-label-Parentesco mt-2">{nameInput}</label>
        </div> 
        <div className=''>
            <select class="form-select form_select ml-4 px-0 mt-0 mb-0 formulario-input-Legajo" >
                {
                    array.map(op=>{
                        return (
                            <option>{op}</option>
                        )
                    })
                }
            </select>
        </div>                   
        <div className='form__grupo__input2 pl-1'>
            <button type="button" 
              class="tercero btn btn-validacion btn-outline-danger btn-sm ml-2 pl-2 mt-2">
              {nameButton}
            </button>
        </div>
        <div className={mostrarComponente? "d-flex align-items-center col-xl-3 ml-4" : "none"}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={checked} />
            <label class="form-check-label" for="flexCheckChecked">
                {nameCheck}
            </label>           
        </div>  
    </div>
  )
}

export default InputParentesco