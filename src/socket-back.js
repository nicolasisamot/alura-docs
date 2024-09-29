import io from "./server.js";

const documentos = [
  { titulo: "JavaScript", texto: "O que é JavaScript?" },
  { titulo: "Node", texto: "O que é Node?" },
  { titulo: "Socket.io", texto: "O que é Socket.io?" },
];

io.on("connection", (socket) => {
  socket.on("selecionar_documento", (nomeDocumento, callback) => {
    const documento = econtraDocumento(nomeDocumento);
    socket.join(nomeDocumento);
    callback(documento.texto);
  });

  socket.on("editar_texto", (dados) => {
    const documento = econtraDocumento(dados.nomeDocumento);
    documento.texto = dados.texto;
    socket.to(dados.nomeDocumento).emit("atualizar_texto", dados.texto);
  });
});

function econtraDocumento(nomeDocumento) {
  return documentos.find((documento) => {
    return documento.titulo === nomeDocumento;
  });
}
