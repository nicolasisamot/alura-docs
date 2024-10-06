import { cadastrarDocumento, pegarDocumentos } from "../db/documentoDB.js";

function eventosPaginaInicial(io, socket) {
  socket.on("obter_documentos", async (callback) => {
    const resultado = await pegarDocumentos();
    callback(resultado);
  });
  socket.on("adicionar_documento", async (nomeDocumento) => {
    const resultado = await cadastrarDocumento(nomeDocumento);

    io.emit("adicionar_novo_documento_interface", nomeDocumento);
  });
}

export default eventosPaginaInicial;
