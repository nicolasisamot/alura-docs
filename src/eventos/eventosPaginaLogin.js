import { logar } from "../db/usuarioDb.js";
export default function eventosPaginaLogin(io, socket) {
  socket.on("login", async (dados, callback) => {
    const resultado = await logar(dados);
    if (resultado) {
      socket.emit("login_sucesso");
    } else {
      socket.emit("login_erro");
    }
  });
}
