const socket = io();

const listaDocumentos = document.getElementById("lista-documentos");
const formAdicionaDocumento = document.getElementById(
  "form-adiciona-documento"
);

formAdicionaDocumento.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("input-documento");

  socket.emit("adicionar_documento", input.value);
  input.value = "";
});

socket.emit("obter_documentos", (documentos) => {
  for (const documento of documentos) {
    adicionarDocumento(documento.titulo);
  }
});

socket.on("adicionar_novo_documento_interface", (novoDocumento) => {
  adicionarDocumento(novoDocumento);
});

socket.on("documento_excluido_interface", (nomeDocumento) => {
  console.log("Documento excluido: ");
  const documento = listaDocumentos.querySelector(
    `a[href="documento.html?nome=${nomeDocumento}"]`
  );
  if (documento) {
    documento.remove();
  }
});

function adicionarDocumento(documento) {
  listaDocumentos.innerHTML += `<a
      href="documento.html?nome=${documento}"
      class="list-group-item list-group-item-action"
    >
      ${documento}
    </a>`;
}
