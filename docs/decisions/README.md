# Decisões Arquiteturais

Este diretório armazenará os ADRs (*Architecture Decision Records*) do Projeto Atlas. Um ADR é o registro de uma decisão arquitetural, incluindo seu contexto, a decisão tomada, suas consequências e referências relevantes.

## Princípios Arquiteturais Permanentes

Os princípios abaixo já estão adotados na arquitetura atual do Projeto Atlas (ver `docs/architecture.md`) e são permanentes: qualquer ADR futuro deve respeitá-los, e uma proposta que os contrarie precisa primeiro justificar e registrar a revisão do próprio princípio, não apenas a mudança pontual.

- **Separação entre conteúdo, configuração e apresentação.** Conteúdo institucional e editorial vive em `src/content`; configuração técnica vive em `src/lib`; apresentação (markup, composição visual) vive em `src/components`, `src/layouts` e `src/pages`. Nenhuma dessas responsabilidades deve ser embutida em outra.
- **Uma única responsabilidade por camada.** Cada camada de `src` (`pages`, `layouts`, `components`, `content`, `lib`, `types`, `utils`, `styles`) tem um propósito único e bem definido. `public/` é a camada de ativos públicos, sem lógica ou código-fonte, e permanece fora do fluxo de dependências de `src`. Uma mudança que faça uma camada assumir responsabilidade de outra deve ser tratada como um problema arquitetural a resolver, não como uma exceção pontual.
- **Uma única fonte de verdade para cada conceito.** Nenhuma informação (institucional, técnica, de navegação) deve existir duplicada em mais de um arquivo; quando duas camadas competem pelo mesmo dado, a duplicação deve ser eliminada e a responsabilidade consolidada em um único lugar.
- **Resolver conflitos arquiteturais antes da implementação.** Quando uma mudança proposta entra em conflito com uma regra ou com um consumidor já existente, o conflito deve ser identificado e resolvido (ou reportado) antes de a implementação prosseguir, nunca depois.
- **Manter o projeto compilável durante toda a evolução.** Cada mudança deve preservar a capacidade do projeto de compilar; quando isso não for possível dentro do escopo de uma única tarefa, a quebra e o caminho de correção devem ser explicitados.
- **Documentar decisões permanentes antes de expandir a arquitetura.** Uma nova camada, um novo padrão estrutural ou uma mudança de responsabilidade entre camadas deve ser documentada (aqui, em `docs/architecture.md`, ou em um ADR próprio) antes de servir de base para expansões adicionais.

## Padrão de nomenclatura

Os ADRs devem utilizar o prefixo `ADR-`, numeração sequencial de quatro dígitos e um título descritivo em minúsculas, separado por hífens:

```text
ADR-0001-adocao-do-astro.md
```

O próximo número disponível deve ser utilizado, sem reutilização de identificadores. Não há ADRs criados neste momento.
