# Homologação de Publicação

## Projeto

Projeto Atlas

## Aplicação

Site institucional da AllLogic

## Ambiente

Hospedagem compartilhada cPanel / Cloudflare

## Status

Homologado

## Data

01/09/2026

## Objetivo

Registrar a validação técnica da publicação do site institucional da AllLogic em ambiente de produção, confirmando que os artefatos estáticos gerados pelo Astro estão sendo entregues corretamente pela hospedagem e pelo domínio público.

A homologação verifica a disponibilidade das rotas, HTTPS, redirecionamentos, navegação interna, recursos públicos e metadados básicos observáveis no ambiente publicado.

## Evidências de Publicação

| Item | Resultado | Observações |
|---|---|---|
| Build Astro | Aprovado | Build estático concluído com 3 páginas geradas. |
| `/` | HTTP 200 | Home publicada e acessível. |
| `/sobre/` | HTTP 200 | Página Sobre publicada e acessível. |
| `/contato/` | HTTP 200 | Página Contato publicada e acessível. |
| `/sobre` | HTTP 301 | Redireciona para `/sobre/`. |
| `/contato` | HTTP 301 | Redireciona para `/contato/`. |
| HTTP → HTTPS | Aprovado | Domínio raiz e `www` redirecionam para HTTPS. |
| `www.alllogic.com.br` | HTTP 200 | Conteúdo publicado e acessível. |
| Certificado TLS | Aprovado | Certificado válido para `alllogic.com.br` e `www.alllogic.com.br`. |
| `favicon.svg` | HTTP 200 | Recurso público disponível. |
| `favicon.ico` | HTTP 200 | Recurso público disponível. |
| Navegação interna | Aprovada | Links para Sobre e Contato encontrados no HTML publicado. |
| Âncoras internas | Aprovadas | `#diagnostico`, `#portfolio` e `#solucoes` possuem destinos correspondentes. |
| Idioma HTML | Aprovado | `lang="pt-BR"`. |

## Metadados Verificados

### Home

- Title: `AllLogic — Tecnologia que trabalha para as pessoas.`
- Description: `A AllLogic transforma necessidades reais de empresas em soluções digitais — com engenharia, clareza e utilidade em cada decisão técnica.`
- H1: `Tecnologia que trabalha para as pessoas.`

### Sobre

- Title: `Sobre a AllLogic — Tecnologia com propósito.`
- Description: `A AllLogic nasceu com a proposta de aproximar tecnologia dos problemas reais das empresas, usando uma mentalidade de engenharia para compreender o cenário antes de propor qualquer solução.`
- H1: `Tecnologia com propósito. Engenharia para resolver problemas.`

### Contato

- Title: `Vamos conversar — AllLogic`
- Description: `Conte-nos sobre sua empresa, o desafio que está enfrentando ou o que gostaria de melhorar. A partir disso, podemos entender o cenário e identificar caminhos possíveis.`
- H1: `Conte-nos sobre sua empresa.`

## Verificações de Segurança e Transporte

O domínio público foi validado por HTTPS utilizando TLS 1.3.

O certificado observado apresenta:

| Item | Valor |
|---|---|
| Subject | `CN=alllogic.com.br` |
| Issuer | Google Trust Services / WE1 |
| Validade observada | Até 23/10/2026 |
| Protocolo | TLS 1.3 |

O tráfego HTTP foi validado com redirecionamento permanente para HTTPS tanto no domínio principal quanto no `www`.

## SEO Técnico

### Validado

- Title individualizado nas três páginas.
- Meta description individualizada nas três páginas.
- H1 presente nas três páginas.
- `lang="pt-BR"` presente.
- Estrutura de navegação entre as páginas funcionando.

### Pendências

| Item | Status | Observação |
|---|---|---|
| Canonical | Pendente | Não há `<link rel="canonical">` atualmente publicado. |
| Sitemap | Pendente | `/sitemap-index.xml` retorna HTTP 404. |
| URL canônica pública | Pendente | A definição entre domínio raiz e `www` deve preceder a implementação definitiva do canonical e sitemap. |

As pendências acima não impedem a publicação atual, mas devem ser tratadas em etapa própria de SEO técnico.

## Resultado

A publicação atual do site institucional da AllLogic foi validada tecnicamente e está operacional em produção.

As rotas públicas principais respondem corretamente, o HTTPS está funcional, os redirecionamentos estão operacionais, os recursos públicos essenciais estão disponíveis e os metadados básicos das páginas estão presentes.

A ausência de canonical e sitemap foi registrada como pendência técnica para etapa posterior, sem alterar a configuração atualmente homologada.

## Decisão

A publicação em hospedagem compartilhada cPanel é considerada adequada para o estado atual do Projeto Atlas, pois o site utiliza saída estática gerada pelo Astro e não depende de execução server-side para seu funcionamento atual.

A infraestrutura deverá ser reavaliada caso o projeto passe a exigir SSR, processamento backend, serviços persistentes ou outras capacidades que ultrapassem o modelo atual de publicação estática.
