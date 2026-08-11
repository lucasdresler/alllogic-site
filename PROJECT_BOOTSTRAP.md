# Bootstrap de Agentes de IA — Projeto Atlas

Este é o documento oficial de onboarding para qualquer agente de IA que trabalhe neste repositório, incluindo Codex, ChatGPT, Claude e ferramentas equivalentes.

## Objetivo do Projeto

O Projeto Atlas é o site institucional oficial da AllLogic. Ele comunica os serviços, as competências, a cultura e a visão técnica da empresa por meio de uma experiência rápida, acessível, sustentável e fácil de manter.

O repositório também expressa a forma de trabalho da AllLogic: arquitetura intencional, qualidade de engenharia e foco nas pessoas que usam e mantêm a tecnologia.

## Filosofia

- Pessoas em primeiro lugar.
- Desempenho por padrão.
- Arquitetura antes da implementação.
- Acessibilidade, semântica e responsividade como requisitos de qualidade.
- Responsabilidades claras, baixo acoplamento e manutenção sustentável.
- Evolução segura, documentada e rastreável.
- A tecnologia deve trabalhar para as pessoas.

## Antes de implementar qualquer tarefa

1. Identificar o escopo exato da tarefa e os diretórios afetados.
2. Ler o `README.md` de cada diretório afetado, caso exista, antes de modificar esse diretório.
3. Mapear os arquivos, consumidores e camadas afetados sem fazer alterações durante essa etapa de leitura.
4. Ler apenas a documentação arquitetural relacionada à tarefa, em especial `docs/architecture.md` e os documentos aplicáveis de `docs/` ou `docs/MOA/`.
5. Verificar as mudanças existentes no Git e preservá-las; elas podem pertencer a outro trabalho.
6. Confirmar que a alteração respeita as responsabilidades das camadas, o fluxo de dependências e a fonte única de verdade.
7. Se houver conflito arquitetural, de escopo ou de regras, reportá-lo antes da implementação. Nunca o resolva silenciosamente.

## Regras permanentes

- Nunca modificar arquivos fora do escopo autorizado pela tarefa.
- Nunca criar duplicação de responsabilidades, dados ou regras.
- Nunca quebrar a compilação do projeto.
- Preservar a arquitetura existente e suas regras de dependência.
- Manter a documentação consistente com mudanças arquiteturais ou operacionais aprovadas.
- Não introduzir dependências, camadas, padrões ou complexidade sem necessidade comprovada e decisão documentada.
- Não inserir conteúdo institucional hardcoded em componentes, layouts ou páginas.
- Não misturar conteúdo, configuração técnica, apresentação, roteamento, tipos e utilitários.
- Não alterar, remover ou sobrescrever mudanças pré-existentes que não pertençam à tarefa.
- Reportar conflitos arquiteturais antes de implementar; se uma regra ou consumidor impedir uma mudança correta, não contornar o problema em silêncio.

## Fluxo de desenvolvimento

Seguir o fluxo oficial da AllLogic, detalhado em `docs/MOA/fluxo-desenvolvimento.md`:

1. Planejar e entender a tarefa.
2. Revisar a arquitetura e os consumidores afetados.
3. Implementar somente o escopo aprovado.
4. Homologar tecnicamente o resultado e confirmar que nenhum arquivo externo ao escopo foi tocado.
5. Executar o build local quando o ambiente permitir.
6. Revisar as mudanças no Git.
7. Documentar as decisões e mudanças relevantes.
8. Versionar e publicar somente quando isso fizer parte da autorização recebida.

Para adoção ou atualização de tecnologia relevante, usar também `docs/MOA/fluxo-homologacao.md`: pesquisar a documentação oficial, avaliar em sandbox, homologar, integrar de forma controlada, validar e documentar.

## Arquitetura

O Atlas usa Astro, TypeScript e CSS moderno, com geração estática como estratégia principal. JavaScript no navegador deve ser usado de modo seletivo, apenas quando agregar valor claro à experiência.

As camadas em `src/` têm responsabilidades exclusivas:

