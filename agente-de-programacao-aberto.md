# Agente de programação aberto

O OpenCode é um agente de programação de código aberto que funciona no terminal, com os modelos que você escolher. Veja como começar em modo seguro.

O OpenCode (repositório anomalyco/opencode, licença MIT, muito ativo no GitHub) é um agente de programação de código aberto, comparável em ideia ao Claude Code. Conecta-se a vários provedores de IA ou a modelos gratuitos oferecidos pelo próprio projeto (consulte as condições na documentação). Ele tem dois modos, alternados pela tecla Tab: Plan, que só analisa e propõe, e Build, que altera arquivos.

## Passo a passo

### 1. Instale

Siga o comando atual do site oficial (opencode.ai) ou do README. Há instalador para Mac e Linux e opção por npm.

### Pedido: Instalar por npm

```
npm install -g opencode-ai
```

### 2. Abra dentro do seu projeto

### Pedido: Abrir

```
opencode
```

### 3. Conecte um modelo

Dentro do programa, use /connect e escolha o provedor.

### 4. Deixe-o conhecer o projeto

Use /init para gerar um arquivo com o contexto do projeto.

### 5. Comece pelo modo Plan

### Pedido: Primeira tarefa

```
Explique a estrutura deste projeto e sugira três melhorias, em ordem de importância. Não altere nada.
```

Só depois de aprovar o plano, passe ao modo Build.

## Comandos úteis

/undo e /redo desfazem e refazem mudanças; /share gera um link da conversa (cuidado com o que ela contém).

## Avisos

Faça um commit ou uma cópia do projeto antes de deixar o agente alterar arquivos.

Leia os comandos que ele pedir para executar antes de aprovar.

/share publica a conversa: não use se ela tiver chaves, dados de clientes ou código sigiloso.

Chaves de API ficam fora do repositório.

## Checklist final

- [ ] Salvei o projeto antes
- [ ] Comecei pelo modo Plan
- [ ] Revisei as alterações do modo Build
- [ ] Não compartilhei conversas com dados sensíveis
## Quem fez

OpenCode (github.com/anomalyco/opencode). Guia escrito pela Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
