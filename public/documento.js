import {
  selecionaDocumento,
  editarTexto,
  textoRecebido,
  excluirDocumento,
} from "./socket-front-documento.js";

const texto = document.getElementById("editor-texto");
const URL = window.location.search;
const PARAMETROS = new URLSearchParams(URL);
const nomeDocumento = PARAMETROS.get("nome");
const tituloDocumento = document.getElementById("titulo-documento");
const btnExcluir = document.getElementById("excluir-documento");

btnExcluir.addEventListener("click", (event) => {
  excluirDocumento(nomeDocumento);
  window.location.href = "index.html";
});

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

selecionaDocumento(nomeDocumento);
textoRecebido();

texto.addEventListener("keyup", (event) => {
  editarTexto(texto, nomeDocumento);
});

export function atualizarTexto(novoTexto) {
  texto.value = novoTexto;
}
