//Importando os modulos de Conta  
import { Conta } from "./Conta.js";

// Criando uma classe, um molde para as minhas propriedades
//Sempre quando começar com letra maiuscula é uma classe
//Já o export é pra mim importar essa classe, para poder usar em outro modulo
export class ContaCorrente extends Conta {
    //extends Conta, estou usando a herança da conta, reutilizando o codigo já existente em outra classe. 


    //estático vai servir para todas as contas.  
    static numeroDeContas = 0;
    
    constructor(cliente, agencia) {
        //Super chama o construtor da class pai, chamando construtor da class Conta 
        super(cliente, agencia);
        //Ela faz referencia a class que estamos extendendo 
        ContaCorrente.numeroDeContas += 1;
    }

    //Sobreescrevendo o comportamente de sacar 
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(taxa, valor)
    }
}