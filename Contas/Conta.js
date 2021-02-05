//Classe Abstrata
export class Conta{
    constructor(saldoInicial,cliente,agencia){
        //Class abstratas, vc lança um erro e impede do sistema continuar
        if (this.constructor == Conta){
            throw new Error('Você não deveria instanciar um objeto do tipo conta');
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

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
    

     //Metodo abstrato, feito para ser sobreescrito
     sacar(valor) {
       throw new Error("O método sacar da conta é abstrato");
    }

    _sacar(taxa, valor){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
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
}