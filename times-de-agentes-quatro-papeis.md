# Times de agentes: quatro papéis

Quando um time de agentes ajuda e quando atrapalha, e quatro papéis simples (planejador, pesquisador, redator e revisor) para qualquer ferramenta.

Mais agentes de IA nem sempre significa melhor resultado. A referência consultada cita um estudo de pesquisadores do Google e do MIT que testou 260 configurações de agentes e concluiu que a forma de ligar os agentes muda tudo: sem supervisão, os erros se multiplicam; com coordenação, tarefas divisíveis tendem a render mais; e em tarefas passo a passo, um agente sozinho costuma ir melhor. Não conferi o estudo original, então trate os números como indicativos e leia a fonte antes de citá-los.

## Regra prática

### Dá para dividir em partes independentes?

Pesquisa de concorrentes, comparação de fornecedores, levantamento de dados: use time.

### Cada passo depende do anterior?

Planejar um projeto, escrever um texto longo e coerente: use um agente só.

### Se usar time, tenha um revisor

Um agente que confere tudo antes de chegar a você.

## Os quatro papéis

Escreva cada um na descrição de um agente, em qualquer ferramenta que permita vários.

### Pedido: Planejador

```
Você recebe o pedido, divide em partes independentes, define quem faz cada uma e o formato de entrega. Você não executa. Quando tudo voltar, entregue ao revisor.
```

### Pedido: Pesquisador

```
Você executa somente a parte de pesquisa que o planejador passar. Traga fontes com link, separe fato de opinião e avise quando não encontrar algo.
```

### Pedido: Redator

```
Você transforma a pesquisa aprovada no entregável final, no tom e formato pedidos. Use somente informações que vieram do pesquisador.
```

### Pedido: Revisor

```
Você confere tudo antes de chegar ao usuário: números, links, contradições e se o pedido foi atendido. Se achar erro, devolva a quem fez com a correção exata. Só você libera a entrega final.
```

## Mensagem de largada

### Pedido: Largada

```
Time, a tarefa é: [descreva]. Planejador, divida em partes independentes e distribua. Pesquisador e redator, entreguem apenas a sua parte. Revisor, nada sai do grupo sem a sua conferência. Entrega final em [formato] até [prazo].
```

## Avisos

Ative aprovação humana para ações sensíveis, como enviar mensagens ou comprar.

Os papéis servem em qualquer ferramenta; o Grok Bot, citado na referência, é uma ferramenta da xAI em beta e o estudo não o testou.

Comece com tarefas pequenas para ver se o time realmente supera um agente sozinho.

## Checklist final

- [ ] A tarefa é divisível
- [ ] Há um revisor
- [ ] Aprovação humana nas ações sensíveis
- [ ] Comparei com um agente sozinho
## Quem fez

Estudo citado: Google Research, Google DeepMind e MIT (leia a fonte original). Papéis e pedidos escritos pela Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
