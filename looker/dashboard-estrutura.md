\# Estrutura do Dashboard – Looker Studio



Este documento descreve a estrutura lógica e funcional do dashboard desenvolvido no Looker Studio para acompanhamento e gestão de demandas.



O foco deste dashboard é \*\*visualização segura, simplicidade operacional e controle de status\*\*, sem permitir manipulação direta dos dados.



---



\## 🧭 Visão Geral



O dashboard foi projetado para atender dois objetivos principais:



\- Acompanhar o fluxo de demandas

\- Permitir que usuários visualizem apenas o que precisam executar



A solução prioriza:

\- Clareza

\- Segurança

\- Baixa fricção operacional



---



\## 🗂 Estrutura de Páginas



O dashboard é dividido logicamente em duas páginas principais:



\### 📊 Página Administrativa

\- Visão completa das demandas

\- Inclui demandas abertas e finalizadas

\- Utilizada para acompanhamento e controle



\### 👤 Página do Usuário

\- Exibe \*\*apenas demandas em aberto\*\*

\- Demandas finalizadas são ocultadas automaticamente

\- Usuário não possui acesso a filtros manuais



---



\## 🔍 Regras de Exibição de Dados



\- Apenas registros com status \*\*"Aberto"\*\* são exibidos na página do usuário

\- Demandas \*\*"Finalizadas"\*\* são excluídas da visualização automaticamente

\- O status é controlado exclusivamente via formulário



Essa lógica garante que:

\- O usuário veja somente o que precisa executar

\- Não haja risco de alteração indevida



---



\## 🧩 Fontes de Dados



\- Fonte principal: Planilha de respostas do Formulário de Abertura

\- Fonte secundária: Planilha de respostas do Formulário de Encerramento



A integração é feita via:

\- Google Sheets como camada de dados

\- Looker Studio como camada de visualização



---



\## 🎛 Controles e Filtros



\- Filtros são configurados internamente

\- Não há filtros visíveis ao usuário final

\- A segmentação ocorre automaticamente com base no status



Isso impede:

\- Manipulação de dados

\- Visualização indevida

\- Erros operacionais



---



\## 🧑‍💻 Experiência do Usuário



O dashboard foi desenhado para:

\- Leitura rápida

\- Baixo esforço cognitivo

\- Acesso direto às demandas pendentes



A interação principal do usuário ocorre fora do dashboard, via formulário de encerramento.



---



\## 🔐 Segurança e Governança



\- Usuários não têm acesso à planilha

\- Não há edição direta de dados

\- O dashboard é publicado em modo leitura

\- O menu lateral de páginas é ocultado para usuários finais



Essas decisões reduzem riscos e aumentam a confiabilidade do sistema.



---



\## 📌 Considerações Finais



O dashboard funciona como uma \*\*interface de consumo\*\*, não de gestão de dados.



Toda a lógica crítica permanece centralizada:

\- Nos formulários

\- Nos scripts

\- Na planilha controladora



Essa separação garante escalabilidade, segurança e manutenção simplificada.



