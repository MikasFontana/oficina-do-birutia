# Faça o Claude escrever só o necessário

O Ponytail faz o Claude Code parar e perguntar "isso precisa existir?" antes de criar código novo. Menos peças a mais, menos confusão para você revisar.

O Ponytail (repositório DietrichGebert/ponytail, licença MIT, atualizado em outubro de 2026, conferido no GitHub) é um plugin que muda o comportamento do Claude Code: antes de escrever código novo, ele passa por uma escada de perguntas. Isso precisa existir? Já há algo parecido no projeto? Uma função que já vem pronta resolve? Só no fim ele cria código, sem camadas, opções e dependências que ninguém pediu. O projeto afirma, em um teste próprio com 39 tarefas, uma redução de cerca de 53% no código gerado. Esse número é do autor, não foi medido por nós.

Nós usamos o Ponytail nas nossas conversas de programação. O que notamos é um efeito simples: a resposta vem menor e mais fácil de conferir, o que ajuda quem não programa.

## O que você precisa

Claude Code instalado e uma pasta de projeto aberta. O guia vale para quem usa o Claude para criar sites, scripts e automações.

## Passo a passo

### 1. Adicione o plugin

No Claude Code, envie este comando sozinho, em uma mensagem:

`

/plugin marketplace add DietrichGebert/ponytail

`

### 2. Instale

Em outra mensagem, envie:

`

/plugin install ponytail@ponytail

`

### 3. Escolha a intensidade

Use /ponytail lite, /ponytail full ou /ponytail ultra. Para desligar, /ponytail off. Sem escolher, ele começa no nível padrão.

### 4. Peça uma tarefa de verdade

Veja o efeito em uma tarefa pequena, como trocar um texto de um botão ou criar uma página simples.

## Pedido para conferir o resultado

### Pedido: Entender o que mudou

```
Mostre em português simples o que você alterou e por quê. Liste os arquivos tocados, diga o que deixou de fazer por não ser necessário e aponte qualquer risco que eu precise conhecer.
```

## Avisos

Instale somente a partir de DietrichGebert/ponytail no GitHub. Cópias de outros endereços podem ser golpe.

Código mais curto não é garantia de código correto: teste o que o Claude entregar.

Os números de economia vêm do próprio projeto.

## Checklist final

- [ ] Instalei pelos dois comandos, em mensagens separadas
- [ ] Testei em uma tarefa pequena
- [ ] Conferi o que mudou antes de usar
## Quem fez

Ponytail, de DietrichGebert (github.com/DietrichGebert/ponytail), licença MIT. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
