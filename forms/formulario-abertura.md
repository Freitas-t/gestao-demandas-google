\# Formulário de Abertura de Demanda



Este documento descreve o \*\*Formulário de Abertura de Demanda\*\*, responsável por iniciar o fluxo do sistema de gestão.



O formulário é o único ponto de entrada de novas demandas no sistema.



---



\## Objetivo



\- Centralizar a criação de novas demandas

\- Padronizar as informações recebidas

\- Evitar criação manual de registros na planilha

\- Garantir integridade e rastreabilidade dos dados



---



\## Tecnologia Utilizada



\- Google Forms

\- Conectado automaticamente ao Google Sheets



---



\## Funcionamento Geral



1\. O usuário preenche o formulário

2\. Uma nova linha é criada na planilha de respostas

3\. Um script do Google Apps Script é acionado automaticamente

4\. O sistema:

&nbsp;  - Gera um código único para a demanda

&nbsp;  - Define o status inicial como \*\*"Aberto"\*\*

&nbsp;  - Prepara a demanda para visualização no Looker Studio



---



\## Informações Coletadas



O formulário coleta apenas informações essenciais, como:



\- Nome ou identificação do solicitante

\- Descrição da demanda

\- Categoria ou tipo de solicitação

\- Prazo ou prioridade (quando aplicável)



> Campos sensíveis ou técnicos não são expostos ao usuário final.



---



\## Regras Aplicadas



\- O usuário não escolhe o status da demanda

\- O código da demanda não é informado manualmente

\- Todas as regras de negócio são aplicadas via script

\- Não há edição posterior via formulário



---



\## Integração com o Sistema



O formulário está integrado a:

\- Google Sheets (armazenamento dos dados)

\- Google Apps Script (automação)

\- Looker Studio (visualização)



---



\## Segurança



\- O formulário não expõe dados internos

\- O acesso é controlado por link ou domínio

\- Usuários não têm acesso à planilha base



---



\## Considerações Finais



O Formulário de Abertura garante:

\- Entrada padronizada de dados

\- Redução de erros manuais

\- Início controlado do fluxo de demandas



Ele funciona como a \*\*porta de entrada\*\* de todo o sistema.



