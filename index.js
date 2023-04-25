/*let numero = prompt("escriba un numero");
let miArray =[]; 
for(let i = 1; i<=numero; i++){
  miArray.push(i*2)
}
console.log(miArray);
let comparador = 0;
let numeros = [ 1, 2, 11, 4, 5, 6, 15, 8, 9, 10 ]
for(let indice = 0; indice<numeros.length;indice++){
  if(numeros[indice]>comparador){
    comparador =numeros[indice];
  }
}
console.log("el numero mas grande del arreglo es "+comparador)

let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let numero = parseInt(prompt("ingrese un numero entre el 1 y 7"));
let definirDia = function(){
  while(numero>7 || numero<1 ||!Number.isInteger(numero)){
     numero = parseInt(prompt("ingrese un numero entre el 1 y 7"));
  }
  numero = numero-1;
 alert("El día seleccionado = "+ dias[numero]);
}
definirDia();
*/
let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100 ];
let encontrado = false;
let posicion = null;
let buscarNumero = function(){
  let numero = parseInt(prompt("ingrese un numero "));
  while(!Number.isInteger(numero)){
    numero = parseInt(prompt("ingrese un numero "));
 }
 for(let i = 0; i < numeros.length; i++){
  if(numero===numeros[i]){
    encontrado= true;
    posicion = i;
  }
}
if(encontrado){
  alert("numero "+numero+" encontrado"+ "y su posicion es "+ posicion)
}else{
  alert("numero no encontrado")
}
}
buscarNumero();
/*
let numeros = [ 45, 31, 75, 66, 58, 57, 36, 59, 96, 24 ];
console.log(numeros);
numeros.sort();
console.log(numeros);
*/