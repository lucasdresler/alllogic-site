# Changelog do Projeto Atlas

Este documento registra, em ordem cronológica, apenas marcos relevantes da evolução do Projeto Atlas.

## 2026-08-28 — Página Sobre

- Implementada a página `/sobre`, complementando a narrativa da Home com quem é a AllLogic, como pensa e como trabalha.
- Criadas oito seções em `src/components/about/`: Hero, Quem Somos, Nossa Forma de Pensar, Mentalidade de Engenharia, Tecnologia para as Pessoas, Experiência Prática, Como Trabalhamos e Encerramento.
- Conteúdo reaproveitado de fontes já homologadas em vez de duplicado: os três projetos próprios e a frase "Cada empresa tem seus próprios desafios e também suas soluções." vieram de `homeContent.portfolio`; o slogan institucional veio de `siteContent.branding.tagline`.
- CTA "Conheça a AllLogic" da Home (bloco CTA final) passou a apontar para uma rota real e funcional.
- Navegação (`navigation.ts`) atualizada com o item "Sobre" apontando para `/sobre`.

## 2026-08-27 — Página de Contato/Diagnóstico

- Implementada a página `/contato`, continuação funcional do bloco Diagnóstico da Home (ADR-0003).
- Criado o formulário de diagnóstico (Empresa, Contato, Tel/Whats, Mensagem), com validação client-side, acessibilidade (labels, `aria-describedby`, `aria-invalid`, foco visível) e estados de inicial/preenchimento/envio/sucesso/erro.
- Criada a camada `src/services/`, com `diagnosisSubmission.ts` como ponto único de envio — sem backend real conectado; o formulário nunca simula sucesso.
- Criado `src/utils/validation.ts` (`isRequired`, `hasMinLength`, `hasMaxLength`, `isValidBrazilianPhone`), primeiras funções implementadas em `src/utils/`.
- CTA "Vamos conversar" da Home (bloco Diagnóstico) passou a apontar para uma rota real e funcional.
- Navegação (`navigation.ts`) atualizada com o item "Contato" apontando para `/contato`.

## 2026-08-26 — Escopo de internacionalização

- Homologado o escopo da primeira versão pública do Atlas: somente Português do Brasil, domínio `alllogic.com.br`, sem subdomínios ou rotas por idioma (ADR-0002).
- Confirmado, por auditoria de código, que nenhuma implementação de i18n existia no repositório — nenhuma remoção de código foi necessária.
- Internacionalização (Inglês, Espanhol) mantida como direção arquitetural futura, documentada e não bloqueante.

## 2026-08-26

- Conteúdo institucional e editorial definitivo da Home integrado em `src/content/site.ts` e `src/content/home.ts` (Hero, Problemas, Método, Diagnóstico, Soluções, Portfólio, CTA final).
- Design System homologado com valores reais de token (paleta azul-marinho/azul elétrico/dourado/branco, espaçamento, raios de borda, sombra) em `src/styles/tokens.css`.
- Identidade visual aplicada aos componentes de seção, navegação e rodapé.
- Correção de duas seções que não renderizavam o campo `description` do respectivo conteúdo (`ProblemsSection`, `MethodSection`).

## 2026-08-03

- Fundação do Projeto Atlas.
- Documentação inicial.
- Homologação do Astro 7.1.6.
- Integração da base Astro.
- Publicação do repositório no GitHub.

As mudanças operacionais e ajustes de menor impacto são rastreados pelo histórico Git.
