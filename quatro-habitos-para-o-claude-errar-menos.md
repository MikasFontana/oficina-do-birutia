# Quatro hábitos para o Claude errar menos

Um único arquivo de instruções, inspirado em observações de Andrej Karpathy, ensina o Claude Code a não adivinhar, não inchar o código e mexer só no que foi pedido.

O repositório multica-ai/andrej-karpathy-skills reúne um arquivo de instruções (um CLAUDE.md) baseado em observações públicas de Andrej Karpathy sobre os erros mais comuns dos assistentes de programação: supor coisas sem avisar, complicar o que era simples e alterar partes que ninguém pediu.

O arquivo resume quatro hábitos:

1. Pensar antes de programar: dizer as suposições, perguntar quando houver dúvida e parar quando algo não estiver claro.

2. Simplicidade primeiro: o mínimo que resolve o problema, sem recursos que ninguém pediu.

3. Mudanças cirúrgicas: tocar só no que o pedido exige e deixar o resto como está.

4. Execução guiada por objetivo: definir como saber que deu certo e repetir até conferir.

## Antes de usar: a licença

Quando conferimos, o repositório não declara licença (o GitHub não mostra nenhuma) e a última atualização era de abril de 2026. Sem licença, o autor não deu permissão explícita para copiar e redistribuir o texto. Por isso não copiamos o conteúdo aqui: o guia só descreve a ideia e indica o endereço oficial. Para instalar, use o próprio plugin do repositório.

## Passo a passo

### 1. Adicione o plugin

No Claude Code, em uma mensagem:

`

/plugin marketplace add multica-ai/andrej-karpathy-skills

`

### 2. Instale

Em outra mensagem:

`

/plugin install andrej-karpathy-skills@karpathy-skills

`

### 3. Faça o seu próprio arquivo

Se preferir não instalar, escreva um CLAUDE.md curto, com palavras suas, usando os quatro hábitos acima. Veja também o guia sobre regras do CLAUDE.md aqui na Oficina.

## Pedido para escrever o seu arquivo

### Pedido: Meus quatro hábitos

```
Crie um arquivo CLAUDE.md curto, com as minhas palavras, que exija quatro hábitos: dizer as suposições antes de agir e perguntar quando houver dúvida, escolher a solução mais simples, mudar só o que eu pedir e explicar como vamos saber que deu certo. Use português simples.
```

## Avisos

Sem licença declarada, não copie o texto do repositório para outro lugar.

O repositório estava sem atualização desde abril de 2026: confira se ainda funciona na sua versão.

Regras em arquivo ajudam, mas não garantem. Confira o que o Claude entregar.

## Checklist final

- [ ] Li o aviso sobre a licença
- [ ] Instalei o plugin ou escrevi o meu arquivo
- [ ] Testei em uma tarefa pequena
## Quem fez

Arquivo de multica-ai (github.com/multica-ai/andrej-karpathy-skills), com base em observações de Andrej Karpathy. Licença não declarada na data da conferência. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
