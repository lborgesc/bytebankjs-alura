// Criando uma classe, um molde para as minhas propriedades
//Sempre quando começar com letra maiuscula é uma classe
//Já o export é pra mim importar essa classe, para poder usar em outro modulo
export class Cliente {

    // Propriedades
    nome;
    _cpf;

    //Acessor apenas de retorno, não deixando alterar

    get cpf() {
        return this._cpf;
    }

    //Funcão especial de construção, q vai deixar permirtir a gente atribuir valor na construção, sem dar problemas com o get 

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}


//npn init no terminal, inicia o package.json