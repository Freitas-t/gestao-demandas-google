\# Configuração do Looker Studio



Este documento descreve como o \*\*Looker Studio\*\* foi configurado para atuar como camada de visualização e operação do sistema de \*\*Gestão de Demandas\*\*.



O foco é explicar:

\- Estrutura do dashboard

\- Regras de filtragem

\- Controle de acesso

\- Boas práticas aplicadas



---



\## Objetivo do Dashboard



O dashboard tem como objetivo:

\- Exibir apenas demandas relevantes para cada usuário

\- Permitir acompanhamento em tempo real do status das demandas

\- Evitar edição direta de dados sensíveis

\- Servir como ponto único de consulta operacional e gerencial



---



\## Fonte de Dados



\- Fonte principal: \*\*Google Sheets\*\*

\- Atualização: automática, respeitando o intervalo mínimo do Looker Studio

\- A planilha é tratada como \*\*camada de dados\*\*, não como interface de uso



---



\## Estrutura do Dashboard



O dashboard é dividido em seções lógicas:



\### 1. Visão Geral

\- Total de demandas

\- Demandas abertas

\- Demandas encerradas

\- Demandas em andamento



\### 2. Lista de Demandas

Tabela com:

\- Código da demanda

\- Descrição

\- Status

\- Responsável

\- Data de abertura

\- Link de encerramento (quando aplicável)



---



\## Filtros Aplicados



Os filtros são definidos no nível do dashboard e não ficam disponíveis para todos os usuários.



Filtros utilizados:

\- Status da demanda

\- Responsável

\- Período (data de abertura)



\### Regras Importantes

\- Usuários finais \*\*não podem alterar filtros críticos\*\*

\- Filtros sensíveis são configurados diretamente no Looker, não via interface

\- Isso evita acesso indevido ou visualização de demandas fora do escopo



---



\## Controle de Acesso



\### Modo de Visualização

\- Usuários externos acessam o dashboard em \*\*modo leitura\*\*

\- Não há acesso ao menu de edição ou à navegação completa do projeto



\### Compartilhamento

\- O acesso é feito via link publicado ou permissões específicas

\- A planilha base não é compartilhada com usuários finais



---



\## Segurança e Boas Práticas



\- Nenhum dado sensível é exibido diretamente

\- IDs internos e informações operacionais ficam ocultos

\- O usuário interage apenas com:

&nbsp; - Visualização

&nbsp; - Links de ação (ex: encerramento via formulário)



---



\## Interação com Formulários



\- O encerramento de demandas é feito via \*\*Google Forms\*\*

\- O link é exibido como campo clicável no dashboard

\- O usuário nunca edita dados diretamente na planilha



---



\## Atualização de Dados



\- O Looker Studio possui um intervalo mínimo de atualização

\- Alterações feitas via formulário ou script:

&nbsp; - Podem levar alguns minutos para refletir no dashboard

\- Esse comportamento é esperado e documentado para os usuários



---



\## Limitações Conhecidas



\- Atualização não é em tempo real

\- Não é possível forçar refresh imediato via script

\- Essas limitações fazem parte do funcionamento do Looker Studio



---



\## Considerações Finais



O Looker Studio foi configurado como:

\- Camada segura de visualização

\- Interface de acompanhamento e operação

\- Ferramenta de apoio à decisão



Sem permitir que usuários finais interfiram na integridade dos dados.



