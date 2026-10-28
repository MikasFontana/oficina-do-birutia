# Servidores MCP grátis para o seu agente

Oito servidores MCP que dão ao agente documentação atual, navegador, banco de dados e mais, com os comandos de instalação e os cuidados de cada um.

Um servidor MCP dá ao agente acesso a uma ferramenta real, em vez de ele responder de memória. Esta lista segue a referência consultada. Os comandos podem mudar com novas versões e alguns serviços têm planos pagos ou exigem chave: confira a página de cada projeto antes de instalar. Comece por poucos, porque cada servidor ocupa espaço de trabalho do agente.

## A lista

- Context7: traz a documentação atual de bibliotecas.
- Playwright MCP: o agente usa um navegador de verdade.
- Firecrawl: lê e pesquisa sites; exige chave (tem plano gratuito).
- Supabase MCP: lê o desenho do banco de dados, escreve consultas e roda migrações. Dá acesso a dados: use em projeto de teste.
- Chrome DevTools: lê erros, rede e desempenho de uma página.
- Stripe MCP: cria produtos, clientes e faturas. Use em modo de teste.
- Desktop Commander: acesso ao terminal e aos arquivos. Revise cada ação antes de aprovar.
- Sequential Thinking: quebra problemas difíceis em passos revisáveis.
## Passo a passo

### 1. Instale o Node.js

Os servidores rodam com npx.

### 2. Rode o comando de cada servidor, fora do Claude Code

Troque os trechos em maiúsculas pelos seus dados.

### Pedido: Comandos de instalação (Claude Code)

```
claude mcp add context7 -- npx -y @upstash/context7-mcp
claude mcp add playwright -- npx @playwright/mcp@latest
claude mcp add firecrawl -e FIRECRAWL_API_KEY=SUA_CHAVE -- npx -y firecrawl-mcp
claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest
claude mcp add sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking
```

Para Supabase, Stripe e Desktop Commander, use os comandos das páginas oficiais, pois exigem token, acesso a dinheiro ou acesso ao seu computador.

### 3. Confira

No Claude Code, digite /mcp para ver os servidores conectados.

### 4. Cursor e Claude Desktop

Eles usam um arquivo de configuração (.cursor/mcp.json no Cursor). Copie o trecho do servidor desejado da documentação dele e apague os que não usar.

## Avisos

Instale somente servidores de fontes conhecidas. Eles rodam no seu computador.

Chaves e tokens ficam em variável de ambiente, nunca em chats ou em arquivos enviados ao GitHub.

Servidores com acesso a terminal, banco de dados ou pagamentos exigem o máximo de cuidado: use contas e projetos de teste e aprove cada ação.

Respeite os termos de uso dos sites que o agente consultar.

## Checklist final

- [ ] Comecei com um ou dois servidores
- [ ] Chaves guardadas com segurança
- [ ] Testei em ambiente de teste
- [ ] Removi o que não uso
## Quem fez

Projetos de Upstash, Microsoft, Firecrawl, Supabase, Google, Stripe, Desktop Commander e do Model Context Protocol. Curadoria da Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
