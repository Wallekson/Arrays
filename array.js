var valores = [8,1,7,2,9];

console.log(valores[3]);

    for(var pos = 0 ; pos < valores.length ; pos++){
        console.log("Posicao " + pos + ": " + valores[pos])
    }

    var soma = 0;
    for(var pos = 0 ; pos < valores.length ; pos++){
        soma += valores[pos];
    }

    var media = soma / valores.length;

    console.log("Média: " + media);

    var arr1 = [0,1,2,3,4,5];

    console.log("Array invertidos: " + arr1.reverse());

    var arr2 = [0,1,2,3,4,5];

    console.log("Array transformado em String: " + arr2.join());

    console.log("Array transformado em String: " + arr2.join("|"));
    console.log("Array Primeiro Elemento: " + arr2.shift());
    console.log("Array selecionar posicao: " + arr2.indexOf(2));
    
    var arr3 = [0,1,2,3,4,5];

    console.log("Array acrescentar elemento: " + arr3.push(7));
    console.log("Array remove ultimo Elemento: " + arr3.pop());
    console.log("Array sem o ultimo Elemento: " + arr3);
    
    //CONTINUAÇÃO AULA ARRAY
    
    var ar = [-5,10,15,20,-3,89];

    ar.splice(2,2);

    console.log(ar);

    var nomes = ["Maria", "Joao", "Lucas", "Pedro"];
    console.log(nomes);
    var novos = nomes.splice(1,2,"Luiz", "Ronaldo");
    
    console.log(novos);
    console.log(nomes);

    var pais = ["Brasil", "Argentina", "Colombia"];

    pais.unshift("Uruguai");

    console.log(pais);

    var arrayNomes = [" Guilherme", " Manoel", " Samuel", " Davi", " Joao "];
    console.log(arrayNomes);

    arrayNomes.unshift(" Monica");
    console.log("Adicionado Monica: " + arrayNomes);

    arrayNomes.pop();
    console.log("Romeveu o ultimo nome: " + arrayNomes);

    console.log("Posição do Samuel: " + arrayNomes.indexOf(" Samuel"));

    var novoNome = arrayNomes.splice(2,1, " Emanoel");
    console.log("Trocou Manoel por Emanoel: " + arrayNomes);

    var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
    var gerente = ["Davi", "Manoela"];
    var pessoas1 = pessoa.slice(1,3);

    console.log(pessoa);
    console.log(pessoas1);

    var empresa = pessoa.concat(gerente);

    console.log(empresa);

    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    var primeiroTrimestre = meses.slice(0,3);
    console.log("Primeiro Trimestre: " + primeiroTrimestre);

    var segundoTrimestre = meses.slice(3,6);
    console.log("Segundo Trimestre: " + segundoTrimestre);

    var terceiroTrimestre = meses.slice(6,9);
    console.log("Terceiro Trimestre: " + terceiroTrimestre);

    var quartoTrimestre = meses.slice(9,12);
    console.log("Quarto Trimestre: " + quartoTrimestre);





