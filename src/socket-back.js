import io from "./server.js";
import { Documentos } from "./models/documento.js";
import eventosPaginaDocumento from "./eventos/eventosPaginaDocumento.js";
import eventosPaginaInicial from "./eventos/eventosPaginaInicial.js";
import eventosPaginaCadastro from "./eventos/eventosPaginaCadastro.js";
import eventosPaginaLogin from "./eventos/eventosPaginaLogin.js";

io.on("connection", (socket) => {
  eventosPaginaDocumento(io, socket);
  eventosPaginaInicial(io, socket);
  eventosPaginaCadastro(io, socket);
  eventosPaginaLogin(io, socket);
});
