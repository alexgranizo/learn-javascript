//combinacion de una funcion y el ambito lexico en el cual ha sido declarada dicha función

const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money Box: $${saveCoins}`);
}
//no me esta guardando los datos en memoria, es decir no estoy genrando un closure
moneyBox(6);
moneyBox(10);


const moneyBox = ()=>{
    var saveCoins = 0;
    const countCoins = (coins)=>{
        saveCoins += coins;
        console.log(`Money box: $${saveCoins}`);
    }
    return countCoins;
}
let myMoneyBox = moneyBox();

myMoneyBox(1);
myMoneyBox(6);
myMoneyBox(5);