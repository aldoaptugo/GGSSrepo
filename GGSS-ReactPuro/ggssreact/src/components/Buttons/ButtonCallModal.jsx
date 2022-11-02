import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BasicModal from '../Modals/BasicModal/BasicModal';


const ButtonCallModal = ({idModal, nameButton, useNavbar}) => {
  console.log(nameButton)
  return (    
    <>
      <button type="button" className={useNavbar ? "dropdown-item btnCallModal" :  "btn btn-danger"} data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
        {nameButton}
      </button>
    </>
  )
}

export default ButtonCallModal;