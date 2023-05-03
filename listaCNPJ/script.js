// Função para remover uma linha da tabela
function removerLinha(botao) {
	// Obtém a linha correspondente ao botão
	var linha = botao.parentNode.parentNode;
	// Remove a linha do DOM
	linha.parentNode.removeChild(linha);
}