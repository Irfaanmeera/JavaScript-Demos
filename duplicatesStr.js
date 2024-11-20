const arr = ['Laurence','Jack','Jane','',,,,'Sam','Laurence','Jack','Jane','',null,false,undefined,0,'Sam'];



function removeDuplicates(arr){
    const newArr = [...new Set(arr.filter(Boolean))]
    return newArr;
    }
       


console.log(removeDuplicates(arr))