const socket = io();
export function selecionaDocumento(nomeDocumento) {
  socket.emit("selecionar_documento", nomeDocumento);
}

export function editaTexto(texto, nomeDocumento) {
  socket.emit("editar_texto", {
    texto: texto.value,
    nomeDocumento: nomeDocumento,
  });
}

export function atualizaTexto(texto) {
  socket.on("atualizar_texto", (textoAtual) => {
    texto.value = textoAtual;
  });
}
