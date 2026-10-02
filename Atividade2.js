const prompt = require("prompt-sync")();

let produtos = []; 

function cadastrarProduto(){


    let codigo = Number(prompt("Digite o código do produto: "));

    for( let produto of produtos){
        if(produto.codigo === codigo){
            console.log("Esse código ja exite");
            return;
        }
    }
    let nome = prompt("Digite o nome do produto: ");
    let preco = Number(prompt("Digite o preco do produto: "));
    let quantidade = Number(prompt("Digite a quantidade do produto: "));

    let produto = {
        codigo: codigo,
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    produtos.push(produto);

    console.log("produto cadastrado com sucesso!");

}

function listarProduto(){
    
    if(produtos.length === 0 ){
    console.log("Nenhum produto cadastrado");
    return;
        
    }

    for(let produto of produtos){
        
        console.log("Código: "+ produto.codigo);
        console.log("Nome: "+ produto.nome);
        console.log("Preço: "+ produto.preco);
        console.log("Quantidade: "+ produto.quantidade);
        console.log("--------------------------------------");

    }
}

function buscarPeloCodigo(){
     
    let buscarCodigo = Number(prompt("Digite qual codigo que voce que buscar: "));

    for(let produto of produtos){
        if(produto.codigo === buscarCodigo){
            console.log("Código: "+ produto.codigo);
            console.log("Nome: "+ produto.nome);
            console.log("Preço: "+ produto.preco);
            console.log("Quantidade: "+ produto.quantidade);
        }
    }
}


function adicionarNoEstoque(){

    let adicionarCodigo = Number(prompt("Digite o código do produto: "));

    console.log("--------------------------------------");

    for(let produto of produtos){

        if(produto.codigo === adicionarCodigo){
            let quantidadeAdicionar = Number(prompt("Digite quantas quantidade que quer adicionar no estoque"));
            
            console.log("--------------------------------------");

            produto.quantidade += quantidadeAdicionar;

            console.log("Estoque atualizado!!");
            console.log("Quantidade adicionada: "+ quantidadeAdicionar);
            console.log("Nova quantidade:"+produto.quantidade);
        
            
        }
    }
}

function retirarNoEstoque(){

    let retirarCodigo = Number(prompt("Digite o código do produto: "));

    console.log("--------------------------------------");

    for(let produto of produtos){
        if(produto.codigo === retirarCodigo){
            let quantidadeRetirar = Number(prompt("Digite a quantas quantidade que quer retirar no estoque: "));

            console.log("--------------------------------------");

            if(quantidadeRetirar > produto.quantidade){
                console.log("Só pode retirar o que tem no estoque");
                return;
            }

            produto.quantidade -= quantidadeRetirar;


            console.log("Estoque atualizado!");
            console.log("Quantidade retirada:" + quantidadeRetirar)
            console.log("Nova quantidade:"+ produto.quantidade);
        }
    }
}


let opcao;

while(opcao !== 0){
 
    console.log("---------- Menu do Estoque -----------");
    console.log("1 - Cadastrar produtos");
    console.log("2 - Listar produtos");
    console.log("3 - Buscar produto pelo codigo");
    console.log("4 - Adicionar estoque");
    console.log("5 - Retirar estoque");
    console.log("6 - mostrar o valor total do estoque");
    console.log("0 - Sair");
    console.log("--------------------------------------");
    opcao = Number(prompt("Digite qual opção: "));
    console.log("--------------------------------------");


    switch(opcao){

        case 1: 
            cadastrarProduto();
        break;

        case 2:
            listarProduto();
        break;

        case 3:
            buscarPeloCodigo();
        break;

        case 4:
            adicionarNoEstoque();
        break;

        case 5:
            retirarNoEstoque();
        break;
        }
}
