import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BasicModal from '../Modals/BasicModal/BasicModal';


const ButtonCallModal = ({idModal, nameButton, nameModal, nameOptionModal}) => {
  return (    
    <>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
      {nameButton.toString()}
    </button>
    <BasicModal idModal={idModal} nameModal={nameModal} nameOptionModal={nameOptionModal} idInput="inputPrueba"/>
    </>
  )
}

export default ButtonCallModal;