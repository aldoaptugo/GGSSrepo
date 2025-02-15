import React, { useState } from 'react';
import DragArea from './DragArea';
import VetanaLateral from './VentanaLateral';
import swal from 'sweetalert';


const FormularioUp = () => {
	const [error, setError] = useState("");
	const [inputValue, setInputValue] = useState ();
	
	//let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	// const validateNumbers= (e) => {	
	// 	//e.preventDefault();
	// 	// if(inputValue.test(regexName)) {
	// 	// 	setError("Debe ingresar solo números");
	// 	// 	return;
	// 	// }
	// }

	const validateNumbers =(e)=>{		
		if (!/[0-9]/.test(e.key)) {
			setError("Ingrese sólo números");
			e.preventDefault();
		}
	}
	const validateNumbersTelefono =(e)=>{		
		if (!/[0-9]/.test(e.key)) {
			setError("Ingrese sólo números");
			e.preventDefault();
		}
	}

	const validateNumbersDNI =(e)=>{		
		if (!/^([0-9]?){8}$/.test(e.key)) {
			setError("Ingrese sólo números");
			swal({
				title: "¡Error!",
				text: `${error}`,
				icon: "error",
			  });
			e.preventDefault();
		}
	}
	const validateTexts =(e)=>{		
		if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(e.key)) {
			setError("Ingrese sólo letras y espacios");
			e.preventDefault();
		}
	}
	const validateEmails =(e)=>{		
		if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(e.key)) {
			setError("Ingrese sólo letras y espacios");
			e.preventDefault();
		}
	}

	
	// const body = {
	// 	"legajo": inputValue,
	// }

	// const fetchData = () => {	
	// 	axios.post(url, body)
	// 	// .then(resp => console.log(resp) 200 Ok Succces);
	// 	.then(resp => {
	// 		if(!HttpStatusCode(OK)){
	// 			setError("Error al enviar el formulario");
	// 		}
	// 	})
	// }

	// const sendData = () => {
	// 	validateNumbers();
	// 	Todas las validaciones
	// 	fetchData();
	// };

// Empleados: {
// 	StatusCode: 200,
// 	Items: [...],
// 	Message: "Success" "Error + condigo Error"
// }

