//En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
//pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
//mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura switch-case.

/*function verificariva(producto){
    if((producto === "lentejas") || (producto === "arroz")){
        console.log(` ${producto} no tiene iva`)
    } else if((producto === "vino") || (producto === "crema")){
        console.log(` ${producto} si tiene iva` )
    }

 }

 verificariva("lentejas");  
verificariva("vino");      
verificariva("arroz");     
verificariva("crema");*/
let producto = prompt("Ingrese lentejas, arroz, vino o crema para saber si tiene IVA");

switch(producto.toLowerCase()) {  
    case "lentejas":
    case "arroz":
        alert("Estos productos no tienen IVA");
        break;

    case "vino":
    case "crema":
        alert("Estos productos contienen IVA");
        break;

    default:
        alert("Producto no reconocido.");
        break;
}