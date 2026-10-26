import {
  atualizarProjeto,
  buscarProjeto,
  criarProjeto,
  listarProjetos,
  removerProjeto,
} from '../repositories/projetosRepository.js';

const camposObrigatorios = ['publico_alvo', 'tematica_visual'];

function payloadValido(body) {
  return camposObrigatorios.every(
    (campo) => typeof body?.[campo] === 'string' && body[campo].trim() !== '',
  );
}

export async function listar(req, res) {
  const { data, error } = await listarProjetos();
  if (error) return res.status(500).json({ erro: error.message });
  return res.status(200).json(data);
}

export async function buscar(req, res) {
  const { data, error } = await buscarProjeto(req.params.id);
  if (error) return res.status(500).json({ erro: error.message });
  if (!data) return res.status(404).json({ erro: 'Projeto não encontrado.' });
  return res.status(200).json(data);
}

export async function criar(req, res) {
  if (!payloadValido(req.body)) {
    return res.status(400).json({ erro: 'publico_alvo e tematica_visual são obrigatórios.' });
  }

  const { data, error } = await criarProjeto({
    publico_alvo: req.body.publico_alvo,
    tematica_visual: req.body.tematica_visual,
    descricao_livre: req.body.descricao_livre ?? null,
  });

  if (error) return res.status(500).json({ erro: error.message });
  return res
    .status(201)
    .location(`/api/v1/projetos/${data.id}`)
    .json(data);
}

export async function atualizar(req, res) {
  if (!payloadValido(req.body)) {
    return res.status(400).json({ erro: 'publico_alvo e tematica_visual são obrigatórios.' });
  }

  const { data, error } = await atualizarProjeto(req.params.id, {
    publico_alvo: req.body.publico_alvo,
    tematica_visual: req.body.tematica_visual,
    descricao_livre: req.body.descricao_livre ?? null,
  });

  if (error) return res.status(500).json({ erro: error.message });
  if (!data) return res.status(404).json({ erro: 'Projeto não encontrado.' });
  return res.status(200).json(data);
}

export async function remover(req, res) {
  const { error } = await removerProjeto(req.params.id);
  if (error) return res.status(500).json({ erro: error.message });
  return res.status(204).send();
}
