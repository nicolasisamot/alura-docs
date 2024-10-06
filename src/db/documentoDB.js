import { Documentos } from "../models/documento.js";

export async function cadastrarDocumento(nomeDocumento) {
  return await Documentos.create({
    titulo: nomeDocumento,
    texto: `Texto padrão do documento: ${nomeDocumento}.`,
  });
}

export async function pegarDocumentos() {
  return await Documentos.find().lean();
}

export async function excluirDocumento(nomeDocumento) {
  return await Documentos.deleteOne({ titulo: nomeDocumento });
}
export async function econtraDocumento(nomeDocumento) {
  const resultado = await Documentos.findOne({ titulo: nomeDocumento }).lean();
  return { ...resultado, _id: resultado._id.toString() };
}

export async function editarTexto(id, documentoAtualizado) {
  return await Documentos.findByIdAndUpdate(id, documentoAtualizado);
}
