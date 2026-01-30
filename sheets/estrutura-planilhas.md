\# Estrutura das Planilhas



Este documento descreve a organização das planilhas utilizadas no projeto de gestão de demandas, incluindo suas responsabilidades, campos principais e regras de uso.



As planilhas atuam como \*\*camada de dados\*\*, sendo consumidas pelo Apps Script e pelo Looker Studio.



---



\## 🧭 Visão Geral



O sistema utiliza duas planilhas principais:



\- Planilha de abertura de demandas

\- Planilha de encerramento de demandas



Cada planilha possui um papel bem definido, evitando sobreposição de responsabilidades.



---



\## 📋 Planilha de Abertura de Demandas  

\*\*(Respostas do Formulário 1)\*\*



Esta planilha armazena todas as demandas criadas no sistema.



\### Responsabilidades

\- Registrar novas solicitações

\- Gerar código único da demanda

\- Manter o status atual da atividade



\### Campos principais

\- Data/Hora da solicitação

\- Informações da demanda (variáveis conforme o tipo)

\- Código da demanda (gerado automaticamente)

\- Status da demanda (`Aberto` / `Finalizado`)

\- Link para formulário de encerramento



\### Regras

\- O código da demanda é gerado automaticamente via script

\- O status inicial é sempre `"Aberto"`

\- Não há edição manual do status



---



\## 📋 Planilha de Encerramento de Demandas  

\*\*(Respostas do Formulário 2)\*\*



Esta planilha registra a finalização das demandas.



\### Responsabilidades

\- Receber o código da demanda

\- Registrar a ação de encerramento

\- Acionar a atualização do status na planilha principal



\### Campos principais

\- Data/Hora do encerramento

\- Status de encerramento

\- Código da demanda encerrada



\### Regras

\- O código é informado pelo usuário

\- O status é padronizado como `"Demanda finalizada"`

\- Não existe vínculo direto entre linhas das planilhas



---



\## 🔗 Relacionamento Entre Planilhas



O relacionamento entre as planilhas ocorre por meio do campo:



\- \*\*Código da demanda\*\*



Esse código funciona como:

\- Identificador único

\- Chave de integração

\- Referência para atualização de status



Não há uso de fórmulas de ligação direta entre planilhas.



---



\## 🧠 Regras de Integridade de Dados



\- Cada código identifica uma única demanda

\- Um código só pode ser finalizado uma vez

\- O status da planilha principal reflete sempre o último estado válido

\- Alterações ocorrem apenas via formulário + script



---



\## 🔐 Considerações de Segurança



\- Usuários não têm acesso direto às planilhas

\- Não há edição manual de status

\- Toda modificação passa por validação automática

\- As planilhas atuam apenas como armazenamento



---



\## 📌 Considerações Finais



A separação entre abertura e encerramento garante:



\- Clareza no fluxo

\- Menor risco de erro

\- Histórico consistente

\- Facilidade de manutenção e auditoria



Essa estrutura permite escalar o sistema sem comprometer a integridade dos dados.



