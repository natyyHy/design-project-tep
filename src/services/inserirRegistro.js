import { supabase } from './supabaseClient.js';

export async function cadastrarNoSupabase(dadosFormulario) {
  try {
    const { data, error } = await supabase
      .from('projetos_curadoria')
      .insert([dadosFormulario])
      .select();

    if (error) throw error;
    return { sucesso: true, dados: data[0] };
  } catch (err) {
    console.error('Erro:', err.message);
    return { sucesso: false, erro: err.message };
  }
}