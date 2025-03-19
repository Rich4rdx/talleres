//Cree un programa que tome la base y la altura de un triángulo e imprima su área.
function calculadoratriangulo (){
    let base = parseInt(prompt("ingrese su base"))
    let altura = parseFloat(prompt("imgrese su altura "))
    let resultado = base * altura / 2

    alert("tu resultado sera" + resultado)
}
calculadoratriangulo();