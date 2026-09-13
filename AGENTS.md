# AGENTS.md — Projeto Atlas / Site Institucional AllLogic

## 1. Objetivo

Este documento contém o contexto, as regras e as decisões operacionais específicas do Projeto Atlas — site institucional da AllLogic. Ele complementa o `~/AllLogic/AGENTS.md`, que contém as regras gerais da AllLogic.

## 2. Identificação do projeto

- Nome: Projeto Atlas.
- Finalidade: site institucional oficial da AllLogic.
- Empresa: AllLogic.
- Descritor institucional: Engenharia de Soluções Digitais.
- Slogan: Tecnologia que trabalha para as pessoas.
- Stack principal: Astro, TypeScript e CSS moderno.
- Estratégia principal: geração estática.
- Interatividade client-side: somente quando trouxer valor claro à experiência.

O site deve representar institucionalmente a AllLogic e comunicar seus serviços, competências, cultura e visão técnica com uma experiência rápida, acessível, sustentável e fácil de manter.


## 3. Hierarquia documental específica do projeto

Para assuntos específicos do site, consultar as fontes na seguinte ordem:

1. Instrução explícita do fundador para a tarefa atual.
2. Documentos institucionais aplicáveis e `SGA/FOUNDATION.md`.
3. Regras gerais de `~/AllLogic/AGENTS.md`.
4. Este `AGENTS.md`, para contexto e regras específicas do site.
5. ADRs aplicáveis em `docs/decisions/`.
6. Demais documentos específicos do projeto (`docs/`, `README.md` e READMEs de camadas).
7. Demais arquivos versionados do projeto.

Este documento registra contexto operacional específico do site e não deve duplicar as regras gerais da AllLogic.

Em caso de conflito, prevalece a fonte de maior autoridade segundo a hierarquia definida no `~/AllLogic/AGENTS.md`.


## 4. Arquitetura

A arquitetura do projeto segue separação clara entre páginas, layouts, componentes, conteúdo, serviços, tipos, utilitários, estilos e arquivos públicos.

Estrutura principal:

- `src/pages/` — páginas e rotas.
- `src/layouts/` — layouts compartilhados.
- `src/components/` — componentes reutilizáveis.
- `src/content/` — conteúdo estruturado do site.
- `src/lib/` — lógica e integrações internas.
- `src/services/` — serviços e integrações externas.
- `src/types/` — tipos TypeScript.
- `src/utils/` — utilitários.
- `src/styles/` — estilos globais e específicos.
- `public/` — arquivos públicos e endpoints publicados.

A arquitetura deve permanecer compatível com a estratégia static-first do projeto e evitar complexidade desnecessária.


## 5. Conteúdo

A primeira versão pública do site utiliza português do Brasil (`pt-BR`).

O conteúdo institucional deve ser baseado em fontes aprovadas da AllLogic e nas decisões registradas no projeto. Não devem ser inventados números, depoimentos, clientes, resultados, imagens, informações institucionais ou outras evidências não fornecidas por fonte autorizada.

A arquitetura de conteúdo deve manter separação entre conteúdo e apresentação sempre que isso estiver previsto pela estrutura atual do projeto.

Alterações de conteúdo institucional ou estratégico que não estejam previamente homologadas devem ser submetidas à aprovação do fundador.


## 6. Design System e identidade visual

A identidade visual do site deve preservar a identidade institucional homologada da AllLogic.

Direção visual do site:
- tecnologia;
- engenharia;
- confiança;
- clareza;
- profissionalismo;
- modernidade;
- tecnologia humana.

Paleta principal atualmente definida:
- `#0A1F44` — azul primário;
- `#061530` — azul primário escuro;
- `#1F6FFF` — azul secundário;
- `#C9A227` — dourado de destaque;
- `#FFFFFF` — branco;
- `#F4F6FA` — superfície;
- `#4A5568` — texto secundário.

Regras visuais:
- não utilizar gradientes como elemento visual padrão;
- evitar sombras excessivas;
- evitar animações decorativas sem finalidade;
- preservar proporções, cores, tipografia e estilo do logotipo oficial;
- priorizar legibilidade, hierarquia visual e consistência.

