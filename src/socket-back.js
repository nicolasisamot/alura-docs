import io from "./server.js";
import { Documentos } from "./models/documento.js";

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
  socket.on("obter_documentos", async (callback) => {
    const documentos = await Documentos.find().lean();
    callback(documentos);
  });
  socket.on("adicionar_documento", async (nomeDocumento) => {
    await Documentos.create({
      titulo: nomeDocumento,
      texto: `Texto padrão do documento: ${nomeDocumento}.`,
    });

    io.emit("adicionar_novo_documento_interface", nomeDocumento);
  });

  socket.on("excluir_documento", async (nomeDocumento) => {
    await Documentos.deleteOne({ titulo: nomeDocumento });

    io.emit("documento_excluido_interface", nomeDocumento);
  });
});

async function econtraDocumento(nomeDocumento) {
  const resultado = await Documentos.findOne({ titulo: nomeDocumento }).lean();
  return { ...resultado, _id: resultado._id.toString() };
}
