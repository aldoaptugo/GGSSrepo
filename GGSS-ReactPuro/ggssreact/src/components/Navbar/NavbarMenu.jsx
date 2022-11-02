import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import ButtonCallModal from '../Buttons/ButtonCallModal';
import BasicModal from '../Modals/BasicModal/BasicModal';

const NavbarMenu = () => {

	const [estadosCiviles, setEstadosCiviles] = useState([]);
	const url = "http://54.243.192.82/api/EstadosCiviles";

	useEffect(()=>{
		axios
		.get(url)
		.then(res=> setEstadosCiviles(res.data))
	},[])

	
	const objectInput = [
		{
			"label" : "Masculino",
			"placeholder" : "Casado"
		},
		{
			"label" : "Femenino",
			"placeholder" : "Casada"
		}
	]
	const objetEstudios = [{ "label" : "Estudios", "placeholder" : "Universitario"}]
	
	

  return (
	    <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<button class="navbar-toggler" type="button" 
			data-bs-toggle="collapse" 
			data-bs-target="#navbarNav" 
			aria-controls="navbarNav" 
			aria-expanded="false" 
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Empleados
                    </a>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="/home">Ficha Empleados</Link></li>
                        <li><Link class="dropdown-item" to="#">Busqueda de Datos</Link></li>
                    </ul>
                </li>
				{/* <li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Liquidación</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Esquemas y Conceptos</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Períodos</a>
				</li> */}
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tabla de Datos
                    </a>
                    <ul class="dropdown-menu">
          				
						<h6 className="titleEmpleados">Para empleados: </h6>
						<div className="">
							<ButtonCallModal idModal="modalEC" nameButton="Estudios" useNavbar={true}/>

							{/* <li><Link class="dropdown-item" to="/lista-datos/estadoCivil">Estado Civil</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/estudios">Estudios</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/tipoDocumento">Tipo de Documento Civil</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/parentescos">Parentescos</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/estadosEmpleados">Estados para empleados</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/calles">Calles</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/cargos">Cargos</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/formasDePago">Formas de Pago</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/modosDeContratacion">Modos de Contratación</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/modosDeLiquidacion">Modos de Liquidación</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/motivosEgreso">Motivos de Egreso</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/paises">Paises</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/pdlb">Provincias - Departamentos - Localidades - Barrios</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/tareasDesempeñadas">Tareas Desempeñadas</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/empleadores">Empleadores</Link></li>
							<li><Link class="dropdown-item" to="/lista-datos/alicuotas">Alicuotas</Link></li> */}
						</div>
						<hr />
						<h6 className="titleLiquidacion">Para liquidación: </h6>
						<div className="datosLiquidacion">
							...
						</div>
                    </ul>
                </li>
				


				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Informes y Listados</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Parámetros</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Acerca de...</a>
				</li>
				<BasicModal idModal="modalEC" nameModal="Estados Civiles" nameOptionModal="Estado Civil" disableTxtArea={false} placeholder={objectInput} array={estadosCiviles} />
				<li>
					<a class="nav-link" href="/">Salir</a>
				</li>
      		</ul>
    </div>
  </div>
</nav>
  )
}

export default NavbarMenu;