# Respostas curtas no Claude, para gastar menos limite

O Caveman faz o assistente cortar introduções e repetições. Respostas diretas, mais rápidas de ler e com menos consumo do seu limite de uso.

O Caveman (repositório juliusbrussee/caveman, licença Apache-2.0, atualizado em outubro de 2026, conferido no GitHub) pede ao assistente que responda de forma bem curta: sem "claro, vou explicar", sem repetir a pergunta, sem enfeite. O código continua completo. O exemplo do próprio projeto mostra uma resposta de 63 palavras-unidade (tokens) caindo para 20, com a mesma solução. O projeto também divulga testes que indicam menos consumo; esses números são do autor, e nós não os medimos.

Ele serve para quem prefere objetividade e quer fazer o limite do plano render mais.

## O que você precisa

Um assistente compatível, como o Claude Code. O instalador completo exige Node.js na versão 22.13 ou mais nova. Para só a skill de respostas curtas, o comando simples abaixo basta.

## Passo a passo

### 1. Instale só a skill de respostas curtas

No terminal, dentro da sua pasta de trabalho:

`

npx skills add https://github.com/juliusbrussee/caveman --skill caveman

`

### 2. Ative quando quiser

Use /caveman para ligar o modo de respostas curtas. Há também uma versão ainda mais enxuta, descrita no README do projeto.

### 3. Compare

Faça a mesma pergunta com e sem o modo e veja a diferença.

### 4. Opção completa (depois, se quiser)

O projeto oferece um instalador próprio, npx @caveman-ai/cli@latest, que procura os assistentes do seu computador e mostra o que vai alterar. Leia a lista antes de confirmar.

## Pedido para testar

### Pedido: Resposta curta

```
Responda em até cinco linhas, direto ao ponto, sem introdução e sem repetir a minha pergunta. Se eu precisar de mais detalhes, eu peço.
```

## Avisos

O exemplo do projeto está em inglês. Não testamos o efeito em português.

Respostas curtas demais podem esconder um cuidado importante: para assuntos delicados, peça detalhes.

O instalador completo altera configurações de vários programas. Leia o que ele mostra antes de aceitar.

## Checklist final

- [ ] Instalei só a skill, sem o instalador completo
- [ ] Comparei uma resposta normal com uma curta
- [ ] Sei desligar quando precisar de mais detalhes
## Quem fez

Caveman, de Julius Brussee (github.com/juliusbrussee/caveman), licença Apache-2.0. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
