import {
  excluirDocumento,
  econtraDocumento,
  editarTexto,
} from "../db/documentoDB.js";

function eventosPaginaDocumento(io, socket) {
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
      const resultado = await editarTexto(documento._id, documento);
      socket.to(dados.nomeDocumento).emit("atualizar_texto", dados.texto);
    }
  });
  socket.on("excluir_documento", async (nomeDocumento) => {
    const resultado = await excluirDocumento(nomeDocumento);
    io.emit("documento_excluido_interface", nomeDocumento);
  });
}

export default eventosPaginaDocumento;
