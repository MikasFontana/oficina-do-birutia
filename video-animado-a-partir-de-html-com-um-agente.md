# Vídeo animado a partir de HTML, com um agente

O HyperFrames, da HeyGen, deixa o assistente escrever uma página em HTML e transformá-la em vídeo. Veja como instalar e o que esperar.

O HyperFrames (repositório heygen-com/hyperframes, licença Apache-2.0, atualizado em outubro de 2026, conferido no GitHub) parte de uma ideia direta: você descreve o vídeo, o assistente escreve uma página em HTML com as animações e o programa renderiza o HTML em vídeo. O projeto o apresenta como pensado para agentes de IA e traz um catálogo de exemplos e uma comparação com o Remotion no próprio README.

Aqui na Oficina nós já mostramos como fazer vídeos com código usando o Remotion. O HyperFrames é um caminho parecido, com a vantagem de usar apenas HTML, algo que muita gente já conhece.

## O que você precisa

Um computador com o Claude Code (ou outro assistente compatível) e os programas de apoio que o projeto indica no README, na parte de instalação para o seu sistema. Leia essa seção antes de começar.

## Passo a passo

### 1. Instale o plugin no Claude Code

Em duas mensagens separadas, no terminal do Claude Code:

`

claude plugin marketplace add heygen-com/hyperframes

`

`

claude plugin install hyperframes@hyperframes

`

Para outros assistentes, o README oferece também npx skills add heygen-com/hyperframes.

### 2. Comece pequeno

Peça um vídeo de 10 a 15 segundos com um título animado e duas frases. O objetivo é entender o fluxo.

### 3. Peça ajustes por mensagem

Troque cores, textos e tempo, e peça uma nova versão a cada vez.

### 4. Confira o resultado

Veja o vídeo inteiro, com som, antes de publicar.

## Pedido para o primeiro vídeo

### Pedido: Primeiro vídeo

```
Crie um vídeo vertical de 15 segundos, em fundo escuro, com um título grande que aparece com animação e três frases curtas que entram uma de cada vez. Use as cores [cores da sua marca]. Mostre uma prévia e espere a minha aprovação antes de gerar o arquivo final.
```

## Avisos

O projeto pertence à HeyGen, que também vende serviços. Confira o que é gratuito e o que é pago.

Use só imagens, músicas e fontes que você tem direito de usar.

Não conferimos a qualidade de cada exemplo: teste no seu caso.

## Checklist final

- [ ] Li os requisitos do meu sistema no README
- [ ] Gerei um teste curto
- [ ] Conferi imagem e som antes de publicar
## Quem fez

HyperFrames, da HeyGen (github.com/heygen-com/hyperframes), licença Apache-2.0. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
