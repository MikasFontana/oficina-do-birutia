# Como editei um vídeo com o Claude, do roteiro ao arquivo final

O vídeo de estreia do canal foi feito assim: roteiro, voz, animação em código, efeitos sonoros e trilha. Veja cada etapa e o pedido que usamos.

Editar com a IA não é pedir "faça um vídeo". É dividir o trabalho em etapas pequenas, aprovar cada uma e só então seguir. Este é o método que usamos no vídeo de estreia do canal.

## O caminho

### 1. Escreva o roteiro por cenas

Um vídeo curto fica melhor com cenas de 5 a 12 segundos, cada uma com uma ideia só.

### Pedido: Pedido 1 · roteiro

```
Escreva o roteiro de um vídeo vertical de até 90 segundos sobre [assunto], dividido em 8 cenas. Para cada cena, dê: o texto falado, o que aparece na tela e a duração estimada. Linguagem falada, frases curtas, sem jargão.
```

### 2. Faça a narração

Grave a sua voz ou use uma voz clonada sua. O importante é gerar um áudio por cena, e não um áudio gigante. Assim, cada cena tem a duração exata da fala.

### 3. Monte a animação em código

Com o Remotion, o Claude cria cada cena e ajusta o tempo ao áudio dela. Peça prévias antes de renderizar.

### Pedido: Pedido 2 · cenas animadas

```
Crie a cena 1 em Remotion, com a duração do áudio dela. Fundo [cor], título animado, ícones simples e legenda sincronizada com a fala. Mostre três quadros de prévia antes de renderizar.
```

### 4. Acrescente os sons

Efeitos pequenos fazem o vídeo parecer profissional: um estalo quando uma caixa aparece, um som leve na troca de cena.

### Pedido: Pedido 3 · efeitos sonoros

```
Coloque um efeito sonoro curto sempre que uma caixa de texto aparecer e um som leve em cada troca de cena. Mantenha todos baixos para não competirem com a voz.
```

### 5. Coloque a trilha com a voz por cima

A música precisa abaixar sozinha quando a pessoa fala. Isso se chama *ducking* e é feito com o FFmpeg.

### Pedido: Pedido 4 · trilha que abaixa na fala

```
Misture a trilha [arquivo] com a narração usando o FFmpeg, de modo que a música abaixe automaticamente enquanto há voz e volte a subir nas pausas. Deixe a voz sempre mais alta que a música.
```

### 6. Confira antes de entregar

### Pedido: Pedido 5 · revisão final

```
Revise o vídeo pronto: o texto na tela corresponde ao que é falado? Há cortes bruscos? A legenda passa da zona segura do celular? O áudio tem chiado? Liste o que encontrar, sem corrigir ainda.
```

## Erros que nos custaram tempo

- Voz com chiado ou sotaque estranho: quase sempre vem da amostra de voz. Use uma gravação limpa, sem eco.
- Texto na tela fora do tempo: meça a duração do áudio de cada cena, em vez de estimar.
- Renderizar tudo de uma vez: gere uma cena de teste e só depois o vídeo inteiro.
Use apenas a sua voz, ou a voz de quem autorizou por escrito.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
