

const fecha = new Date();

// console.log(fecha)

// console.dir(fecha)

console.log(fecha.getDate())

console.log(fecha.getDay())

console.log(fecha.getMonth())

console.log(fecha.getFullYear())

console.log(fecha.getMinutes())

console.log(fecha.getTime())


/* Posibilidades con fecha */

const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();

const mes = fecha.getMonth() +1;
const dia = fecha.getDate();
const year = fecha.getFullYear();


console.log(`Fecha actual: ${dia}/${mes}/${year}`)
console.log(`Hora actual: ${hora}:${minutos}:${segundos}`)
