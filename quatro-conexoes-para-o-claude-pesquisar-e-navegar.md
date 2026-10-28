# Quatro conexões para o Claude pesquisar e navegar

Perplexity, Firecrawl, Playwright e Context7: o que cada conexão (MCP) faz, como instalar e um pedido de teste.

MCP é o padrão para ligar ferramentas externas ao Claude. Cada servidor MCP dá uma habilidade nova: pesquisar na web, ler um site, controlar um navegador ou consultar documentação atual. Os comandos abaixo vêm da referência consultada e podem mudar; se algo falhar, confira a documentação oficial de cada projeto.

## Antes de instalar

Instale somente servidores de fonte confiável: um MCP roda no seu computador e acessa o que você liberar. Guarde chaves de API em variáveis de ambiente, nunca em chats ou em arquivos enviados ao GitHub.

## 1. Perplexity: pesquisa com fonte

Exige chave de API do Perplexity (serviço pago por uso).

### Pedido: Instalar

```
export PERPLEXITY_API_KEY="sua_chave"
claude mcp add perplexity --env 'PERPLEXITY_API_KEY=${PERPLEXITY_API_KEY}' -- npx -y @perplexity-ai/mcp-server
```

### Pedido: Teste

```
Use o Perplexity para pesquisar cinco concorrentes de [nicho] no Brasil e traga preço e fonte de cada um.
```

## 2. Firecrawl: ler sites

Login pelo navegador, sem colar chave. Depois, digite /mcp no Claude Code para entrar. Respeite os termos de uso e o robots do site.

### Pedido: Instalar

```
claude mcp add --transport http firecrawl https://mcp.firecrawl.dev/v2/mcp-oauth
```

### Pedido: Teste

```
Use o Firecrawl para ler o site [endereço] e resumir a proposta de valor, os planos e os preços.
```

## 3. Playwright: o Claude usa o navegador

Servidor oficial da Microsoft.

### Pedido: Instalar

```
claude mcp add playwright npx @playwright/mcp@latest
```

### Pedido: Teste

```
Abra [endereço do meu site], teste o formulário de contato com dados fictícios e diga o que não funcionou.
```

## 4. Context7: documentação atualizada

Exige Node.js recente (veja a versão mínima na documentação). Para usar, escreva use context7 ao final do pedido.

### Pedido: Instalar

```
npx ctx7 setup --claude
```

### Pedido: Teste

```
Como configuro rotas no Next.js? use context7
```

## Avisos

Não deixe o Claude entrar em conta bancária, e-mail ou rede social sua. Use dados fictícios e só em site seu ou de teste.

Não faça o Claude coletar nem guardar dados pessoais de terceiros sem base legal (LGPD).

Cada servidor tem custo, limites ou permissões próprias.

## Checklist final

- [ ] Conferi a origem de cada servidor
- [ ] Chaves em variável de ambiente
- [ ] Testei com o pedido de exemplo
- [ ] Removi o que não uso
## Quem fez

Projetos: Perplexity, Firecrawl, Microsoft (Playwright) e Context7, cada um com documentação própria. Guia escrito pela Oficina do BirutIA, com base no material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
