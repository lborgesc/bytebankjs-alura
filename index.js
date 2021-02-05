//Importando os parametros de outro modulo
import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor('Leonidas', 10000, 43964315893);
const gerente = new Gerente('Laís', 8000, 42536514802);
const cliente = new Cliente('Luciana', 42515425874,'456');

diretor.cadastrarSenha('1234');
gerente.cadastrarSenha('789');


const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '789');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '1234');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456');

console.log(gerenteEstaLogado,diretorEstaLogado,);
console.log(clienteEstaLogado);

