import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

export const Usuarios = mongoose.model("usuarios", usuarioSchema);
