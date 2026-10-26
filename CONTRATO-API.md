# Contrato da API REST

Base: `/api/v1`

| Método | URI | Sucesso | Erros |
| --- | --- | --- | --- |
| POST | `/projetos` | `201 Created`, JSON e header `Location` | `400 Bad Request`, `500 Internal Server Error` |
| GET | `/projetos` | `200 OK`, array JSON | `500 Internal Server Error` |
| GET | `/projetos/:id` | `200 OK`, JSON | `404 Not Found`, `500 Internal Server Error` |
| PUT | `/projetos/:id` | `200 OK`, JSON | `400 Bad Request`, `404 Not Found`, `500 Internal Server Error` |
| DELETE | `/projetos/:id` | `204 No Content`, sem corpo | `500 Internal Server Error` |

## Payload de criação e atualização

```json
{
  "publico_alvo": "Jovens",
  "tematica_visual": "Moderno",
  "descricao_livre": "Identidade visual para aplicativo educacional"
}
```

`publico_alvo` e `tematica_visual` são obrigatórios. Erros de validação usam o formato:

```json
{
  "erro": "publico_alvo e tematica_visual são obrigatórios."
}
```
