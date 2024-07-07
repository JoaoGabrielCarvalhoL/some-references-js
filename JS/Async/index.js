"use strict";

//sinc & async


/***
 * Callbacks: Os callbacks são funções que são passadas como argumentos para serem executadas quando uma tarefa assíncrona é concluída.
 *  Essa abordagem permite que o código assíncrono controle o fluxo de execução, chamando o callback apropriado quando a tarefa é finalizada.
 * 
 * Promisses: São objetos que representam a conclusão (ou falha) de uma tarefa assíncrona. 
 *  Elas fornecem uma sintaxe mais limpa e estruturada para lidar com código assíncrono, permitindo encadear chamadas e tratar erros de forma mais eficiente.
 * 
 * Async/Await: É uma forma mais recente e mais legível de lidar com tarefas assíncronas em JS. 
 *  Essa abordagem utiliza as palavras-chaves async e await para indicar funções assíncronas e pausar a execução até que uma Promise seja resolvida.
 * 
 * O conceito de Callbacks está relacionada à programação assíncrona, onde certas operações podem levar tempo apra serem concluídas, como requisições a APIs, manipulação de arquivos ou querys em banco de dados. 
 * Ao invés de esperar que essas operações sejam concluídas antes de continuar a execução do código, as funções de callbacks permitem que o código continue a ser executado, e quando a operçaão assíncrona é finalizada, a função de callback é chamada para lidar com o resultado.
 * 
 * */ 

const order = (order) => {
    return new Promise((resolve, reject) => {
        if (order === "") {
            return reject("Invalid name.");
        }
        setTimeout(() => {
            resolve(`Doing something with ${order}`);
        }, 3000)
    });
}

order("hot-dog").then((response) => {
    console.log(response);
}).catch((exception) => {
    throw new Error("Something is broken in this bomb.")
})

const reserve = async () => {
    try{
        console.log(await order("x-burguer"));
        console.log(await order("pizza"));
        console.log(await order(""));
    } catch(exception) {
        throw new Error("Fail to reserver a order.")
    }
}

reserve();