O Design System documentado em `docs/design-system.md` é a referência específica para tokens e padrões visuais do projeto.

A pasta `imagens/` é um espaço local de trabalho para ativos visuais ainda não homologados para uso no site. Esses arquivos permanecem fora do versionamento e não devem ser publicados ou incorporados ao site sem aprovação explícita.


## 7. Animações e interação

As animações devem ser discretas e ter finalidade funcional ou de orientação visual.

O projeto possui sistema de `scroll reveal` aplicado por meio do atributo `data-scroll-reveal`. A implementação atual observa a posição dos elementos na viewport com `getBoundingClientRect()`, acionada por eventos de `scroll` e `resize` e otimizada com `requestAnimationFrame`.

O sistema deve respeitar `prefers-reduced-motion: reduce`, desabilitando ou reduzindo movimentos quando essa preferência estiver ativa.

Cards de soluções possuem interação visual homologada:
- sombra padrão;
- transição suave;
- ao passar o cursor, fundo de superfície;
- borda dourada de `2px`;
- sombra de hover;
- deslocamento vertical discreto de `2px`.

Não introduzir novas animações ou efeitos apenas por estética sem necessidade definida para a experiência.


## 8. Páginas atualmente implementadas

As páginas atualmente publicadas no site são:

- `/` — página inicial;
- `/sobre/` — Sobre;
- `/contato/` — Contato e Diagnóstico;
- `/dominios-e-hospedagem/` — Domínios e Hospedagem;
- `/politica-de-privacidade/` — Política de Privacidade.

Antes de criar uma nova página ou alterar uma rota existente, consultar a documentação e a arquitetura atuais do projeto.


## 9. Home

A Home é a principal porta de entrada institucional da AllLogic.

O conceito central da comunicação é:

Pessoa → necessidade → tecnologia → solução → mais tempo para o que importa.

O Hero utiliza atualmente uma única chamada principal para ação, direcionada às soluções do site.

A Home apresenta as principais categorias de soluções da AllLogic e deve manter comunicação clara, objetiva e orientada às necessidades do visitante.

Não adicionar imagens, números, depoimentos, cases ou outros elementos sem conteúdo ou fonte homologada.


## 10. Página Sobre

A página `/sobre/` apresenta a AllLogic, sua forma de pensar e sua abordagem de trabalho.

O conteúdo deve permanecer institucional, claro e coerente com as fontes oficiais da empresa.

A página não deve utilizar fotografias, depoimentos, números ou outros elementos de prova que não possuam fonte aprovada.

A seção de processo de trabalho da página Sobre possui conteúdo próprio e não deve ser tratada automaticamente como cópia da seção de método da Home.


## 11. Página Contato e Diagnóstico

A página `/contato/` contém o formulário de diagnóstico utilizado para iniciar o contato com potenciais clientes.

O fluxo do formulário deve validar os dados antes do envio e somente apresentar sucesso quando o endpoint retornar confirmação positiva.

A integração atual utiliza o endpoint:

`public/api/diagnosis.php`

O endereço institucional utilizado para recebimento é:

`contato@alllogiconline.com.br`

A implementação e as decisões da integração devem seguir o ADR-0003 em `docs/decisions/ADR-0003-camada-de-servicos-e-formulario-de-diagnostico.md`.


## 12. Página de Domínios e Hospedagem

A rota `/dominios-e-hospedagem/` faz parte do site institucional e apresenta a solução relacionada a domínios e hospedagem.

Seu conteúdo deve permanecer alinhado ao portfólio oficial da AllLogic e às informações homologadas no SGA.

Não criar preços, características, garantias ou condições comerciais por inferência.


## 13. Página de Política de Privacidade

A rota `/politica-de-privacidade/` está atualmente implementada e publicada.

Alterações em conteúdo jurídico ou relacionado à privacidade devem utilizar fonte apropriada e homologada. O Agente de IA não deve criar obrigações jurídicas, declarações de conformidade ou interpretações legais por inferência.


## 14. Infraestrutura e publicação

