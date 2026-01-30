\# Sistema de Gestão de Demandas com Google Forms, Apps Script e Looker Studio



Este projeto implementa um sistema automatizado para \*\*abertura, acompanhamento e encerramento de demandas\*\*, utilizando ferramentas do ecossistema Google.



A solução foi projetada para ambientes operacionais, onde usuários precisam \*\*executar tarefas\*\*, mas não devem ter acesso direto aos dados nem à lógica do sistema.



---



\## 🎯 Objetivo do Projeto



\- Centralizar solicitações de demandas

\- Gerar controle por código único

\- Automatizar status de execução

\- Permitir visualização segura no Looker Studio

\- Evitar edição manual e erros operacionais



O foco principal é \*\*governança, simplicidade e segurança\*\*.



---



\## 🧩 Tecnologias Utilizadas



\- \*\*Google Forms\*\* – entrada e encerramento de demandas

\- \*\*Google Sheets\*\* – camada de dados

\- \*\*Google Apps Script\*\* – automação e regras de negócio

\- \*\*Looker Studio\*\* – visualização e acompanhamento



---



\## 🏗 Visão Geral da Arquitetura



O sistema é dividido em quatro camadas bem definidas:



1\. \*\*Entrada\*\*

   - Formulários Google

2\. \*\*Processamento\*\*

   - Google Apps Script

3\. \*\*Armazenamento\*\*

   - Google Sheets

4\. \*\*Visualização\*\*

   - Looker Studio



Toda a lógica crítica permanece fora do dashboard, garantindo segurança e integridade.



---



\## 🔄 Fluxo Geral do Sistema



1\. Usuário abre uma demanda via formulário de abertura

2\. Script:

   - Gera código único da demanda

   - Define status inicial como \*\*Aberto\*\*

3\. A demanda aparece automaticamente no dashboard

4\. Usuário executa a tarefa

5\. Usuário encerra a demanda via formulário de finalização

6\. Script:

   - Localiza o código informado

   - Atualiza o status para \*\*Finalizado\*\*

7\. A demanda deixa de aparecer na visualização do usuário

