const prompt = require("prompt-sync")();

let alunos = [];


// CADASTRAR ALUNO
function cadastrarAlunos() {

    let nome = prompt("Digite o nome do aluno: ");
    let idade = Number(prompt("Digite a idade do aluno: "));
    let curso = prompt("Digite o curso do aluno: ");
    let nota1 = Number(prompt("Digite a primeira nota do aluno: "));
    let nota2 = Number(prompt("Digite a segunda nota do aluno: "));

    let aluno = {
        nome: nome,
        idade: idade,
        curso: curso,
        nota1: nota1,
        nota2: nota2
    };

    alunos.push(aluno);

    console.log("Aluno cadastrado com sucesso!");
}


// CALCULAR MÉDIA
function calcularMedia(aluno) {
    return (aluno.nota1 + aluno.nota2) / 2;
}


// LISTAR ALUNOS
function listarAluno() {

    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        return;
    }

    for (let aluno of alunos) {

        console.log("------------------------------------");
        console.log("Nome: " + aluno.nome);
        console.log("Curso: " + aluno.curso);
        console.log("Média: " + calcularMedia(aluno));
    }
}


// BUSCAR ALUNO PELO NOME
function buscarPeloNome() {

    let alunoBuscar = prompt("Digite o nome do aluno que deseja buscar: ");

    for (let aluno of alunos) {

        if (alunoBuscar === aluno.nome) {

            console.log("------------------------------------");
            console.log("Aluno foi encontrado!");
            console.log("Nome: " + aluno.nome);
            console.log("Idade: " + aluno.idade);
            console.log("Curso: " + aluno.curso);
            console.log("Nota 1: " + aluno.nota1);
            console.log("Nota 2: " + aluno.nota2);
            console.log("Média: " + calcularMedia(aluno));

            return;
        }
    }

    console.log("Aluno não encontrado.");
}


// MOSTRAR ALUNOS APROVADOS
function alunosAprovados() {

    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        return;
    }

    let encontrou = false;

    for (let aluno of alunos) {

        if (calcularMedia(aluno) >= 7) {

            console.log("------------------------------------");
            console.log("Nome: " + aluno.nome);
            console.log("Curso: " + aluno.curso);
            console.log("Média: " + calcularMedia(aluno));

            encontrou = true;
        }
    }

    if (!encontrou) {
        console.log("Nenhum aluno aprovado.");
    }
}


// MÉDIA GERAL DA TURMA
function mediaGeral() {

    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        return;
    }

    let soma = 0;

    for (let aluno of alunos) {
        soma += calcularMedia(aluno);
    }

    let media = soma / alunos.length;

    console.log("A média geral da turma: " + media);
}


let opcao;

while (opcao !== 0) {

    console.log("\n--------------- MENU --------------");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Buscar aluno pelo nome");
    console.log("4 - Mostrar alunos aprovados");
    console.log("5 - Mostrar média geral da turma");
    console.log("0 - Sair");
    console.log("------------------------------------");

    opcao = Number(prompt("Digite qual opção: "));

    console.log("------------------------------------");

    switch (opcao) {

        case 1:
            cadastrarAlunos();
            break;

        case 2:
            listarAluno();
            break;

        case 3:
            buscarPeloNome();
            break;

        case 4:
            alunosAprovados();
            break;

        case 5:
            mediaGeral();
            break;

        case 0:
            console.log("Programa encerrado.");
            break;

        default:
            console.log("Opção inválida.");
    }
}