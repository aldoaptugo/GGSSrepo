export function getEmpleados(empleados){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(empleados), 2000);
    });
}

export function getEmpleado(empleados, idEmpleado){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(empleados.filter(d=> d.iDempleado === idEmpleado)), 1000);
    });
}

export function getEmployeByLegajo(empleados, legajo){
  return new Promise((resolve)=>{
    setTimeout(()=> resolve(empleados.filter(e=> e.legajo.includes(legajo))),0);
}); 
}

export function getEmployeByName(empleados, name){
  return new Promise((resolve)=>{
    setTimeout(()=> resolve(empleados.filter(e=> e.apellido.includes(name) || e.nombres.includes(name))),0);
}); 
}