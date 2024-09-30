import mongoose from "mongoose";

const documentoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
});

export const Documentos = mongoose.model("documentos", documentoSchema);
