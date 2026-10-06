import { cadastrarNoSupabase } from './inserirRegistro.js';

async function rodarSmokeTest() {
  console.log('Testando inserção no Supabase...');
  const resultado = await cadastrarNoSupabase({
    publico_alvo: 'Jovens',
    tematica_visual: 'Moderno',
    descricao_livre: 'Teste final para entregar a aula 09'
  });
  console.log('Resultado:', resultado);
}
rodarSmokeTest();