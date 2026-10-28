# Vídeos feitos com código pelo Claude Code

O Remotion transforma código em vídeo. Com o Claude Code, você descreve a cena e ele escreve, testa e renderiza. Foi assim que fizemos o primeiro vídeo do canal.

Editor de vídeo comum funciona com arrastar e soltar. O Remotion funciona com código: cada quadro do vídeo é uma página feita em React, e o resultado sai em MP4. Isso parece pior até você perceber a vantagem: o Claude Code escreve o código, e mudar uma cor, um tempo ou um texto leva segundos, em vez de refazer a edição.

## Quando vale a pena

- Vídeos curtos e repetidos, como Reels, anúncios e vinhetas.
- Animação com texto, ícones e gráficos, que muda de acordo com dados.
- Quem já tem ritmo de produção e quer manter o mesmo estilo em todos os vídeos.
Para edição de uma gravação longa com cortes finos, um editor tradicional ainda é mais prático.

## O que você precisa

- Node.js instalado no computador.
- O Claude Code aberto em uma pasta vazia.
- O FFmpeg, que o Remotion usa para montar o arquivo final. Se faltar, o Claude explica a instalação.
## Passo a passo

### 1. Crie o projeto

### Pedido: Pedido 1 · criar o projeto

```
Crie um projeto Remotion nesta pasta para vídeos verticais de 1080 por 1920, a 30 quadros por segundo. Explique em palavras simples o que cada pasta faz. Depois abra o estúdio de pré-visualização e me diga como acessar.
```

### 2. Descreva uma cena

Comece por uma só, de 5 segundos. Falar em cores, fontes e movimento ajuda mais que falar em "bonito".

### Pedido: Pedido 2 · primeira cena

```
Crie uma cena de 5 segundos com fundo escuro, um título grande que entra com um leve salto e um subtítulo que aparece em seguida. Use a fonte [nome da fonte] e as cores [cor 1] e [cor 2]. Quero ver um quadro parado antes de renderizar.
```

### 3. Veja antes de renderizar

Renderizar demora. Peça quadros de prévia, em tamanho menor, para aprovar o visual.

### Pedido: Pedido 3 · prévia

```
Gere 3 imagens de prévia da cena, nos segundos 1, 3 e 5, em metade do tamanho. Aponte o que você acha que pode melhorar, e espere a minha aprovação antes de renderizar o vídeo.
```

### 4. Coloque a narração

Cada cena deve durar o tempo da fala dela. O Claude pode medir o áudio e ajustar.

### Pedido: Pedido 4 · sincronizar com a voz

```
Coloque o áudio [arquivo] na cena. Ajuste a duração da cena para o tamanho do áudio, com meio segundo de folga no fim. Se o texto na tela aparecer antes ou depois da fala, sincronize.
```

### 5. Renderize

### Pedido: Pedido 5 · gerar o arquivo

```
Renderize o vídeo em MP4 com boa qualidade e salve na pasta de saída. Depois, confirme que o arquivo abre e me diga a duração e o tamanho.
```

## O que aprendemos fazendo

- Dividir o vídeo em cenas, uma por arquivo, torna cada ajuste pequeno e seguro.
- Guarde as cores e fontes em um só lugar, para trocar a identidade do vídeo inteiro de uma vez.
- Aprove quadros antes de renderizar. O tempo gasto em prévia economiza muito mais tempo de renderização.
Confira a licença no site oficial do Remotion antes de usar em projeto comercial. As regras dependem do tamanho da empresa.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
