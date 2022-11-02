import "./InputForm.css";
import {useEffect} from "react";

const InputForm = ({
  nameInput,
  messageError,
  placeHolder,
  onChange,
  inputId,
  value,
  classes
}) => {
  useEffect(() => {
    
  }, [classes])
  
  //Seteamos las clases en el classes.js y las mapeamos a los tags que queremos. Made in inft, derechos de autor.
  return (
    classes.map((clase, index)=>{
        <div key={`${index}${clase.id}`} className={clase.classOne}>
        <div className={clase.classTwo}>
            <label className={clase.classThree} htmlFor={inputId}>{nameInput}</label>
        </div>
        <div className={clase.classFour}>
            <input type="text" 
                    className={clase.classFive}      id={inputId}                               
                    placeholder={placeHolder}
                    value={value} 
                    onChange={(e)=>onChange(e)}            
                    />
        </div>
        <div className={clase.classSix}>
            <i className={clase.classSeven}></i>            
        </div>  
        <div className={clase.classEight}>
            <p className={clase.classNine}>{messageError}</p>
        </div>    
    </div>
    })
    
  )
};
export default InputForm;