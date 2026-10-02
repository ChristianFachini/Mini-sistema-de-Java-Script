const prompt = require("prompt-sync")();

let livros = [];

function cadastrarLivros(){

    console.log("-----------------------------------");

    let titulo = prompt("Digite o titulo do livro: ");
    let autor = prompt("Digite o autor do livro: ");
    let ano = Number(prompt("Digite o ano do livro: "));

    console.log("-----------------------------------");

    let livro = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        disponivel: true
    };

    livros.push(livro);

    console.log("Livro cadastrado com sucesso!");
}

function listarLivros(){

    if(livros.length === 0){
        console.log("-----------------------------------");
        console.log("Nenhum livro cadastrado!");
        return;
    }

    for(let livro of livros){

        console.log("-----------------------------------");
        console.log("Titulo: " + livro.titulo);
        console.log("Autor: " + livro.autor);
        console.log("Ano: " + livro.ano);
        console.log("Disponivel: " + livro.disponivel);
    }
}

function listarLivrosDisponivel(){

    if(livros.length === 0){
        console.log("-----------------------------------");
        console.log("Nenhum livro cadastrado!");
        return;
    }

    let encontrado = false;

    for(let livro of livros){

        if(livro.disponivel === true){

            console.log("-----------------------------------");
            console.log("Titulo: " + livro.titulo);
            console.log("Autor: " + livro.autor);
            console.log("Ano: " + livro.ano);
            console.log("Disponivel: " + livro.disponivel);

            encontrado = true;
        }
    }

    if(encontrado === false){
        console.log("Nenhum livro está disponível!");
    }
}

function buscarPeloTitulo(){

    console.log("-----------------------------------");

    let buscarTitulo = prompt("Digite o titulo do livro que deseja buscar: ");

    for(let livro of livros){

        if(livro.titulo === buscarTitulo){

            console.log("-----------------------------------");
            console.log("Titulo: " + livro.titulo);
            console.log("Autor: " + livro.autor);
            console.log("Ano: " + livro.ano);
            console.log("Disponivel: " + livro.disponivel);

            return;
        }
    }

    console.log("-----------------------------------");
    console.log("Esse livro não está cadastrado.");
}

function emprestarLivro(){

    let emprestar = prompt("Digite qual livro quer pegar emprestado: ");

    for(let livro of livros){

        if(livro.titulo === emprestar){

            if(livro.disponivel === false){
                console.log("Esse livro já está emprestado.");
                return;
            }

            livro.disponivel = false;

            console.log("Livro emprestado com sucesso!");
            return;
        }
    }

    console.log("Esse livro não está cadastrado.");
}

function devolverLivro(){

    let devolver = prompt("Digite o livro que deseja devolver: ");

    for(let livro of livros){

        if(livro.titulo === devolver){

            if(livro.disponivel === true){
                console.log("Esse livro já está disponível.");
                return;
            }

            livro.disponivel = true;

            console.log("Livro devolvido com sucesso!");
            return;
        }
    }

    console.log("Esse livro não está cadastrado.");
}

let opcao;
let sair;

while(sair !== 1){

    console.log("-------- Sistema Biblioteca -------");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar todos os livros");
    console.log("3 - Listar livros disponíveis");
    console.log("4 - Buscar livro pelo titulo");
    console.log("5 - Emprestar o livro");
    console.log("6 - Devolver o livro");
    console.log("0 - Sair");
    console.log("-----------------------------------");

    opcao = Number(prompt("Digite qual opção: "));

    switch(opcao){

        case 1:
            cadastrarLivros();
        break;

        case 2:
            listarLivros();
        break;

        case 3:
            listarLivrosDisponivel();
        break;

        case 4:
            buscarPeloTitulo();
        break;

        case 5:
            emprestarLivro();
        break;

        case 6:
            devolverLivro();
        break;

        case 0:

            console.log("-- Sair --");
            console.log("1 - Sim");
            console.log("2 - Não");
            console.log("----------");

            sair = Number(prompt("Digite qual opção: "));

        break;

        default:
            console.log("Opção inválida!");
    }
}