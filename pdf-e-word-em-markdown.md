# PDF e Word em Markdown para gastar menos limite

Arquivos como PDF e Word carregam muita formatação que a IA não precisa. Converter para Markdown deixa o texto limpo e usa menos do seu limite. Veja como fazer com o MarkItDown.

Quando você anexa um PDF na IA, ela lê muito mais do que o texto: lê estrutura, quebras de página e formatação. Isso gasta o seu limite de uso e mistura o que importa com o que não importa. O Markdown é texto simples, com títulos e listas, e a IA o entende muito bem.

O MarkItDown é uma ferramenta gratuita e de código aberto, criada pela Microsoft, que converte vários tipos de arquivo em Markdown.

## O que ele converte

Documentos como PDF e Word, planilhas, apresentações, páginas da web e alguns outros formatos. A lista completa está no repositório oficial.

## Passo a passo

### 1. Peça a instalação

Precisa do Python instalado.

### Pedido: Pedido 1 · instalar

```
Instale o MarkItDown da Microsoft neste computador com o Python e me mostre como converter um arquivo pelo terminal. Confirme que funcionou convertendo [arquivo de teste] em Markdown.
```

### 2. Converta um arquivo

No terminal, o comando tem a forma abaixo. Troque os nomes pelos seus.

### Pedido: Comando de exemplo

```
markitdown "relatorio.pdf" -o "relatorio.md"
```

### 3. Converta uma pasta inteira

### Pedido: Pedido 2 · converter em lote

```
Converta todos os PDF e Word da pasta [caminho] para Markdown com o MarkItDown, salvando cada um com o mesmo nome e a extensão .md em uma pasta chamada "convertidos". Não apague nem altere os originais. Ao final, liste o que foi convertido e o que falhou.
```

### 4. Use o resultado

Anexe o .md na conversa, em vez do PDF original. Compare o resultado com o original antes de confiar: tabelas e colunas podem sair bagunçadas.

## Limites que você precisa conhecer

- PDF escaneado (uma foto de página) não tem texto para extrair. Precisa de reconhecimento de texto (OCR), que é outra etapa.
- Tabelas complexas podem perder o formato. Confira os números.
- Dados sensíveis: converter não protege nada. Se o arquivo tem dado pessoal, o texto convertido também tem.
Confira a documentação oficial do MarkItDown para os comandos mais atuais.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
