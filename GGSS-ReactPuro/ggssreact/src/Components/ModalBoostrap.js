import React from 'react'

function ModalBoostrap() {
  return (
    <div>
    {/* <!-- Modal --> */}
        <div class="modal fade" id="ModalEstado" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Estado</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" 
                    class="btn btn-danger"
                    // {/* ACA va la chancha! el BAckend */}
                    >
                    Guardar</button>
            </div>
           </div>
        </div>
       </div>
    </div>
  )
}

export default ModalBoostrap