const socket = io();
import { atualizarTexto } from "./documento.js";

export function selecionaDocumento(nomeDocumento) {
  socket.emit("selecionar_documento", nomeDocumento, (texto) => {
    atualizarTexto(texto);
  });
}

export function excluirDocumento(nomeDocumento) {
  socket.emit("excluir_documento", nomeDocumento);
}

export function textoRecebido() {
  socket.on("atualizar_texto", (texto) => {
    atualizarTexto(texto);
  });
}

export function editarTexto(texto, nomeDocumento) {
  socket.emit("editar_texto", {
    texto: texto.value,
    nomeDocumento: nomeDocumento,
  });
}
