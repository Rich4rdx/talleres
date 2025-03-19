//Escriba una función que reciba un número n como parámetro y genere su factorial.
function factorial(n){
    let factorial = n*(n - 1)*(n - 2)*2*1

    return factorial;
}
console.log(factorial(`5`))