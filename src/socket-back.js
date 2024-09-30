import io from "./server.js";
import { Documentos } from "./models/documento.js";

// const documentos = [
//   { titulo: "JavaScript", texto: "O que é JavaScript?" },
//   { titulo: "Node", texto: "O que é Node?" },
//   { titulo: "Socket.io", texto: "O que é Socket.io?" },
// ];

io.on("connection", (socket) => {
  socket.on("selecionar_documento", async (nomeDocumento, callback) => {
    const documento = await econtraDocumento(nomeDocumento);
    if (documento) {
      socket.join(nomeDocumento);
      callback(documento.texto);
    }
  });

  socket.on("editar_texto", async (dados) => {
    const documento = await econtraDocumento(dados.nomeDocumento);
    if (documento) {
      documento.texto = dados.texto;
      await Documentos.findByIdAndUpdate(documento._id, documento);
      socket.to(dados.nomeDocumento).emit("atualizar_texto", dados.texto);
    }
  });
});

async function econtraDocumento(nomeDocumento) {
  const resultado = await Documentos.findOne({ titulo: nomeDocumento }).lean();
  return { ...resultado, _id: resultado._id.toString() };

  // return documentosDB.find((documento) => {
  //   return documento.titulo === nomeDocumento;
  // });
  // return documentos.find((documento) => {
  //   return documento.titulo === nomeDocumento;
  // });
}