O site possui saída estática e sua publicação atual utiliza o ambiente de produção homologado para o Projeto Atlas.

Dados atualmente registrados para o ambiente de produção:

- Domínio: `alllogiconline.com.br`
- Servidor: `177.104.163.165`
- Usuário: `alllogiconline`
- Porta SSH: `21008`
- Aplicação: `/home2/alllogiconline/`
- Publicação: `/home2/alllogiconline/public_html/`
- Backups: `/home2/alllogiconline/backups/`

### Procedimento de publicação

O procedimento de publicação deve:

1. executar o build do projeto;
2. gerar o pacote estático a partir de `dist/`;
3. enviar o pacote ao servidor utilizando SSH na porta `21008`;
4. criar backup da publicação atual antes da substituição;
5. substituir somente os artefatos pertencentes ao novo build;
6. preservar arquivos e diretórios de produção que não façam parte dos artefatos substituídos;
7. extrair o novo build no diretório público;
8. validar as principais páginas e as respostas HTTP;
9. utilizar o backup correspondente para rollback em caso de falha.

O procedimento operacional detalhado deve permanecer documentado no MOA aplicável. Este documento mantém os parâmetros e regras específicos do Site necessários para orientar o Agente de IA.

Não alterar infraestrutura de produção sem seguir o procedimento documentado e o escopo autorizado.

## 15. Git e trabalho no repositório

O projeto é versionado com Git.

Antes de iniciar trabalho no repositório, seguir a regra geral da AllLogic:

1. verificar `git status`;
2. sincronizar com o remoto quando aplicável;
3. verificar novamente o estado antes de alterar arquivos.

Alterações locais existentes devem ser preservadas, salvo quando sua modificação for necessária ao trabalho autorizado.

Não presumir convenções de commits, branches ou tags que não estejam documentadas ou explicitamente definidas para a tarefa.


## 16. Processo de alteração

Alterações no site devem seguir, quando aplicável:

1. entender o objetivo;
2. consultar a documentação existente;
3. verificar decisões e arquitetura atuais;
4. definir a solução;
5. obter aprovação quando a alteração exigir homologação;
6. implementar somente o necessário;
7. validar tecnicamente;
8. atualizar a documentação afetada;
9. versionar com Git;
10. publicar quando aplicável.

Não transformar uma alteração pontual em uma refatoração ou projeto paralelo sem necessidade.

Alterações visuais devem preservar as decisões já homologadas e a identidade da AllLogic.

## 17. Documentação e decisões

A documentação específica do projeto está principalmente em `docs/`.

Documentos relevantes incluem:

- `docs/architecture.md` — arquitetura;
- `docs/content-architecture.md` — arquitetura de conteúdo;
- `docs/design-system.md` — Design System;
- `docs/pages.md` — documentação de páginas;
- `docs/public.md` — conteúdo público;
- `docs/roadmap.md` — roadmap;
- `docs/changelog.md` — histórico de alterações;
- `docs/MOA/` — procedimentos operacionais;
- `docs/decisions/` — decisões arquiteturais registradas em ADRs.

ADRs representam decisões formais do projeto. Antes de alterar uma decisão arquitetural existente, consultar o ADR correspondente.

Quando uma decisão importante for homologada e ainda não estiver registrada, ela deve ser documentada no local apropriado em vez de permanecer somente no conhecimento informal da conversa.

Documentação desatualizada deve ser tratada como documentação a ser revisada, não como autorização para preencher lacunas por inferência.


## 18. Regra de manutenção deste documento

Este documento deve permanecer restrito ao contexto, às regras operacionais e às decisões específicas do Projeto Atlas.

As regras gerais da AllLogic devem permanecer no:

`~/AllLogic/AGENTS.md`

As informações institucionais oficiais devem permanecer nas fontes de autoridade do SGA.

Não duplicar neste documento conteúdo que pertença ao `FOUNDATION.md`, ao SGA ou às regras gerais da raiz.

Quando uma informação específica do site mudar, este documento deve ser atualizado para preservar o contexto necessário para futuras sessões de trabalho.

Toda alteração deve ser baseada em instrução explícita, decisão homologada ou documentação de autoridade.
