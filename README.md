# Verificar número · Asfit

Página para a seguidora conferir se o número que falou com ela no WhatsApp é da equipe da Agatha Sá.
É a mesma ideia da página de verificação da Aline Senatore
(https://metodoxorugas.com.br/verificar-suporte-geral/), na identidade da Asfit.

## O que mudar

Só o arquivo `numeros-oficiais.js`:

- `NUMEROS_OFICIAIS`: os números da equipe, um por linha, entre aspas simples, com DDD e vírgula no fim.
  Pode escrever do jeito que quiser: `'(21) 99999-9999'`, `'21999999999'` ou `'+55 21 99999-9999'`.
- `NUMERO_DO_SUPORTE`: o WhatsApp do suporte, só números, com 55 e DDD (ex.: `'5521999999999'`). É ele que abre
  no botão "Falar com o suporte". Vazio, o botão some e a página só orienta a bloquear o número.
- `MENSAGEM_PRO_SUPORTE`: o texto que já vem escrito quando a pessoa toca em "Falar com o suporte".

Enquanto a lista estiver vazia, quem verificar vê "Lista em atualização", e nenhum número da equipe aparece
como falso por engano.

## Como a página compara

Ela tira tudo que não é número e o 55 da frente, e compara o DDD com os 8 últimos dígitos. Assim o mesmo celular
bate com ou sem +55 e com ou sem o 9 da frente (o WhatsApp mostra alguns números antigos sem ele). Número com
menos de 10 dígitos pede o DDD antes de verificar.

## Publicar

Site estático, sem build: `index.html`, `numeros-oficiais.js`, `fonts/`, `img/` e `_headers`.
Na Netlify, arrastar a pasta ou ligar este repositório (pasta de publicação = raiz, sem comando de build).
O `_headers` deixa a página fora do Google e faz o `numeros-oficiais.js` nunca ficar velho no cache.

Prévia (lista vazia): https://verificar-asfit.pages.dev

## Conferir depois de pôr os números

Colar um número da lista com +55 (tem que aparecer "Número verificado") e um número qualquer (tem que aparecer
"Número não verificado").
