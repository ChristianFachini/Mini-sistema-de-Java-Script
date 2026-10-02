const prompt = require("prompt-sync")();

const cardapio = [
    { codigo: 1, nome: "X-Burger", preco: 18 },
    { codigo: 2, nome: "X-Salada", preco: 22 },
    { codigo: 3, nome: "Batata Frita", preco: 15 },
    { codigo: 4, nome: "Refrigerante", preco: 7 }
];

let pedidos = [];

let proximoNumero = 1;


function mostrarCardapio(){

    console.log("---------- CARDÁPIO ----------");

    for(let produto of cardapio){

        console.log("---------------------------------");
        console.log("Código: " + produto.codigo);
        console.log("Nome: " + produto.nome);
        console.log("Preço: R$ " + produto.preco);
    }

    console.log("---------------------------------");
}


function buscarProduto(codigo){

    for(let produto of cardapio){

        if(produto.codigo === codigo){
            return produto;
        }
    }

    return null;
}


function criarPedido(){

    let cliente = prompt("Digite o nome do cliente: ");

    let pedido = {
        numero: proximoNumero,
        cliente: cliente,
        itens: [],
        total: 0
    };

    proximoNumero++;

    let continuar = true;

    while(continuar === true){

        mostrarCardapio();

        let codigo = Number(prompt("Digite o código do produto: "));

        let produto = buscarProduto(codigo);

        if(produto === null){
            console.log("Produto não encontrado!");
            continue;
        }

        let quantidade = Number(
            prompt("Digite a quantidade que você quer: ")
        );

        let subtotal = produto.preco * quantidade;

        let item = {
            produto: produto.nome,
            quantidade: quantidade,
            subtotal: subtotal
        };

        pedido.itens.push(item);

        pedido.total += subtotal;

        console.log("---------------------------------");
        console.log("Produto adicionado!");
        console.log("Produto: " + produto.nome);
        console.log("Quantidade: " + quantidade);
        console.log("Subtotal: R$ " + subtotal);

        console.log("---------------------------------");
        console.log("-- Continuar pedido --");
        console.log("1 - Sim");
        console.log("2 - Não");

        let continuarPedido = Number(
            prompt("Digite qual opção: ")
        );

        if(continuarPedido === 2){
            continuar = false;
        }
    }

    pedidos.push(pedido);

    console.log("---------------------------------");
    console.log("PEDIDO CRIADO COM SUCESSO!");
    console.log("Número: " + pedido.numero);
    console.log("Cliente: " + pedido.cliente);
    console.log("Total: R$ " + pedido.total);
}


function listarPedido(){

    if(pedidos.length === 0){
        console.log("Nenhum pedido cadastrado!");
        return;
    }

    for(let pedido of pedidos){

        console.log("=================================");
        console.log("Número: " + pedido.numero);
        console.log("Cliente: " + pedido.cliente);
        console.log("---------------------------------");

        for(let item of pedido.itens){

            console.log("Produto: " + item.produto);
            console.log("Quantidade: " + item.quantidade);
            console.log("Subtotal: R$ " + item.subtotal);
            console.log("---------------------------------");
        }

        console.log("Total do pedido: R$ " + pedido.total);
    }
}


function buscarPedido(){

    let numeroBuscar = Number(
        prompt("Digite o número do pedido: ")
    );

    for(let pedido of pedidos){

        if(pedido.numero === numeroBuscar){

            console.log("=================================");
            console.log("Número: " + pedido.numero);
            console.log("Cliente: " + pedido.cliente);
            console.log("---------------------------------");

            for(let item of pedido.itens){

                console.log("Produto: " + item.produto);
                console.log("Quantidade: " + item.quantidade);
                console.log("Subtotal: R$ " + item.subtotal);
            }

            console.log("---------------------------------");
            console.log("Total: R$ " + pedido.total);

            return;
        }
    }

    console.log("Pedido não encontrado!");
}


function calcularFaturamento(){

    if(pedidos.length === 0){
        console.log("Nenhum pedido cadastrado!");
        return;
    }

    let faturamento = 0;

    for(let pedido of pedidos){

        faturamento += pedido.total;
    }

    console.log("---------------------------------");
    console.log("Faturamento total: R$ " + faturamento);
}


let opcao;

while(opcao !== 0){

    console.log("");
    console.log("---------- RESTAURANTE ----------");
    console.log("1 - Mostrar cardápio");
    console.log("2 - Criar pedido");
    console.log("3 - Listar pedidos");
    console.log("4 - Buscar pedido pelo número");
    console.log("5 - Mostrar faturamento total");
    console.log("0 - Sair");
    console.log("---------------------------------");

    opcao = Number(prompt("Digite qual opção: "));

    switch(opcao){

        case 1:
            mostrarCardapio();
        break;

        case 2:
            criarPedido();
        break;

        case 3:
            listarPedido();
        break;

        case 4:
            buscarPedido();
        break;

        case 5:
            calcularFaturamento();
        break;

        case 0:
            console.log("Programa encerrado!");
        break;

        default:
            console.log("Opção inválida!");
    }
}