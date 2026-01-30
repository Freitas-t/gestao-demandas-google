\# Arquitetura do Projeto – Gestão de Demandas Google



Este documento descreve a arquitetura geral do sistema de \*\*Gestão de Demandas\*\*, detalhando os componentes envolvidos, suas responsabilidades e como eles se comunicam entre si.



---



\## Visão Geral



O projeto utiliza ferramentas do ecossistema Google para criar um fluxo integrado de abertura, acompanhamento e encerramento de demandas, com visualização centralizada em dashboard.



\*\*Ferramentas principais:\*\*

\- Google Forms

\- Google Sheets

\- Google Apps Script

\- Looker Studio



---



\## Componentes da Arquitetura



\### 1. Google Forms



Existem dois formulários principais:



\- \*\*Formulário de Abertura\*\*

&nbsp; - Responsável por registrar novas demandas

&nbsp; - Coleta informações como solicitante, tipo de demanda, descrição e prioridade



\- \*\*Formulário de Finalização\*\*

&nbsp; - Utilizado para encerrar demandas existentes

&nbsp; - Captura status final, responsável e observações de encerramento



Os formulários alimentam automaticamente as planilhas do Google Sheets.



---



\### 2. Google Sheets (Base de Dados)



As planilhas funcionam como \*\*banco de dados central\*\* do sistema.



Principais abas:

\- Demandas Abertas

\- Demandas Encerradas

\- Controle de Status

\- Apoio / Tabelas auxiliares



Funções principais:

\- Armazenar todos os registros

\- Servir de fonte de dados para o Looker Studio

\- Disparar automações via Apps Script



---



\### 3. Google Apps Script



O Apps Script atua como a \*\*camada de lógica e automação\*\* do projeto.



Responsabilidades:

\- Gerar códigos únicos de demanda

\- Atualizar status automaticamente

\- Mover demandas entre abas (aberta → encerrada)

\- Validar dados enviados pelos formulários

\- Executar ações baseadas em gatilhos (triggers)



Arquivos principais:

\- `gerarCodigo.gs`

\- `atualizarStatus.gs`



---



\### 4. Triggers (Gatilhos)



Os gatilhos do Apps Script são responsáveis por executar funções automaticamente, como:

\- Ao enviar um formulário

\- Ao editar uma planilha

\- Em intervalos de tempo programados



Esses gatilhos garantem que o fluxo funcione sem ações manuais.



---



\### 5. Looker Studio (Dashboard)



O Looker Studio é utilizado para visualização dos dados.



Funções:

\- Exibir volume de demandas

\- Acompanhar status e prazos

\- Filtrar por responsável, período ou tipo

\- Apoiar decisões operacionais e estratégicas



Fonte de dados:

\- Google Sheets (planilhas do projeto)



---



\## Fluxo Geral da Informação



1\. Usuário preenche o \*\*Formulário de Abertura\*\*

2\. Dados são gravados no \*\*Google Sheets\*\*

3\. Apps Script:

&nbsp;  - Gera código da demanda

&nbsp;  - Define status inicial

4\. Dashboard no Looker é atualizado automaticamente

5\. Usuário preenche o \*\*Formulário de Finalização\*\*

6\. Apps Script atualiza status e registra encerramento

7\. Dashboard reflete a demanda como concluída



---



\## Benefícios da Arquitetura



\- Baixo custo (ferramentas Google)

\- Alta automação

\- Fácil manutenção

\- Escalável para novos campos, formulários ou dashboards

\- Pouca dependência de código complexo



---



\## Considerações Finais



Esta arquitetura foi pensada para atender fluxos operacionais reais, priorizando clareza, automação e confiabilidade dos dados, permitindo evolução futura sem reestruturação completa do sistema.



