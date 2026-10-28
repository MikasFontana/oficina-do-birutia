# Clonar a própria voz com IA, de graça e no seu computador

É possível clonar a sua voz com ferramentas de código aberto, sem pagar nada. Contamos o que funcionou, o que deu errado e os cuidados que não podem faltar.

Para o canal, precisávamos de uma narração com a voz do Michel, sem ficar gravando toda hora. Testamos o Chatterbox, um modelo de voz de código aberto e gratuito, que roda no próprio computador. Este guia conta o caminho e os problemas que apareceram.

## O que você precisa

- Um computador com placa de vídeo da NVIDIA ajuda muito. Rodamos em uma com 8 GB de memória.
- Python instalado e o Claude Code para fazer a instalação por você.
- Uma amostra da sua voz: de 10 a 30 segundos, em lugar silencioso, sem eco nem música.
## Passo a passo

### 1. Grave uma boa amostra

A qualidade da voz clonada depende quase toda da amostra. Fale do jeito que você quer ser ouvido: no ritmo e no sotaque finais. Se a amostra tem chiado, o resultado também terá.

### 2. Peça a instalação

### Pedido: Pedido 1 · instalar

```
Instale o Chatterbox em um ambiente virtual do Python nesta pasta, com suporte à minha placa de vídeo. Explique cada passo e me peça confirmação antes de baixar arquivos grandes. No fim, gere uma frase de teste com a minha amostra [arquivo].
```

### 3. Teste e compare

Gere a mesma frase várias vezes e escolha a melhor. A voz tem variação a cada geração.

### Pedido: Pedido 2 · escolher a melhor versão

```
Gere a frase [texto] 5 vezes com a minha amostra. Transcreva cada resultado e compare com o texto original. Me entregue as 2 versões que mais se parecem com o texto, para eu ouvir.
```

### 4. Limpe o áudio

### Pedido: Pedido 3 · tirar o chiado

```
Filtre o áudio gerado com o FFmpeg para reduzir o chiado e normalizar o volume, sem deixar a voz abafada. Entregue o antes e o depois.
```

## Problemas que tivemos

- Sotaque de outro país: o modelo imita a amostra. Uma amostra com o sotaque que você quer resolve melhor que qualquer ajuste depois.
- Chiado: apareceu em amostras ruins. Limpar a amostra antes foi mais eficaz que limpar o resultado.
- Palavras estrangeiras: nomes como "Claude" saem com pronúncia americana. Escrever a palavra do jeito que se fala ajuda.
- Palavra engolida: de vez em quando uma sílaba some. Por isso geramos várias versões e escolhemos.
## Cuidados que valem mais que a técnica

- Clone só a sua voz, ou a de alguém que autorizou por escrito. Voz é um dado pessoal.
- Avise o público se a narração for gerada, quando isso fizer diferença para quem ouve.
- Não use a voz clonada para falar o que você não diria.
Existem outras ferramentas de voz de código aberto. Confira a licença de cada uma antes de usar em projeto comercial.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
