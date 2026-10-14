// ===== NÚMEROS OFICIAIS DA EQUIPE DA AGATHA SÁ / ASFIT =====
// É só este arquivo que muda quando a equipe ganha ou perde um número.
//
// Um número por linha, entre aspas simples e com vírgula no fim. Pode escrever do jeito que quiser:
// '(21) 99999-9999', '21999999999' ou '+55 21 99999-9999' dão no mesmo. O DDD é obrigatório.
// A página também reconhece o número quando a pessoa cola sem o 9 da frente, como o WhatsApp mostra
// em alguns números antigos.
//
// Depois de mudar, publicar a página de novo.

window.NUMEROS_OFICIAIS = [
  '+55 11 98815-6419',   // 14/10/2026, passado pelo Giovani
  '+55 11 94586-0302',   // 14/10/2026, passado pelo Giovani
];

// WhatsApp do suporte, que abre no botão "Falar com o suporte". Com 55 e DDD, só os números.
// Ex.: '5521999999999'. Vazio = o botão some e a página só manda bloquear o número.
window.NUMERO_DO_SUPORTE = '';

// Mensagem que já vem escrita quando a pessoa toca em "Falar com o suporte".
window.MENSAGEM_PRO_SUPORTE = 'Preciso de ajuda sobre a Asfit, por favor…';
