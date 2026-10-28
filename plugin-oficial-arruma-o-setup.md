# Plugin oficial que arruma o setup do Claude Code

Um plugin oficial da Anthropic lê o seu projeto e sugere hooks, skills, subagentes e conexões que combinam com ele, sem alterar nada.

O Claude Code Setup é um plugin oficial da Anthropic. Ele examina o seu projeto e recomenda automações que fazem sentido para ele: hooks, skills, subagentes, servidores MCP e comandos. Segundo a página oficial do plugin, ele trabalha em modo de leitura e não altera os seus arquivos. Você decide o que aplicar.

## Passo a passo

### 1. Guarde o estado atual do projeto

Antes de qualquer mudança, salve o trabalho (um commit, se você usa Git, ou uma cópia da pasta). Assim é simples voltar atrás.

### 2. Instale o plugin

Dentro do Claude Code, digite os três comandos, um por vez. Confira na documentação do Claude Code se algum nome mudou.

### Pedido: Comandos de instalação

```
/plugin marketplace add anthropics/claude-plugins-official
/plugin install claude-code-setup@claude-plugins-official
/reload-plugins
```

### 3. Peça a análise

### Pedido: Pedido 1 · só olhar e listar

```
Analise este projeto e recomende automações que combinem com ele: hooks, skills, subagentes e servidores MCP. Não instale nada. Para cada item, explique em uma frase simples por que ele ajudaria.
```

### 4. Aplique uma sugestão por vez

### Pedido: Pedido 2 · aplicar com cuidado

```
Vamos aplicar apenas a sugestão número [N]. Antes de mexer em qualquer arquivo, mostre exatamente o que vai mudar e espere a minha confirmação.
```

### 5. Peça uma olhada em segurança

### Pedido: Pedido 3 · pontos de atenção

```
Com base na análise deste projeto, existe algum risco evidente, como senhas escritas no código, pacotes muito antigos ou permissões abertas demais? Se existir, diga o que você faria para corrigir, sem alterar nada ainda.
```

## Avisos

Sugestão não é ordem. Aplique somente o que você entende.

Servidor MCP dá acesso a outros sistemas. Confira o que cada um pode ler e fazer antes de conectar.

Comandos e nomes podem mudar. Em caso de erro, consulte a página oficial: claude.com/plugins/claude-code-setup.

## Checklist final

- [ ] Salvei o projeto antes de começar
- [ ] Instalei o plugin e recarreguei
- [ ] Li a lista inteira antes de aceitar algo
- [ ] Apliquei uma sugestão por vez
- [ ] Testei o projeto depois de cada mudança
## Quem fez

O plugin é da Anthropic (repositório anthropics/claude-plugins-official, página claude.com/plugins/claude-code-setup). Este guia foi escrito pela Oficina do BirutIA com base na página oficial e no material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
