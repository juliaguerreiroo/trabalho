// Variável de controle que guarda se a fonte está aumentada ou não.
// Começa como "false", ou seja, fonte normal.
let enlarged = false;

function toggleFontSize() {
  // Alterna (adiciona ou remove) a classe 'large-font' no elemento <body>.
  // Se a classe já estiver presente, ela é removida.
  // Se não estiver, ela é adicionada.
  document.body.classList.toggle('large-font');

  // Inverte o valor da variável 'enlarged' para refletir o novo estado.
  // Se antes era false (normal), agora será true (aumentada), e vice-versa.
  enlarged = !enlarged;
}