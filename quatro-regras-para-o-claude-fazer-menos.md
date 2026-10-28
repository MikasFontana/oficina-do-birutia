# Como fazer o Claude Code parar de mexer no que você não pediu

O Claude Code tende a mexer em mais coisas do que você pediu. Um arquivo de quatro regras, escrito em português, deixa o trabalho mais curto, mais seguro e mais fácil de revisar.

Quem usa o Claude Code percebe o padrão: você pede um ajuste pequeno e vem uma reforma. Arquivos que ninguém pediu, uma ferramenta nova instalada, um texto reescrito. Isso gasta o seu limite de uso e dá trabalho para revisar. A solução é um arquivo chamado CLAUDE.md, que o Claude Code lê no começo de toda conversa.

## O que é o CLAUDE.md

Um arquivo de texto na pasta do projeto, ou na sua pasta pessoal para valer em tudo. Ele guarda as regras do jogo. Não precisa ser longo: quanto mais curto, mais ele é seguido.

## As quatro regras

### 1. Entenda antes de mexer

Antes de alterar, o Claude lê o que já existe e diz o que entendeu. Se faltar informação, pergunta. Não supõe.

### 2. Faça a menor mudança que resolve

Só o que foi pedido. Nada de melhorar o que estava funcionando, renomear ou reorganizar por conta própria.

### 3. Não invente

Nome de função, número, fonte ou resultado que ele não conferiu não entra na resposta. Quando não souber, escreve "a confirmar".

### 4. Prove que funcionou

Ao terminar, mostra como conferiu: rodou o teste, abriu a página, comparou o resultado. Se não conseguiu conferir, diz isso.

## O arquivo pronto

Copie para um arquivo CLAUDE.md na pasta do seu projeto.

### Pedido: Conteúdo do CLAUDE.md

```
# Regras de trabalho. 1) Entenda antes de mexer: leia o que já existe, diga o que entendeu e pergunte se faltar informação. Não suponha. 2) Faça a menor mudança que resolve o pedido: nada de reorganizar, renomear ou melhorar o que não foi pedido. 3) Não invente: nome, número, fonte ou resultado que você não conferiu fica marcado como "a confirmar". 4) Prove que funcionou: ao terminar, mostre como conferiu. Se não conseguiu conferir, diga. Responda de forma curta e em português do Brasil.
```

## Como instalar

- Só neste projeto: peça "Crie o arquivo CLAUDE.md na pasta com este texto" e cole o conteúdo.
- Em todos os projetos: peça para guardar o mesmo texto no seu CLAUDE.md pessoal, na pasta .claude do seu usuário.
## Como saber se está funcionando

Peça um ajuste pequeno e observe se ele mexeu só no que foi pedido. Se não, deixe a regra mais curta e mais direta. Regra longa demais é ignorada.

Regra não substitui revisão. Em um projeto importante, olhe o que mudou antes de aceitar.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
