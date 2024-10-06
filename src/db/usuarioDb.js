import { Usuarios } from "../models/usuario.js";

export async function cadastrarUsuario(dados) {
  return await Usuarios.create({ usuario: dados.usuario, senha: dados.senha });
}
export async function logar(dados) {
  const resultado = await Usuarios.findOne({ usuario: dados.usuario });
  if (resultado) {
    if (dados.senha === resultado.senha) {
      return true;
    }
  }
  return false;
}
