let numero = parseFloat(prompt("Ingrese numero"));
switch (numero % 5 ==0) {
    case true:
        console.log(numero , "es divisible entre 5")
        break;

    default:
        console.log(numero , "no es divisible entre 5")
        break;
}