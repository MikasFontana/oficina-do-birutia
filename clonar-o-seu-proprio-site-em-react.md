# Clonar o seu próprio site em React

O Open Lovable lê uma página pelo Firecrawl e a recria como app React que você edita conversando com a IA. Use só em sites seus ou autorizados.

O Open Lovable (repositório firecrawl/open-lovable, licença MIT, conferido no GitHub) é um projeto aberto, feito pela equipe do Firecrawl, no qual você conversa com a IA para montar um app React. O diferencial é a clonagem: você informa o endereço de um site, ele lê a página e a recria como app moderno que você pode editar. É um projeto de exemplo: exige configurar chaves e rodar no terminal.

## Use apenas com conteúdo seu

Clone o seu próprio site (por exemplo, para modernizá-lo) ou sites que você tem autorização para reproduzir. Copiar o site de outra empresa pode violar direitos autorais e marca. Para estudar, use como referência e crie conteúdo próprio.

## O que você precisa

Node e pnpm, uma chave do Firecrawl, a chave de um provedor de IA (Gemini, Anthropic, OpenAI ou Groq) e um ambiente de execução isolado (o README indica as opções). O nome exato de cada variável está no README.

## Passo a passo

### 1. Baixe o projeto

### Pedido: Baixar

```
git clone https://github.com/firecrawl/open-lovable.git
cd open-lovable
```

### 2. Instale as dependências

### Pedido: Instalar

```
pnpm install
```

### 3. Configure as chaves

Crie o arquivo .env.local e preencha conforme o README. Nunca envie esse arquivo ao GitHub.

### 4. Rode

### Pedido: Rodar

```
pnpm dev
```

Acesse http://localhost:3000 e informe o endereço do seu site ou descreva o app.

## Pedido para refinar

### Pedido: Refinar o resultado

```
Compare a versão em React com o site original e liste o que ficou diferente. Corrija somente o que for visual, sem alterar textos nem links, e deixe os componentes organizados em arquivos separados.
```

## Avisos

Você paga pelo uso das APIs que conectar. Acompanhe o consumo.

Comandos e versões mudam: confira o README antes de instalar.

Revise o código gerado antes de publicar.

## Checklist final

- [ ] O site clonado é meu ou autorizado
- [ ] Chaves fora do GitHub
- [ ] Revisei o código gerado
- [ ] Testei no celular
## Quem fez

Open Lovable, da equipe Firecrawl (github.com/firecrawl/open-lovable). Guia escrito pela Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
