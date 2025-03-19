//Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
function esVocal() {
    

let vocal = prompt("ingrese una vocal ") .toLowerCase()
if (vocal.length == 1 && /[a-z]/.test(vocal)) {
    return alert("aeiou".includes(vocal )? "es una vocal" : "una cosonante")
    
}

}
esVocal()