import io from "./server.js";

io.on("connection", (socket) => {
  //console.log(`Usuário conectado: ${socket.id}`);

  socket.on("selecionar_documento", (nomeDocumento) => {
    socket.join(nomeDocumento);
  });

  socket.on("editar_texto", (dados) => {
    socket.to(dados.nomeDocumento).emit("atualizar_texto", dados.texto);
  });
});
