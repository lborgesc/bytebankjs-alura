//Ser autenticavel signifca ter o metodo "autenticar"
/*
Ducky Type: muito com em linguagem fracamente tipadas.
Não interessa o tipo dele, me interessa o que aquele objeto consegue fazer,
se ele tem a presença de determinados metodos e propriedades.
*/
export class SistemaAutenticacao {
    static login(autenticavel, senha){
      if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
        return autenticavel.autenticar(senha);
        
      }
        return false;
      }
        
    static ehAutenticavel(autenticavel){
      return 'autenticar' in autenticavel && 
      autenticavel.autenticar instanceof Function
    } 
        
}