return (
		<div>
	<div>
		<div class="formulario__grupo">
			<label for="usuario" class="mainABMTitle">Datos Personales</label>
		</div> 

<div class="container text-start">
  <div class="row align-items-start border border-dark p-2 mb-0 border-opacity-25">
    <div class="col-3 ">
			{/* div Barra Lateral   */}
		<VetanaLateral/>
    </div>
    <div class="col-4 ">
	<div
	//div Central desde Legajo a Nacionalidad
	>

		<div 
		action='' 
		class="container text-start"
		// className='formulario'
			// onSubmit={sendData}
		>
		{/* <!------PrimerSectionUp-------> */}
		{/* <!--Grupo: Legajo --> */}
	<div class="formulario__grupo">
	<label className="formulario__label">Legajo N°</label>
	<div class="formulario__grupo-input">
		<input type="text" 
		class="formulario-input-Legajo col-5 px-1" 
				placeholder="N° de Legajo" 
				onKeyPress={(e)=>validateNumbers(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
				// setInputValue(e.target.value)}
			}/>
	
	{/* <input type="text" class="formulario-input-Legajo col-4" placeholder="N° de Legajo"/> */}
		<i class="formulario__validacion-estado fas fa-times-circle"></i>
	</div>
		<p class="formulario__input-error">Solo puede contener números.</p>
	</div>
	<div>  
	<div>
		{/* <!--Grupo: Apellido --> */}
		<div class="formulario__grupo" >
		<label class="formulario__label">Apellido</label>
		<div class="formulario__grupo-input">
			<input type="text"  class="formulario__input col-6 px-1" 
					name="nombre" 
					placeholder="Ingrese Apellidos"
					onKeyPress={(e)=>validateTexts(e)} 
					value={inputValue} 
					onChange={(e)=> 
					console.log(e.target.value)
					
					}/>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			</div>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
		{/* <!-- Grupo: Nombres --> */}
		<div class="formulario__grupo" >
			<label for="nombre" class="formulario__label">Nombres</label>
			<div class="formulario__grupo-input">
				<input type="text" class="formulario__input col-6 px-1" 
						name="nombre" 
						placeholder="Ingrese Nombres"
						onKeyPress={(e)=>validateTexts(e)} 
						value={inputValue} 
						onChange={(e)=> 
						console.log(e.target.value)
						
					}/>
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Solo puede contener letras.</p>
			</div>
		{/* <!-- Grupo: D.N.I. --> */}
		<div class="formulario__grupo" >
		<label class="formulario-label-DNI">DNI</label>
		<select class="form-select form_select " >
			{/* <option selected>DNI</option> */}
			<option value="1">DNI</option>
			<option value="2">LC</option>
			<option value="3">LE</option>
		</select>
		<input type="text" className="formulario-input-DNI col-3 ml-1 px-1" 
				maxlength="8"
				placeholder="23456789"
				onKeyPress={(e)=>validateNumbersDNI(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
				
				}/>
		<i class="formulario__validacion-estado fas fa-times-circle"></i>
	</div>
		<p class="formulario__input-error">Solo puede contener números, sin puntos.</p>
	{/*<!--Grupo: C.U.I.L. -->*/}
	<div class="formulario__grupo">
		<label class="label label-info formulario__label">C.U.I.L.</label>
		<div class="formulario__grupo-input">
			<input type="text" id="cuit" class="formulario__input col-6 px-1" 
			maxlength="11"
			placeholder="##-########-#" 
			onKeyPress={(e)=>validateNumbers(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
				}/>
		
			<button type="button" class="btn btn-validacion btn-outline-primary">Validar</button>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener números, sin puntos.</p>
		</div>
	</div>
		{/*<!-- Grupo: Teléfono -->*/}
		<div class="formulario__grupo" >
		<label for="telefono" class="formulario__label">Teléfono</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario-input-DNI col-5 px-1" 
				maxlength="100" 
				placeholder="1151993165"
				onKeyPress={(e)=>validateNumbersTelefono(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
				
				}/>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El teléfono solo puede contener números.</p>
		</div>
		{/* <!--Grupo: Estado Civil --> */}
		<div class="formulario__grupo" >
		<label for="nombre" class="formulario__label">Estado Civil</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-7 px-1" 
					name="nombre" 
					placeholder="Ingrese Estado Civil"
					onKeyPress={(e)=>validateTexts(e)} 
						value={inputValue} 
						onChange={(e)=> 
						console.log(e.target.value)
						
					}/>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
				<i class="formulario__validacion-estado fas fa-times-circle"></i>	
				<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
		{/* <!--Grupo: Nacionalidad --> */}
		<div class="formulario__grupo" >
		<label for="nombre" class="formulario__label">Nacionalidad</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-7 px-1" 
					name="nombre"
					placeholder="Ingrese Nacionalidad"
					onKeyPress={(e)=>validateTexts(e)} 
						value={inputValue} 
						onChange={(e)=> 
						console.log(e.target.value)
						
					}/>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
		
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>

	</div>
</div>

	</div>
	</div>
	</div>
    <div class="col-4">
	<div
	//div Derecha de Estado hasta Estudios
	>
					{/* <!-- Grupo: Estado --> */}
	<div class="formulario__grupo">
	<label for="nombre" class="formulario__label col-2 px-0 mr-4">Estado</label>
			<select class="form-select col-3 px-1" aria-label="Default select example">
					{/* <option selected>Open this select menu</option> */}
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
			</select>
		{/* <label for="nombre" class="formulario__label">Estado</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-6" placeholder="Ingrese Estado"></input>
			<button type="button" class="btn btn-validacion btn-outline-danger" data-bs-toggle="modal" data-bs-target="#ModalEstado">...
			</button>
				
			<i class="formulario__validacion-estado fas fa-times-circle"></i>			
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div> */}
	</div>
	
	{/*<!-- Grupo: Masculino & Femenino -->*/}
	<div class="formulario__grupo" >
		<label class="formulario__label_Sexo col-2 mt-2 mb-2 px-0 mr-4">Sexo</label>
		<div class="form-check mt-2 mb-2">
			<input class="form-check-input" type="radio" 
					name="flexRadioDefault" 
					id="flexRadioDefault1"/>
					
			<label class="form-check-label" for="flexRadioDefault1">
			Masculino
			</label>
		</div>
		<div class="form-check mt-2 mb-2 ml-1">
			<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
			<label class="form-check-label" for="flexRadioDefault1">
			Femenino
			</label>
		</div>
	</div>

		{/*<!--Grupo: Nacimiento -->*/}
		<div class="formulario__grupo" >
		<label for="usuario" class="formulario__label_Nacimiento mt-3 col-2 px-0 mr-4">Nacimiento</label>
		<div class="formulario-input-DNI px-0 mx-0 mb-2">
			<input type="date" 
					id="birthday" 
					name="birthday"
					/>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">Elija la fecha de su Nacimiento</p>
		</div> 
	{/*<!-- Grupo: Móvil -->*/}
	<div class="formulario__grupo" >
		<label for="telefono" class="formulario__label mt-2">Móvil</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario-input-DNI col-4" 
			name="telefono" 
			placeholder="1151993165"
				onKeyPress={(e)=>validateNumbers(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
				}/>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El teléfono solo puede contener números.</p>
	</div>
		{/* <!--Grupo: E-mail --> */}
	<div class="formulario__grupo" >
		<label for="correo" class="formulario__label mt-2">E-mail</label>
		<div class="formulario__grupo-input">
			<input type="email" class="formulario__input col-8" 
					name="correo" 
					placeholder="correo@correo.com"
					onKeyPress={(e)=>validateEmails(e)} 
					value={inputValue} 
					onChange={(e)=> 
					console.log(e.target.value)
				}/>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
		</div>
	{/* <!--Grupo: País de Origen --> */}
	<div class="formulario__grupo" >
		<label class="formulario__label mt-2" >País de Origen</label>
		<div class="formulario__grupo-input">
			<input type="text" 
					class="formulario__input col-8"
					maxlength="100"  
					placeholder="Ingrese País de Origen"
					/>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
	{/* <!--Grupo: Estudios --> */}
	<div class="formulario__grupo" >
		<label for="nombre" class="formulario__label mt-2">Estudios</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-8" 
					name="nombre" 
					placeholder="Ingrese Estudios"
					/>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>

	</div>
	</div>
</div>
</div>

<div class="container text-start"> 
<div class="row align-items-start border border-dark p-2 mb-2 border-opacity-25">

<div class="col-3 ">
			{/* Ghost-div   */}
    </div>


<div class="col-4">
		{/* <!--Grupo: Observaciones -->*/}
		<div class="formulario__grupo ">
		<label for="nombre" class="formulario__label-Obs">Observaciones</label>
		<div class="form-floating ">
  				<textarea class="form-control-TextArea"
							maxlength="255" 
							placeholder="Ingrese sus observaciones" 
							id="floatingTextarea2">
							</textarea>
			{/* <!-- Grupo: Boton Cancelar & Aceptar --> */}
		<div class="formulario__grupo">
			<div class="formulario__grupo-input pl-2">
				<button type="submit" class="formulario__btn ml-5">Cancelar</button>
				<button type="submit" class="formulario__btn">Aceptar</button>
		</div>
			<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
		</div>
		</div>
	</div>
</div>

<div class="col-4">
		{/* <!-- Grupo: Div Perfil --> */}
		<div class="formulario__grupo mt-2 mr-1">
		<div class="">
				<div class="ml-1">
					<input type="file" id="image_input" 
						accept="image/png, image/jpg"/>
				</div>
				<div>		
					<DragArea/>
				</div>
					{/* <!-- Grupo: Boton Cancelar & Aceptar --> */}
		<div class="formulario__grupo">
			<div class="formulario__grupo-input pl-2 mt-2">
				<button type="submit" class="formulario__btn ml-5">Cancelar</button>
				<button type="submit" class="formulario__btn">Aceptar</button>
			</div>
			<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
		</div>
	</div>
	</div>
</div>
</div>
</div>


</div>
	</div>
	
  );
};
export default FormularioUp;