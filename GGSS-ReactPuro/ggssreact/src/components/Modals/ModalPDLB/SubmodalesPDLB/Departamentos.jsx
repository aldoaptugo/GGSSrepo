import React from 'react'

const Departamentos = () => {
    return (

        <>
            <div className="llamadaApi">
                ACA IRIA LA LLAMADA
                {/* <LlamadaBackend/> */}
            </div>
            <div class="bodyInputs">

                <label for="provincia" style={{ marginRight: "15px" }}>Provincia:</label>
                <input type="text" name="provincia" id="" />

                <br />

                <label for="departamento" style={{ marginRight: "15px" }}> Departamento: </label>
                <input type="text" name="departamento" />

                <br />

                <label for="obs">Observaciones: </label>
                <br />
                <textarea name="obs" id="" cols="30" rows="10" style={{ maxHeight: "150px" }} placeholder='Observaciones...'> </textarea>

                <hr />

                <div className="btnInputs">
                    <button type="button" class="btn btn-success btnAceptar">
                        ACEPTAR
                    </button>

                    <button type="button" class="btn btn-danger">
                        CANCELAR
                    </button>
                </div>


            </div>
        </>
    )
}

export default Departamentos