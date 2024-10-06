import { cadastrarUsuario } from "../db/usuarioDb.js";

export default function eventosPaginaCadastro(io, socket) {
  socket.on("cadastrar_usuario", async (dados, callback) => {
    const resultado = await cadastrarUsuario(dados);
    //socket.emit("cadastrar_usuario_interface", dados);
  });
}
