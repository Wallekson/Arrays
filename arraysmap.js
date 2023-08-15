var numeros = [1,2,3,4,5,6,7,8,9,10];

//map()
var num = numeros.map(function(valor){
    return valor * 2;

});

console.log(num);

var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);


//reduce()
total = 0;
for(var i = 0; i < numeros.length; i++){
    total += numeros[i];

}

console.log(total);

var soma = numeros.reduce(function(total,numero){ // numero referencia cada elemento do array
    return total += numero;
}, 0); //zero esta iniciando total = 0

console.log(soma);




