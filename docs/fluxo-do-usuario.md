\# Fluxo do Usuário – Gestão de Demandas Google



Este documento descreve o fluxo de uso do sistema de \*\*Gestão de Demandas\*\*, do ponto de vista do usuário final e dos responsáveis pela operação.



O objetivo é deixar claro:

\- Quem usa o sistema

\- Quais ações cada perfil executa

\- Como a demanda percorre o fluxo do início ao fim



---



\## Perfis de Usuário



\### 1. Solicitante

Pessoa que abre uma demanda no sistema.



Responsabilidades:

\- Preencher corretamente o formulário de abertura

\- Acompanhar o status da demanda via dashboard (quando aplicável)



---



\### 2. Responsável / Operacional

Pessoa ou time que executa a demanda.



Responsabilidades:

\- Consultar demandas abertas

\- Atualizar informações necessárias

\- Encerrar a demanda ao final do trabalho



---



\### 3. Gestor / Estratégico

Usuário que acompanha o desempenho geral.



Responsabilidades:

\- Analisar volume de demandas

\- Acompanhar prazos e gargalos

\- Tomar decisões com base nos dados do dashboard



---



\## Fluxo de Abertura de Demanda



1\. O solicitante acessa o \*\*Formulário de Abertura\*\*

2\. Preenche os campos obrigatórios:

&nbsp;  - Tipo de demanda

&nbsp;  - Descrição

&nbsp;  - Prioridade

&nbsp;  - Outras informações relevantes

3\. Envia o formulário



\*\*Resultado:\*\*

\- A demanda é registrada automaticamente no Google Sheets

\- Um código único de demanda é gerado

\- O status inicial é definido como \*Aberta\*



---



\## Fluxo de Acompanhamento



1\. O responsável acessa o \*\*Dashboard no Looker Studio\*\*

2\. Filtra demandas por:

&nbsp;  - Status

&nbsp;  - Responsável

&nbsp;  - Período

3\. Identifica demandas em andamento ou pendentes



O dashboard é atualizado automaticamente conforme os dados da planilha mudam.



---



\## Fluxo de Atualização de Status



1\. O responsável executa a demanda

2\. O status pode ser atualizado automaticamente ou manualmente (dependendo da regra definida)

3\. A planilha reflete a mudança de status



\*\*Exemplos de status:\*\*

\- Aberta

\- Em andamento

\- Aguardando retorno

\- Encerrada



---



\## Fluxo de Encerramento da Demanda



1\. O responsável acessa o \*\*Formulário de Finalização\*\*

2\. Informa:

&nbsp;  - Código da demanda

&nbsp;  - Status final

&nbsp;  - Observações de encerramento

3\. Envia o formulário



\*\*Resultado:\*\*

\- A demanda é movida para a base de demandas encerradas

\- O status é atualizado automaticamente

\- A data de encerramento é registrada

\- O dashboard reflete a conclusão



---



\## Fluxo de Consulta Gerencial



1\. O gestor acessa o \*\*Dashboard\*\*

2\. Analisa indicadores como:

&nbsp;  - Demandas por período

&nbsp;  - Demandas por status

&nbsp;  - Tempo médio de resolução

3\. Utiliza os dados para:

&nbsp;  - Ajustar prioridades

&nbsp;  - Identificar gargalos

&nbsp;  - Planejar melhorias no processo



---



\## Resumo do Fluxo Geral



1\. Abertura da demanda (Formulário)

2\. Registro automático (Planilha)

3\. Processamento e automação (Apps Script)

4\. Visualização e acompanhamento (Dashboard)

5\. Encerramento da demanda (Formulário)

6\. Atualização final e análise (Dashboard)



---



\## Considerações



O fluxo foi desenhado para ser:

\- Simples para o usuário final

\- Automatizado para o time operacional

\- Claro e visual para a gestão



Reduzindo retrabalho, erros manuais e dependência de comunicação paralela.



