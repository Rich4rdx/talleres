//Crear una clase base Empleado con un atributo estático totalEmpleados que se incremente cada vez que se cree un Empleado o un Gerente.

class Empleado {
    static totalEmpleados = 0
    constructor(nombre,cargo){
        this.nombre = nombre
        this.cargo = cargo

        Empleado.totalEmpleados++
        
    }


    
}


console.log(`el total de empleados es de ${Empleado.totalEmpleados}`);

const empleado1 = new Empleado ("juan","gerente")
console.log(`ya ingreso un nuevo empleado  ${Empleado.totalEmpleados}`);
const empleado2 = new Empleado ("jose", "empleado")
console.log(`ahora entro otr empleado  y hay un total de ${Empleado.totalEmpleados}`);


