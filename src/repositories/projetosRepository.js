import { supabase } from '../config/supabaseClient.js';

const tabela = 'projetos_curadoria';

export async function listarProjetos() {
  return supabase.from(tabela).select('*');
}

export async function buscarProjeto(id) {
  return supabase.from(tabela).select('*').eq('id', id).maybeSingle();
}

export async function criarProjeto(dados) {
  return supabase.from(tabela).insert([dados]).select().single();
}

export async function atualizarProjeto(id, dados) {
  return supabase.from(tabela).update(dados).eq('id', id).select().maybeSingle();
}

export async function removerProjeto(id) {
  return supabase.from(tabela).delete().eq('id', id);
}
