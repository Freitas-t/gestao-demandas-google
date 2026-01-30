\# Formulário de Encerramento de Demanda



Este documento descreve o papel do \*\*Formulário de Encerramento de Demanda\*\* dentro do sistema de automação de demandas.



Este formulário é utilizado exclusivamente para \*\*finalizar demandas existentes\*\*, sem permitir edição direta na planilha de controle.



---



\## 🎯 Objetivo do Formulário



O formulário existe para garantir que:

\- Usuários não tenham acesso direto à planilha

\- O encerramento de demandas seja padronizado

\- O status seja atualizado de forma automática e rastreável

\- O sistema permaneça seguro e auditável



---



\## 🧠 Papel no Fluxo Geral



O formulário é acionado após uma demanda já ter sido criada.



Fluxo resumido:

1\. A demanda é criada via Formulário de Abertura

2\. O sistema gera um código único (ex: `REQ-0036`)

3\. O usuário acessa o formulário de encerramento

4\. O código da demanda é informado (manualmente ou por link pré-preenchido)

5\. O sistema processa a finalização automaticamente



---



\## 🧾 Campos do Formulário (Abstração)



O formulário contém os seguintes campos lógicos:



\- \*\*Código da Demanda\*\*

&nbsp; - Campo obrigatório

&nbsp; - Utilizado como chave de identificação

\- \*\*Status da Demanda\*\*

&nbsp; - Valor padrão: `Demanda finalizada`

&nbsp; - Utilizado para validação do encerramento



> Os identificadores reais dos campos foram omitidos por segurança.



---



\## ✅ Regras de Negócio



\- Apenas demandas com código válido podem ser finalizadas

\- O status só é alterado se o valor recebido for exatamente:

&nbsp; - `Demanda finalizada`

\- Demandas inexistentes são ignoradas

\- Não há reabertura automática de demandas finalizadas



---



\## 🔄 Integração com Google Apps Script



As respostas deste formulário alimentam uma planilha intermediária.



Um script automatizado:

\- Lê a última resposta enviada

\- Identifica o código da demanda

\- Localiza a demanda correspondente na planilha principal

\- Atualiza o status para \*\*Finalizado\*\*



Nenhuma ação manual é necessária.



---



\## 📊 Impacto na Visualização (Looker Studio)



Após o encerramento:

\- A demanda deixa de aparecer na visão do usuário

\- Apenas demandas com status \*\*Aberto\*\* permanecem visíveis

\- A atualização ocorre conforme o intervalo de atualização da fonte de dados



---



\## 🔐 Segurança e Restrições



\- Usuários não possuem acesso direto à planilha

\- O formulário não permite listagem de demandas

\- Nenhuma informação sensível é exibida

\- URLs reais e IDs de campos não estão incluídos neste repositório



---



\## 📌 Observações Finais



Este formulário é uma peça fundamental para garantir:

\- Integridade dos dados

\- Segurança operacional

\- Escalabilidade do processo



Ele foi projetado para funcionar como uma \*\*interface segura de encerramento\*\*, desacoplada da base de dados principal.



