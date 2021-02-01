//Importando os parametros de outro modulo
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";



// Variaves , cirando um novo cliente (new cliente)
//Objetos, instacias de uma classe
//new operador
const cliente1 = new Cliente('Ricardo', 11122233354);
const cliente2 = new Cliente('Lais', 11122233378);


// // Atribuindo valores as propriedades, usando a varievel . a propriedades
// cliente1.nome = 'Ricardo';
// cliente1.cpf = 11122233354;



//declaração da conta corrente
//Criando uma variavel para conta corrente 
const conta1 = new ContaCorrente(101, cliente1);
const conta2 = new ContaCorrente(102, cliente2);


// Para mostrar o atributo static, vc precisa chamar pela classe 
// console.log(ContaCorrente.numeroDeContas);




//deposito na conta do Ricardo
conta1.depositar(300);


let valor = 200;
//transferindo dinheiro 
conta1.transferir(valor, conta2);




console.log(conta2);