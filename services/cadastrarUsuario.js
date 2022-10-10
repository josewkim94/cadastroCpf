const bcrypt = require("bcrypt");
//bcrypt.hashSync("texto",20)

const fs = require("fs");

function cadastrarUsuario(pessoa) {
  // console.log(`Olá ${pessoa.nome}`);
  let usuario = {
    id: 123,
    nome: pessoa.nome,
    email: pessoa.email,
    senha: bcrypt.hashSync(pessoa.senha, 20),
    enderecos: [pessoa.endereco],
  };
  console.log(usuario, "aaa");
  const usuarios = require("../databases/usuarios.json");
  usuarios.push(pessoa);
  console.log(usuarios);

  fs.writeFileSync(
    "./databases/usuarios.json",
    JSON.stringify(usuarios, null, 4)
  );
}

let pessoa = {
  nome: "franxico wilson",
  email: "josewkik@gmail.com",
  senha: "123456",
  endereco: "rua das samambaias, 257",
};
cadastrarUsuario(pessoa);
