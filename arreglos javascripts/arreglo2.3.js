let arreglo7 =[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]
 /*for (let i = 0; i < arreglo7.length; i++) {



    for (let j = 0; j < arreglo7[i].length; j++) {

        let num= arreglo7[i][j]
        if (num % 2 !== 0) {
              console.log(num);
        }
    

      

        
        }

        
    }
   
    
*/

let suma = 0

for (let i = 0; i < arreglo7.length; i++) {

    for (let j = 0; j< arreglo7.length; j++) {

        suma +=arreglo7 [i][j]
           console.log(suma);
    }

 
    

    
}