// fazer login no mysql pelo prompt de comando = -h localhost -u root -p




create database teste; // cria um banco de dados

show databases; // mostra os bancos de dados

use sistemadecadastro; // entra no banco de dados selecionado.

show tables; // mostra as tabelas.

create table usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
) // cria a tabela 

insert into usuarios(nome, email, idade) values(
    "Rafael",
    "Rafaelarcanjo@gmail.com",
    20
); // insere dados na tavela usuarios.

delete from usuarios where idade = 8; // deleta da tabela usuarios todos os dados ondeidade for igual a 8. 

select * from usuarios; // mostra atabela usuarios inteira.

select * from usuarios where idade = 8; // mostrar na tabela usuarios quem tem idade iguala 8.

update usuarios set nome = "Nome de teste" where nome = "Rafael Arcanjo"; // altera dados na tabela.