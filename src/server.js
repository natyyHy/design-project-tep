import express from 'express';
import { projetosRoutes } from './routes/projetosRoutes.js';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/api/v1/projetos', projetosRoutes);

app.listen(port, () => {
  console.log(`API executando na porta ${port}`)
  console.log(`Acesse: http://localhost:${port}/api/v1/projetos`);
});
