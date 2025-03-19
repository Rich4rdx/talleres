let arreglo6 =[ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ]]

//Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for

/*for (let i = 0; i < arreglo6.length; i++) {

    for (let j = 0; j< arreglo6[i].length; j++) {

        for (let x = 0; x < arreglo6.length; x++) {
  
                 console.log(arreglo6[i][j][x]);
        }
        
   
        
    }

    
}*/


//Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach


arreglo6.forEach(i=>{

    i.forEach(j=> {

        j.forEach(x =>{
            console.log(x);
            
        })
    })
})