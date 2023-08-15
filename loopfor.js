//forEach
var a = [10,20,30,40,50,60];

console.log("for()");
for(let valor of a){
    console.log(valor);
}

console.log("forEach()")
a.forEach(valor => console.log(valor));


console.log("forEach() SOMA VALORES")
tot = 0;
a.forEach(valor => {
    tot += valor;
});

console.log(tot);


a.forEach(function(valor, indice, array){
    console.log(array[indice]);
})