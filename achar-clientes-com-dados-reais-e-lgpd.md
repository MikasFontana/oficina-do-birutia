# Achar clientes com dados reais e LGPD

Conecte o Firecrawl ao Claude e peça uma lista de empresas com sinais públicos de que precisam do seu serviço, com fonte e respeito à LGPD.

O Firecrawl é um serviço que permite ao Claude buscar e ler páginas da internet. A Alexandria é uma biblioteca de conhecimento criada por ele para agentes de IA, que reúne fontes de dados e a web em uma só conexão; a empresa informou que ela funciona no Claude e no Claude Code. O número de fontes varia entre as páginas da empresa, por isso este guia não afirma nenhuma quantidade. Há plano gratuito com créditos limitados.

## Passo a passo

### 1. Conecte

No Claude, abra os conectores, procure por Firecrawl e entre com a sua conta (login pelo navegador, sem colar chave). No Claude Code, o comando é:

### Pedido: Conexão no Claude Code

```
claude mcp add --transport http firecrawl https://mcp.firecrawl.dev/v2/mcp-oauth
```

### 2. Ative o conector na conversa

Pelo menu "+" da conversa.

### 3. Faça o pedido

### Pedido: Pedido · achar empresas com necessidade

```
Use o Firecrawl para encontrar empresas do Brasil que estão contratando [tipo de profissional ligado ao meu serviço]. Para cada uma, traga: nome, site, o sinal de contratação encontrado (com o link da fonte), por que ela poderia precisar de [meu serviço] e, somente se for informação pública, quem responde pela área. Se não houver fonte, diga que não encontrou. Não invente.
```

### 4. Confira as fontes

Abra os links antes de qualquer contato.

## Abordagem com respeito à LGPD

- Use só dados de contato que sejam públicos.
- Identifique-se e diga de onde veio o contato.
- Ofereça uma forma simples de a pessoa pedir para não receber mais mensagens.
## Avisos

Cada consulta gasta créditos do seu plano.

Respeite os termos de uso e o robots dos sites consultados.

Uma lista da IA é ponto de partida, não verdade: confirme antes de usar.

## Checklist final

- [ ] Conector ligado
- [ ] Pedido exige fonte para cada empresa
- [ ] Fontes abertas e conferidas
- [ ] Mensagem se identifica e oferece saída
## Quem fez

Firecrawl (changelog e documentação oficial). Guia escrito pela Oficina do BirutIA, com base no material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
