//un bloque de codigo esta definido por llaves, es decir, una estructura de control es un bloque de código etc

const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        //var es una asignacion dentro del scope local pero dentro de una funcion
        let fruits2 = 'banana';
        const fruits3 = 'pear';
        //con let y const solo podemos acceder a ellas dentro del bloque en que fueron asignadas
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
    
}
fruits();

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);


const anotherFunction = () => {
    for (let i = 1; i <= 10; i++){
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
};
anotherFunction();