# Fluxo Oficial de Desenvolvimento da AllLogic

O Fluxo Oficial de Desenvolvimento orienta mudanças relevantes no Projeto Atlas e em iniciativas da AllLogic. Seu objetivo é assegurar que a tecnologia seja construída com entendimento, intenção, qualidade e rastreabilidade.

Este documento descreve o fluxo efetivamente utilizado nas Sprints já executadas do Projeto Atlas, tarefa por tarefa.

## 1. Planejamento da tarefa

Cada tarefa chega com objetivo, regras permanentes e implementações claramente delimitadas antes de qualquer trabalho começar.

## 2. Implementação

Construir somente o que foi especificado na tarefa, respeitando as regras permanentes do projeto e a arquitetura já estabelecida: as camadas de `src/pages`, `src/layouts`, `src/components`, `src/content`, `src/lib`, `src/types`, `src/utils` e `src/styles`, conforme `docs/architecture.md`; e `public/`, destinada a ativos públicos e fora do fluxo de dependências de `src/`.

## 3. Revisão arquitetural

Antes de aplicar a mudança, verificar se ela é compatível com a arquitetura vigente e com os consumidores existentes. Quando uma instrução de tarefa entra em conflito com uma regra permanente (ex.: alterar uma estrutura sem poder alterar quem a consome), o conflito é identificado e reportado explicitamente antes ou junto da implementação — nunca resolvido silenciosamente.

## 4. Homologação técnica

Confirmar que a implementação está de acordo com o que foi pedido e com as regras permanentes da tarefa, incluindo a checagem de que nenhum arquivo fora do escopo autorizado foi tocado.

## 5. Build local

Verificar, na medida do possível dentro do ambiente disponível, se o projeto permanece compilável após a mudança. Quando não há acesso de execução ao ambiente do projeto, essa limitação é comunicada explicitamente, e a verificação real do build fica a cargo de quem tem esse acesso.

## 6. Revisão do Git

Revisar o conjunto de mudanças antes de registrá-las — quais arquivos foram tocados, se a mudança está isolada ao escopo da tarefa, e se a mensagem de commit refletirá com precisão o que foi feito.

## 7. Commit

Registrar a mudança aprovada no controle de versão, com histórico claro e rastreável à tarefa que a originou.

## 8. Push

Publicar o commit no repositório remoto, tornando a mudança disponível para o restante do fluxo (build, deploy, revisão por outras pessoas).

## 9. Continuação imediata da próxima tarefa

Ao concluir uma tarefa e reportar seu resultado, seguir imediatamente para a próxima tarefa da Sprint, sem interromper o fluxo por decisões já cobertas pelas regras permanentes do projeto.

## Princípios Operacionais

- **Não interromper o fluxo sem bloqueio real.** Uma dúvida que pode ser resolvida por uma decisão razoável dentro do escopo já aprovado não deve parar o fluxo; interrupções são reservadas para bloqueios genuínos (informação ausente que não pode ser inferida, conflito entre regras da própria tarefa, risco real à integridade do projeto).
- **Resolver conflitos arquiteturais antes de prosseguir.** Quando duas regras da mesma tarefa (ou uma regra da tarefa e o estado real do código) entram em conflito, o conflito é relatado com transparência antes de qualquer avanço adicional que dependa dele.
- **Manter o projeto sempre compilável.** Nenhuma tarefa deve deixar o projeto propositalmente quebrado sem relatar isso explicitamente; quando uma mudança necessária introduz uma quebra (ex.: por conflito entre regras), isso é comunicado de forma clara, com indicação do que precisa ser corrigido e em qual tarefa futura.
- **Documentar decisões arquiteturais relevantes.** Mudanças estruturais (novas camadas, separação de responsabilidades, remoção de dependências) são refletidas na documentação (`docs/architecture.md`, READMEs de camada) como parte da própria tarefa que as introduz, não como trabalho posterior separado.

> A tecnologia deve trabalhar para as pessoas.
