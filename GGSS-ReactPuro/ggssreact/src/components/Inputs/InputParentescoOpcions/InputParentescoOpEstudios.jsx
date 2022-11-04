import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
import "./InputParentescoOpcions.css";
const InputParentescoOpEstudios = ({
  nameInput,
  array,
  placeHolder,
  nameButton,
  nameCheck,
  checked,
  display,
  propArray,
  idModal
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <div className="formulario__grupo mt-1">
      <div className="">
        <label className="formulario-label-ParentescoFliaOpEstudios mt-2">{nameInput}</label>
      </div>
      <div className="">
        <select className="form-select ml-4 mt-1">
          {
            array.map((op, i) => {
              return propArray == op ? <option key={i} selected defaultValue>{op}</option> : <option key={i}  defaultValue>{op}</option>
            })
          }
        </select>
      </div>
      <div className="ml-0 d-flex justify-content-cener align-items-center">
        <ButtonCallModal idModal={idModal} className={mostrarComponente ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2 " : "none"} nameButton={nameButton} useNavbar={false} useButton={true}/> 
      </div>
      <div
        className={
          mostrarComponente
            ? "d-flex align-items-center col-xl-3 ml-3 pl-2"
            : "none"
        }
      >
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked={checked}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          {nameCheck}
        </label>
      </div>
    </div>
  );
};

export default InputParentescoOpEstudios;
