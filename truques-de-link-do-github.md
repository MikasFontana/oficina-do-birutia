# Truques de link do GitHub

Trocar uma palavra no endereço de um repositório abre diagramas, wikis, editores e textos prontos para IA. Veja os principais e os cuidados.

Todo repositório do GitHub tem o endereço github.com/dono/projeto. Alguns sites de terceiros usam o mesmo formato: você troca o domínio e mantém o resto. Abaixo, uma seleção. Todos, exceto o editor do próprio GitHub, são serviços independentes, que podem mudar regras, limites ou sair do ar. Na referência consultada foram testados em 16/10/2026; teste de novo antes de contar com eles.

Os exemplos usam n8n-io/n8n, um projeto público.

## A seleção

| Troca | O que oferece | Quem faz |

|---|---|---|

| github.com → gitdiagram.com | Diagrama da arquitetura | Terceiro |

| github.com → gitingest.com | Repositório inteiro em texto para IA | Terceiro |

| github.com → deepwiki.com | Wiki com chat sobre o código | Terceiro |

| github.com → github.dev (ou tecla .) | Editor no navegador | GitHub |

| github.com → github1s.com | Explorador de código somente leitura | Terceiro |

| github.com → gitmcp.io | Servidor MCP do repositório | Terceiro |

| github.com → star-history.com | Histórico de estrelas | Terceiro |

| github.com → stackblitz.com/github | Rodar projetos simples no navegador | Terceiro |

Há ainda trocas parecidas para gerar um texto que descreve o projeto e para ouvir um resumo em áudio. Procure pelos nomes GitReverse e GitPodcast e avalie com cuidado.

## Passo a passo

### 1. Escolha o que quer

Entender um projeto? Diagrama ou wiki. Perguntar à IA sobre o código? Texto para IA. Editar um arquivo? Editor do GitHub.

### 2. Troque o endereço

Exemplo: https://gitdiagram.com/n8n-io/n8n.

### 3. Pergunte à sua IA com o texto gerado

### Pedido: Entender um repositório

```
Abaixo está o conteúdo de um repositório (resumo, pastas e arquivos). Explique em português simples: 1) o que o projeto faz e para quem serve; 2) as cinco pastas ou arquivos mais importantes e o papel de cada um; 3) como rodar na minha máquina, passo a passo; 4) o que eu precisaria mudar para [minha ideia]. Se algo não estiver no texto, diga que não encontrou, sem supor.

[cole o texto]
```

### 4. Para adaptar uma ideia ao seu caso

### Pedido: Versão menor do projeto

```
Quero construir uma versão menor deste projeto para o meu caso: [descreva]. Liste o essencial da primeira versão, o que ficou de fora e por quê, e a forma mais simples de rodar sozinho. Antes de começar, pergunte o que faltar.
```

## Uma combinação para estudar um projeto em 15 minutos

Histórico de estrelas (para ver se o projeto está vivo), diagrama (para ver as partes) e texto para IA (para tirar dúvidas).

## Avisos

Repositório privado: só o editor do GitHub é do próprio GitHub. Nos demais, o código passa pelo servidor de terceiros. Em repositórios de empresa ou de cliente, use apenas com autorização.

Se um site pedir token do GitHub, crie um com o mínimo de permissão e prazo curto, e apague depois.

Diagramas, wikis e resumos são gerados por IA a partir de amostras do código: confira no código.

Respeite a licença do projeto original ao reaproveitar código.

## Checklist final

- [ ] O repositório é público ou eu tenho autorização
- [ ] Não enviei tokens com permissão ampla
- [ ] Conferi no código o que a IA afirmou
## Quem fez

Os serviços citados pertencem aos seus respectivos autores (por exemplo, DeepWiki é da Cognition; o editor github.dev é do GitHub). Curadoria da Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
