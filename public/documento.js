import {
  editaTexto,
  atualizaTexto,
  selecionaDocumento,
  textoDocumento,
} from "./socket-front-documento.js";

const texto = document.getElementById("editor-texto");
const URL = window.location.search;
const PARAMETROS = new URLSearchParams(URL);
const nomeDocumento = PARAMETROS.get("nome");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

selecionaDocumento(nomeDocumento);

texto.addEventListener("keyup", (event) => {
  editaTexto(texto, nomeDocumento);
});

export function atualizarTexto(texto) {
  atualizaTexto(texto);
}

atualizarTexto(texto);

textoDocumento(texto);
