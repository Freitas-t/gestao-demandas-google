function onFormSubmit(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow(); // Última linha preenchida
    const codigoColuna = 10; // Número da coluna para o código
    const statusColuna = 12; // Número da coluna "Status"
    const linkColuna = 11; // Número da coluna para o link clicável

    // Verifique se a última linha já possui um código
    const currentCode = sheet.getRange(lastRow, codigoColuna).getValue();
    if (currentCode) {
        return; // Saia da função se o código já existir
    }

    // Gerar um código único
    const prefixo = "REQ-";
    const numero = Utilities.formatString("%04d", lastRow); // Formato com 4 dígitos
    const codigo = prefixo + numero;

    // Insira o código na coluna desejada
    sheet.getRange(lastRow, codigoColuna).setValue(codigo);

    // Preenche o status como "Aberto" para a nova linha
    sheet.getRange(lastRow, statusColuna).setValue("Aberto");

    // Gera o link clicável para a coluna de link
    const linkFormularioBase = "link do formulário";
    const linkFormularioComCodigo = `${linkFormularioBase}&entry.código do formulário=${codigo}&entry.código do formulário=Demanda+finalizada`;

    // Insere o link clicável como texto na célula
    const cellLink = sheet.getRange(lastRow, linkColuna);
    const formula = `=HYPERLINK("${linkFormularioComCodigo}")`;
    cellLink.setFormula(formula);

    // Chama a função para atualizar o status da Planilha 1
    atualizarStatusFinalizacao();
}

function atualizarStatusFinalizacao() {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const planilhaPrincipal = spreadsheet.getSheetByName("Respostas Formulário 1");
    const planilhaFinalizacao = spreadsheet.getSheetByName("Respostas Formulário 2");

    if (!planilhaPrincipal || !planilhaFinalizacao) {
        Logger.log("Planilhas não encontradas. Verifique os nomes.");
        return;
    }

    const ultimaLinhaFinalizacao = planilhaFinalizacao.getLastRow();
    const codigoColunaFinalizacao = 3; // Coluna do código na Planilha 2
    const statusColunaFinalizacao = 2; // Coluna do status na Planilha 2

    const codigoFinalizacao = planilhaFinalizacao.getRange(ultimaLinhaFinalizacao, codigoColunaFinalizacao).getValue();
    const statusFinalizacao = planilhaFinalizacao.getRange(ultimaLinhaFinalizacao, statusColunaFinalizacao).getValue();

    Logger.log(`Última linha da Planilha 2: ${ultimaLinhaFinalizacao}`);
    Logger.log(`Código recebido: ${codigoFinalizacao}`);
    Logger.log(`Status recebido: ${statusFinalizacao}`);

    if (statusFinalizacao === "Demanda finalizada") {
        const ultimaLinhaPrincipal = planilhaPrincipal.getLastRow();
        const codigoColunaPrincipal = 10; // Coluna do código na Planilha 1
        const statusColunaPrincipal = 12; // Coluna do status na Planilha 1

        for (let i = 2; i <= ultimaLinhaPrincipal; i++) { 
            const codigoAtual = planilhaPrincipal.getRange(i, codigoColunaPrincipal).getValue();
            Logger.log(`Código na linha ${i} da Planilha 1: ${codigoAtual}`);

            if (codigoAtual === codigoFinalizacao) {
                planilhaPrincipal.getRange(i, statusColunaPrincipal).setValue("Finalizado");
                Logger.log(`Status atualizado para "Finalizado" na linha ${i}`);
                break;
            }
        }
    } else {
        Logger.log("Status na Planilha 2 não é 'Demanda finalizada'.");
    }
}
