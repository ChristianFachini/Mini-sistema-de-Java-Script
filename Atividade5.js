const prompt = require("prompt-sync")();

let movimentacoes = [];
let proximoId = 1;


// Adicionar receita ou despesa
function adicionarMovimentacao(tipo){

    let descricao = prompt("Digite a descrição: ");
    let valor = Number(prompt("Digite o valor: "));

    let movimentacao = {
        id: proximoId,
        descricao: descricao,
        tipo: tipo,
        valor: valor
    };

    proximoId++;

    movimentacoes.push(movimentacao);

    console.log("-----------------------------------");
    console.log("Movimentação cadastrada!");
    console.log("ID: " + movimentacao.id);
    console.log("Descrição: " + movimentacao.descricao);
    console.log("Tipo: " + movimentacao.tipo);
    console.log("Valor: R$ " + movimentacao.valor);
}


// Listar movimentações
function listarMovimentacoes(){

    if(movimentacoes.length === 0){
        console.log("Nenhuma movimentação cadastrada!");
        return;
    }

    for(let movimentacao of movimentacoes){

        console.log("-----------------------------------");
        console.log("ID: " + movimentacao.id);
        console.log("Descrição: " + movimentacao.descricao);
        console.log("Tipo: " + movimentacao.tipo);
        console.log("Valor: R$ " + movimentacao.valor);
    }
}


// Calcular total de receitas
function calcularReceitas(){

    let totalReceitas = 0;

    for(let movimentacao of movimentacoes){

        if(movimentacao.tipo === "receita"){
            totalReceitas += movimentacao.valor;
        }
    }

    return totalReceitas;
}


// Calcular total de despesas
function calcularDespesas(){

    let totalDespesas = 0;

    for(let movimentacao of movimentacoes){

        if(movimentacao.tipo === "despesa"){
            totalDespesas += movimentacao.valor;
        }
    }

    return totalDespesas;
}


// Calcular saldo
function calcularSaldo(){

    let receitas = calcularReceitas();
    let despesas = calcularDespesas();

    let saldo = receitas - despesas;

    return saldo;
}


// Buscar movimentação pelo ID
function buscarMovimentacao(){

    let idBuscar = Number(prompt("Digite o ID da movimentação: "));

    for(let movimentacao of movimentacoes){

        if(movimentacao.id === idBuscar){

            console.log("-----------------------------------");
            console.log("Movimentação encontrada!");
            console.log("ID: " + movimentacao.id);
            console.log("Descrição: " + movimentacao.descricao);
            console.log("Tipo: " + movimentacao.tipo);
            console.log("Valor: R$ " + movimentacao.valor);

            return;
        }
    }

    console.log("Movimentação não encontrada!");
}


// Remover movimentação
function removerMovimentacao(){

    let idRemover = Number(prompt("Digite o ID da movimentação que deseja remover: "));

    for(let i = 0; i < movimentacoes.length; i++){

        if(movimentacoes[i].id === idRemover){

            movimentacoes.splice(i, 1);

            console.log("Movimentação removida com sucesso!");

            return;
        }
    }

    console.log("Movimentação não encontrada!");
}


// Menu
let opcao;

while(opcao !== 0){

    console.log("");
    console.log("====== CONTROLE FINANCEIRO ======");
    console.log("1 - Registrar receita");
    console.log("2 - Registrar despesa");
    console.log("3 - Listar movimentações");
    console.log("4 - Mostrar total de receitas");
    console.log("5 - Mostrar total de despesas");
    console.log("6 - Mostrar saldo");
    console.log("7 - Buscar movimentação pelo ID");
    console.log("8 - Remover movimentação");
    console.log("0 - Sair");
    console.log("=================================");

    opcao = Number(prompt("Digite uma opção: "));

    switch(opcao){

        case 1:
            adicionarMovimentacao("receita");
        break;

        case 2:
            adicionarMovimentacao("despesa");
        break;

        case 3:
            listarMovimentacoes();
        break;

        case 4:
            console.log("Total de receitas: R$ " + calcularReceitas());
        break;

        case 5:
            console.log("Total de despesas: R$ " + calcularDespesas());
        break;

        case 6:
            console.log("Saldo: R$ " + calcularSaldo());
        break;

        case 7:
            buscarMovimentacao();
        break;

        case 8:
            removerMovimentacao();
        break;

        case 0:
            console.log("Programa encerrado!");
        break;

        default:
            console.log("Opção inválida!");
    }
}