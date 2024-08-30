const form = document.getElementById ('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji sorrindo">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste">'
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima: '));


let linhas = '';

form.addEventListener ('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaLinha();
    mediaCalcula();
    mediaFinal();
})

function adicionaLinha (){
    const nomeAtv = document.getElementById ('name');
    const number = document.getElementById ('number');

    if(atividade.includes(nomeAtv.value)) {
        alert(`A atividade: ${nomeAtv.value} ja foi inserida`);
    } else {
    atividade.push(nomeAtv.value);
    notas.push(parseFloat(number.value));

    let linha = '<tr>';
    linha += `<td> ${nomeAtv. value} </td>`;
    linha += `<td> ${number.value} </td>`; 
    linha += `<td> ${number.value >= notaMinima ? imgAprovado : imgReprovado} </td>`;
    linha += '</tr>';

    linhas += linha;
    }

    nomeAtv.value = '';
    number.value = ''; 
}

function atualizaLinha (){
    const table = document.querySelector ('tbody');
    table.innerHTML = linhas;
}

function mediaFinal (){
    const final = mediaCalcula();
    
    document.getElementById('valorFinal').innerHTML = final;
    document.getElementById('resultadoFinal').innerHTML = final >= notaMinima ? spanAprovado : spanReprovado;
}

function mediaCalcula () {
    let somaNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}