| Camada | Responsabilidade |
| --- | --- |
| `src/pages` | Rotas do Astro; compõem layout e componentes. |
| `src/layouts` | Estrutura de documento, metadados e composição compartilhada de página. |
| `src/components` | Apresentação acessível e reutilizável. |
| `src/content` | Conteúdo institucional, editorial e de navegação, sem markup. |
| `src/lib` | Configuração técnica, como URL canônica e SEO. |
| `src/types` | Contratos TypeScript compartilhados, sem valores ou lógica. |
| `src/utils` | Funções puras, sem estado e sem apresentação. |
| `src/styles` | Tokens e estilos globais centralizados. |

Respeitar sempre o fluxo de dependências definido em `docs/architecture.md`: camadas inferiores não podem importar camadas superiores. Em particular, `content`, `lib`, `types` e `utils` não podem depender de `components`, `layouts` ou `pages`.

## Fonte única de verdade

Cada conceito deve ter um único dono. Não copie informações entre arquivos para conveniência local.

- Conteúdo institucional e editorial pertence a `src/content`.
- A cadeia institucional prevista é `FOUNDATION.md` (no repositório `alllogic-sga`) → `src/content/foundation.ts` → `src/content/site.ts` → `src/content/home.ts` → componentes Astro.
- Itens de navegação pertencem exclusivamente a `src/content/navigation.ts`.
- Configuração técnica pertence a `src/lib`.
- Tipos compartilhados pertencem a `src/types`.
- Transformações genéricas, puras e reutilizáveis pertencem a `src/utils`.
- Estrutura visual e markup pertencem a `src/components`, `src/layouts` e `src/pages`, conforme sua responsabilidade.

Quando duas localizações parecerem ser donas da mesma informação, interrompa a implementação e consolide a decisão arquitetural antes de prosseguir.

## Documentação

- `README.md` é a apresentação e referência inicial do projeto.
- `docs/architecture.md` define a direção arquitetural, camadas e dependências.
- `docs/content-architecture.md` governa a estratégia de conteúdo.
- `docs/decisions/` armazena ADRs para decisões arquiteturais relevantes.
- `docs/MOA/` reúne processos operacionais, incluindo desenvolvimento e homologação tecnológica.
- Os `README.md` dos diretórios de `src/` definem a responsabilidade local de cada camada.

Atualize a documentação como parte da própria tarefa quando uma mudança aprovada introduzir ou alterar uma responsabilidade, camada, dependência, decisão arquitetural ou procedimento. Use ADRs conforme a convenção de `docs/decisions/README.md` quando aplicável.

## Build

Utilize as versões de Node.js e do gerenciador de pacotes definidas pelo próprio projeto em `package.json`, `.nvmrc` ou na documentação oficial aplicável. Não fixe versões neste documento, para que ele não fique desatualizado. Os comandos disponíveis são:

```bash
npm run dev
npm run build
npm run preview
```

Antes de concluir uma implementação, execute `npm run build` quando o ambiente permitir e reporte qualquer limitação de execução. A tarefa não está concluída se ela deixar o projeto propositalmente sem compilação, salvo conflito explicitamente reportado e autorizado.

## Estilo de implementação

- Preferir alterações pequenas, coesas e estritamente limitadas ao escopo.
- Reutilizar estruturas existentes antes de criar novas abstrações.
- Criar componentes somente quando houver reuso real ou responsabilidade visual própria; manter seções acopladas a uma jornada de página em `src/components/sections/`.
- Manter páginas curtas e declarativas: escolhem rota, layout, componentes e ordem; não concentram conteúdo ou regras de negócio.
- Manter layouts como molduras de página; eles não são donos de conteúdo institucional ou regras de negócio.
- Usar HTML semântico, navegação por teclado, CSS responsivo e o mínimo necessário de JavaScript no cliente.
- Preservar TypeScript estrito e evitar tipos, dados e lógica sem consumidores justificados.
- Não generalizar prematuramente nem criar configurações, integrações ou dependências antecipadas.

## Resultado esperado

Ao finalizar uma tarefa, o agente deve entregar uma mudança que:

- atende integralmente ao objetivo e ao escopo autorizado;
- preserva a arquitetura, a fonte única de verdade e as responsabilidades existentes;
- não altera arquivos não autorizados;
- mantém o projeto compilável;
- mantém a documentação coerente quando aplicável;
- informa com clareza os arquivos criados e modificados, as validações realizadas e quaisquer limitações ou conflitos encontrados.

Se uma solicitação não puder atender a esses critérios sem violar a arquitetura, o agente deve reportar o conflito antes de implementar.
