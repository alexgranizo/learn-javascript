//definimos una variable a la cual le asignamos una función
const buildCount = (i)=>{ //i tiene como valor 1 en el scope global
    let count = i; // definimos una variable en el scope local que tiene como valor 1
    const displayCount = () => { //definimos una función displaycount en la que sumamos count en 1
        console.log(count++); // esta función suma el valor y lo almacena es lo que llamamos closure
    }
    return displayCount;
}

const myCount = buildCount(1);// definimos una variable en el contexto de ejecución global y le asignamos una función;
myCount(); //la primera ejecución da 1
myCount(); //la segunda da 2 porque el closure guardo el valor de la variable anterior
myCount(); // 3
