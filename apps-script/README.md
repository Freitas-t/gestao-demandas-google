\# Automação de Demandas com Google Apps Script



Este projeto implementa uma automação completa de \*\*gestão de demandas\*\* utilizando Google Forms, Google Sheets, Google Apps Script e Looker Studio.



Ele foi desenvolvido para resolver um problema real de operação: controlar a criação, acompanhamento e finalização de demandas de forma segura, rastreável e automatizada, sem intervenção manual.



---



\## 📌 Problema Resolvido



Antes da automação:

\- Demandas eram criadas sem identificador único

\- O controle de status era manual

\- Usuários viam demandas já finalizadas

\- Havia risco de erro humano e retrabalho



Após a automação:

\- Cada demanda recebe um \*\*código único automático (REQ-XXXX)\*\*

\- O status inicial é definido como \*\*Aberto\*\*

\- Usuários só visualizam demandas abertas

\- Demandas finalizadas desaparecem automaticamente da visão do usuário

\- O encerramento ocorre via formulário, sem acesso direto à planilha



---



\## 🧠 Visão Geral da Solução



O fluxo funciona da seguinte forma:



1\. Um usuário envia uma nova demanda via \*\*Formulário 1\*\*

2\. Um script (`onFormSubmit`) é acionado automaticamente

3\. O sistema:

&nbsp;  - Gera um código único para a demanda

&nbsp;  - Define o status como \*\*Aberto\*\*

&nbsp;  - Cria um link automático para encerramento da demanda

4\. O usuário finaliza a demanda via \*\*Formulário 2\*\*

5\. Um segundo script identifica a finalização

6\. O status da demanda é atualizado para \*\*Finalizado\*\*

7\. A demanda deixa de aparecer na visualização do usuário no Looker Studio



---



\## 🗂 Estrutura dos Arquivos



```text

apps-script/

├── Code.gs

├── AtualizarStatus.gs

└── README.md



