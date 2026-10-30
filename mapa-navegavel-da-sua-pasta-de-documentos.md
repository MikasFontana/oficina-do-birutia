# Um mapa navegável da sua pasta de documentos

O Graphify lê uma pasta com código, textos e PDFs e monta um mapa de conceitos e ligações, com relatório e página para explorar no navegador.

O Graphify (repositório Graphify-Labs/graphify, licença Apache-2.0, atualizado em outubro de 2026, conferido no GitHub) lê uma pasta e transforma o conteúdo em um grafo de conhecimento: um mapa em que cada ideia é um ponto e as ligações mostram como elas se relacionam. Segundo o projeto, entende cerca de 40 linguagens de programação, além de textos, PDFs e imagens.

No fim você recebe três arquivos, dentro de uma pasta graphify-out:

- graph.html: abre no navegador, com busca, filtros e pontos clicáveis;
- GRAPH_REPORT.md: o resumo, com os conceitos principais, ligações surpreendentes e perguntas sugeridas;
- graph.json: o mapa completo, para consultar depois.
Combina com quem tem um acervo de anotações, como um cofre do Obsidian, ou uma pasta de projeto grande que precisa entender rápido.

## O que você precisa

Python 3.10 ou mais novo e a ferramenta uv (ou pipx), segundo o README do projeto.

## Passo a passo

### 1. Instale

`

uv tool install graphifyy

`

`

graphify install

`

O nome do pacote tem dois "y" no fim (graphifyy). Confira o endereço antes de instalar, para não cair em um pacote falso de nome parecido.

### 2. Escolha uma pasta de teste

Comece por uma pasta pequena e sem dados sensíveis.

### 3. Chame no seu assistente

`

/graphify .

`

### 4. Explore

Abra o graph.html no navegador, leia o relatório e faça perguntas ao Claude sobre o mapa.

## Pedido para ler o relatório

### Pedido: Entender o mapa

```
Leia o arquivo GRAPH_REPORT.md desta pasta. Explique em português simples quais são os conceitos mais importantes, quais ligações me surpreenderam e quais perguntas eu deveria fazer sobre este material. Não invente nada que não esteja no relatório.
```

## Avisos

Privacidade: segundo o README, código é processado no seu computador; documentos, PDFs e imagens são enviados ao assistente de IA que você usa para extrair o sentido. Não use pastas com dados de clientes ou dados pessoais.

Usar a ferramenta fora do assistente exige uma chave de API de um provedor de IA, que pode gerar custos.

O mapa é uma leitura automática: confira antes de tomar decisões com base nele.

## Checklist final

- [ ] Conferi o nome do pacote (graphifyy)
- [ ] Testei em uma pasta pequena e sem dados sensíveis
- [ ] Abri o graph.html e li o relatório
## Quem fez

Graphify, de Graphify-Labs (github.com/Graphify-Labs/graphify), licença Apache-2.0. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
