Como usar a função Netlify para depoimentos Google Sheets:

1. Faça deploy da pasta 'netlify' como função serverless no Netlify (Netlify Functions).
2. Instale as dependências rodando 'npm install' dentro da pasta 'netlify'.
3. O arquivo 'google-sheet.js' já está pronto para GET (listar depoimentos) e POST (adicionar depoimento).
4. Configure sua função no Netlify para expor a rota '/.netlify/functions/google-sheet'.
5. No frontend, basta fazer fetch para essa rota para ler e gravar depoimentos.

Se precisar de integração React, posso gerar o código para consumir essa API!
