const fruits = () => {
    var fruit = 'apple';
    console.log(fruit)
};

fruits();

//No se puede acceder a esta variable ya que se encuentra dentro de una función y su scope no es global, es local.
console.log(fruit);

const anotherFunction = ()=> {
    var x = 1;
    //en el caso de var, si se sobreescriben los valores por eso es recomendable siempre usar let y consts
    var x = 2;
    let y = 1;
    // let y = 2;
    //las variables declaradas con let o const no se pueden volver a reasignar dentro de un mismo ambito
    console.log(x);
    console.log(y);
}
anotherFunction();
