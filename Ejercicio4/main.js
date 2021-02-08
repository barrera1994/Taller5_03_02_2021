let array=[];
for (let i = 0; i < 2; i++) {
    array[i]=parseInt(prompt(`ingrese el numero ${i+1}:`));
}

console.log("array con los numeros ingresados sin ordenar");
for (let i = 0; i < array.length; i++) {
  console.log(`${array[i]}`);
}
array.sort();
console.log("array con los numeros ordenados");
for (let i = 0; i < array.length; i++) {
  console.log(`${array[i]}`);
}