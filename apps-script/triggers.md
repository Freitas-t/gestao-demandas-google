\# Triggers (Gatilhos do Apps Script)



Este documento descreve os gatilhos utilizados no projeto para automatizar ações no Google Apps Script.



Os gatilhos são responsáveis por executar funções automaticamente em resposta a eventos, sem necessidade de intervenção manual.



---



\## 🧭 Visão Geral



O sistema utiliza \*\*gatilhos baseados em envio de formulários\*\* para manter o fluxo de dados automático e consistente.



Não existem gatilhos manuais ou agendados neste projeto.



---



\## ⚙️ Gatilhos Utilizados



\### 📌 onFormSubmit – Formulário de Abertura



\- \*\*Tipo:\*\* Gatilho instalável

\- \*\*Evento:\*\* Envio do formulário de abertura de demanda

\- \*\*Função executada:\*\* `onFormSubmit(e)`

\- \*\*Responsabilidade:\*\*

&nbsp; - Gerar código único da demanda

&nbsp; - Definir status inicial como `"Aberto"`

&nbsp; - Inserir link para encerramento da demanda



---



\### 📌 onFormSubmit – Formulário de Encerramento



\- \*\*Tipo:\*\* Gatilho instalável

\- \*\*Evento:\*\* Envio do formulário de encerramento

\- \*\*Função executada:\*\* `atualizarStatusFinalizacao(e)`

\- \*\*Responsabilidade:\*\*

&nbsp; - Ler o código informado pelo usuário

&nbsp; - Localizar a demanda correspondente

&nbsp; - Atualizar o status para `"Finalizado"`



---



\## 🔄 Fluxo de Execução



1\. Usuário envia o formulário

2\. O gatilho é disparado automaticamente

3\. A função associada é executada

4\. A planilha é atualizada conforme a regra de negócio

5\. O dashboard reflete o novo estado



---



\## 📏 Regras Importantes



\- Os gatilhos são do tipo \*\*instalável\*\*

\- O uso de gatilhos simples não é recomendado neste projeto

\- Cada formulário possui seu próprio gatilho

\- As funções são isoladas por responsabilidade



---



\## ⚠️ Cuidados e Limitações



\- O Apps Script possui limites de execução

\- Execuções simultâneas podem ocorrer em alto volume

\- Alterações nos formulários exigem validação dos gatilhos

\- Exclusão acidental do gatilho interrompe o fluxo



---



\## 📌 Considerações Finais



Os gatilhos são a base da automação do sistema, garantindo que:



\- Nenhuma ação dependa de execução manual

\- O fluxo seja consistente

\- O status reflita sempre a realidade da demanda



A correta configuração dos gatilhos é essencial para o funcionamento do projeto.



