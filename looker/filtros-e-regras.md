\# Filtros e Regras de Exibição



Este documento descreve as regras de filtragem e exibição de dados aplicadas no dashboard do Looker Studio.



O objetivo é garantir \*\*segurança, simplicidade de uso e integridade das informações\*\*, evitando qualquer tipo de manipulação indevida por usuários finais.



---



\## 🧠 Princípios de Filtragem



A estratégia de filtragem do projeto segue três princípios:



\- Automação total das regras

\- Nenhuma dependência de ação do usuário

\- Centralização da lógica no sistema



O usuário não decide o que filtrar. O sistema decide por ele.



---



\## 🔎 Tipos de Filtros Utilizados



\### Filtros de Status

\- Baseados no campo `Status` da planilha

\- Controlam quais registros são exibidos em cada página



\### Filtros de Página

\- Aplicados diretamente na página do Looker

\- Não são visíveis nem editáveis pelo usuário



\### Filtros Implícitos

\- Definidos na configuração da fonte de dados

\- Garantem que certos registros nunca sejam exibidos em contextos indevidos



---



\## 📄 Regras por Página



\### Página do Usuário



\- Exibe apenas registros com status \*\*"Aberto"\*\*

\- Registros \*\*"Finalizado"\*\* são automaticamente excluídos

\- Não possui filtros visíveis

\- Usuário não pode alterar visualização



\### Página Administrativa



\- Exibe todos os registros

\- Inclui demandas abertas e finalizadas

\- Permite análise de histórico e acompanhamento



---



\## 🔄 Regras de Status



\- O status inicial de toda demanda é \*\*"Aberto"\*\*

\- O status só pode ser alterado via formulário de encerramento

\- Não existe edição manual do status na planilha

\- O dashboard reflete automaticamente o status atual



---



\## 🚫 Restrições ao Usuário Final



O usuário:



\- Não vê filtros

\- Não altera critérios

\- Não edita dados

\- Não acessa a planilha

\- Não vê demandas finalizadas



Essas restrições são intencionais e fazem parte do desenho de segurança do sistema.



---



\## ✅ Benefícios da Abordagem



\- Redução de erros humanos

\- Prevenção de manipulação de dados

\- Interface simples e objetiva

\- Controle total da lógica de exibição

\- Facilidade de manutenção



---



\## 📌 Considerações Finais



A combinação de filtros automáticos e ausência de controles manuais garante que o dashboard funcione como uma \*\*interface de execução\*\*, e não como uma ferramenta de exploração de dados.



Isso torna o sistema seguro, escalável e adequado para ambientes com múltiplos usuários.



