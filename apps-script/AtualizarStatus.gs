function atualizarStatusFinalizacao() {
    // Obter as planilhas
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const planilhaPrincipal = spreadsheet.getSheetByName("Respostas ao formulário 1");
    const planilhaFinalizacao = spreadsheet.getSheetByName("Respostas ao formulário 2");

    if (!planilhaPrincipal || !planilhaFinalizacao) {
        Logger.log("Planilhas não encontradas. Verifique os nomes.");
        return;
    }

    const ultimaLinhaFinalizacao = planilhaFinalizacao.getLastRow();
    const codigoColunaFinalizacao = 3; // Coluna do código na Planilha 2
    const statusColunaFinalizacao = 2; // Coluna do status na Planilha 2

    // Obtenha os valores da última resposta no Formulário 2
    const codigoFinalizacao = planilhaFinalizacao.getRange(ultimaLinhaFinalizacao, codigoColunaFinalizacao).getValue();
    const statusFinalizacao = planilhaFinalizacao.getRange(ultimaLinhaFinalizacao, statusColunaFinalizacao).getValue();

    // Verifique se o status no Formulário 2 é "Demanda finalizada"
    if (statusFinalizacao === "Demanda finalizada") {
        const ultimaLinhaPrincipal = planilhaPrincipal.getLastRow();
        const codigoColunaPrincipal = 10; // Coluna do código na Planilha 1
        const statusColunaPrincipal = 12; // Coluna do status na Planilha 1

        // Percorra as linhas da Planilha Principal para encontrar o código correspondente
        for (let i = 2; i <= ultimaLinhaPrincipal; i++) { // Começa na linha 2 para ignorar o cabeçalho
            const codigoAtual = planilhaPrincipal.getRange(i, codigoColunaPrincipal).getValue();

            if (codigoAtual === codigoFinalizacao) {
                // Atualize o status para "Finalizado" na coluna de status
                planilhaPrincipal.getRange(i, statusColunaPrincipal).setValue("Finalizado");
                Logger.log(`Status atualizado para "Finalizado" na linha ${i}`);
                break;
            }
        }
    }
}
