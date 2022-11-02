import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { classesEstadosCiviles } from '../../DatosPersonales/classes';
import InputForm from '../../Inputs/InputForm/InputForm';
import TextArea from '../../Inputs/TextArea/TextArea';
import "./BasicModal.css"

const BasicModal = ({idModal, nameModal, nameOptionModal,array, disableTxtArea, placeholder}) => {


  return (
    <div>
            <div className="modal fade" id={idModal} tabindex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                                {nameModal}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="llamadaApi">
                                {
                                    
                                }
                            </div>
                            <div className="bodyInputs">
                                <div className='row'>
                                    <div className='col-xl-6'>
                                        <label htmlFor="calle" style={{ marginRight: "15px" }}> {nameOptionModal}: </label>
                                        <input type="text" name="calle" />
                                        <br />
                                        <select class="form-select row mt-1" multiple aria-label="multiple select example">
                                            {
                                                array.map((a,i)=>{
                                                    return(
                                                            <><option className='' key={i}> {a.masculino}</option><option className='' key={i}>{a.femenino}</option></>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='col-xl-6'>
                                        <aside>
                                            {
                                                placeholder.map((p,i)=>{
                                                    return(
                                                        <InputForm classes={[classesEstadosCiviles[0]]} key={i} nameInput={p.label} placeHolder={p.placeholder} inputId={p.label} />
                                                    )
                                                })
                                            }
                                        </aside>
                                        <div className="btnInputs d-flex flex-row-reverse mt-2">
                                        <button type="button" className="btn btn-success btnAceptar">
                                            ACEPTAR
                                        </button>
                                        <button type="button" className="btn btn-danger">
                                            CANCELAR
                                        </button>
                                </div>
                                    </div>
                                </div>
                                
                                
                                <div className="crudBtns">
                                <button type="button" className="btn btn-success crudBtn">
                                    AGREGAR
                                </button>
                                <button type="button" className="btn btn-warning crudBtn">
                                    MODIFICAR
                                </button>
                                <button type="button" className="btn btn-danger crudBtn">
                                    ELIMINAR
                                </button>
                            </div>
                                {
                                    disableTxtArea && <TextArea inputName="Observaciones" />
                                }       
                                
                            </div>
                        </div>

                        <div className="modal-footer">
                        
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                SALIR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BasicModal;