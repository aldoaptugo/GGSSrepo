import React from 'react'
import TextArea from '../../../Inputs/TextArea/TextArea'

const Barrios = () => {
  return (
    <>
      <div className="llamadaApi">

        <label htmlFor="data">Datos: </label>
        <br />
        <select className="form-select row mt-1" multiple aria-label="multiple select example">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

      </div>
      <div className="bodyInputs">

        <label htmlFor="localidad" style={{ marginRight: "15px" }}>Localidad:</label>
        <input type="text" name="localidad" id="" />

        <br />

        <label htmlFor="barrio" style={{ marginRight: "15px" }}> Barrio: </label>
        <input type="text" name="barrio" />

        <br />

        <TextArea inputName="Observaciones" />

        <hr />

        <div className="btnInputs">
          <button type="button" className="btn btn-success btnAceptar">
            ACEPTAR
          </button>

          <button type="button" className="btn btn-danger">
            CANCELAR
          </button>
        </div>


      </div>
    </>
  )
}

export default Barrios