import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import { connect } from "./dbConnect.js";
import mongoose from "mongoose";
import { Documentos } from "./models/documento.js";

const db = connect();

// Documentos.find({})
//   .then((docs) => console.log(docs))
//   .catch((err) => console.log(err));

const app = express();
const PORT = process.env.PORT || 3000;
const caminhoArquivoAtual = url.fileURLToPath(import.meta.url); // pega caminho do arquivo atual
const diretorioPublico = path.join(caminhoArquivoAtual, "../../", "public"); // pega caminho da pasta public
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}.`);
});

const io = new Server(servidorHttp, {
  cors: {
    origin: "*",
  },
});

export default io;
