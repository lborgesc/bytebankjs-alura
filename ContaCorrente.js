//Importando os modulos de cliente 
import { Cliente } from "./Cliente.js";

// Criando uma classe, um molde para as minhas propriedades
//Sempre quando começar com letra maiuscula é uma classe
//Já o export é pra mim importar essa classe, para poder usar em outro modulo
export class ContaCorrente {

    //estático vai servir para todas as contas.  
    static numeroDeContas = 0;

    agencia;
    _cliente;

    //Acessor de atribuição de valores
    set cliente(novoValor) {
        //instanceof = operador. Se ele for uma nova instancia de cliente 
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    //Acessor de retorno
    get cliente() {
        return this._cliente;
    }

    _saldo = 0;
    //Pela comunidade _ seria privado, significa pra vc n mexer que ele é privado
    //# serve para privar a propriedade, n pode acessar diretamente(privado de vdd, não mostra no console log nem deixa vc altera)

    //Acessor de retorno
    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;

    }


    //Função ou metodos para saque (parametros)
    sacar(valor) {
        //Palavra chave this
        //This é qualquer conta corrente
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        };
    }


    //Criação de métodos
    depositar(valor) {
        //return e early return
        //verificações do que vc não quer, as alguma for verdadeira vai para a execução daquela função e se todas elas passarem é pq esta do jeito que vc quer, para limpar o codigo pra n ficar mto extenso

        if (valor <= 0) {
            //para a execução da função e retorna 
            return
        }
        this._saldo += valor;
    }


    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }

}