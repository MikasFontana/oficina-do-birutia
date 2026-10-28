# Cem agentes brigando pela melhor resposta

A skill Arena, para o Claude Code, faz dezenas de agentes competirem em um torneio até sobrar uma resposta. Veja como instalar, o custo e quando vale a pena.

Quando a resposta da IA não agrada, o comum é pedir de novo. A Arena (repositório Jakeschincariol/arena-skill, licença MIT, conferido no GitHub) propõe outro caminho: o comando /arena cria muitos subagentes que recebem a mesma tarefa, cada um com uma estratégia de raciocínio diferente. Eles se atacam em duplas, um juiz pontua e quem perde sai, até sobrar uma resposta, acompanhada dos ataques que ela resistiu.

Todos os subagentes escrevem somente dentro de uma pasta .arena; os seus arquivos não são alterados.

## Instalação

Precisa do Claude Code e do Python. Há três caminhos descritos no repositório; o mais simples é pedir ao próprio Claude Code:

### Pedido: Instalar pelo Claude Code

```
Instale esta skill a partir de https://github.com/Jakeschincariol/arena-skill e depois confirme que o comando /arena funciona.
```

Leia o README do repositório antes, como faria com qualquer skill de terceiros.

## Comandos principais

- /arena: usa o seu último pedido como tarefa e a resposta rejeitada como a que precisa ser superada.
- /arena --quick: 16 agentes, modo do dia a dia.
- /arena --agents N: escolhe a quantidade (o padrão é 100).
- /arena --seed S: repete as mesmas estratégias e o mesmo chaveamento.
## O custo é seu

A skill é gratuita, mas cada subagente gasta o limite do seu plano. Pelo repositório, o modo padrão faz cerca de 595 chamadas e o --quick cerca de 91. Comece pelo --quick e deixe o modo completo para o que realmente importa. Os subagentes não enxergam a sua conversa, só o arquivo da tarefa: se um requisito não estiver nele, todos erram juntos. Tarefa vaga gera resposta vaga, só que em várias versões.

## Pedidos para testar

### Pedido: Título da página de vendas

```
/arena --quick Escreva o título e o subtítulo da página de vendas do meu [produto]. Público: [quem compra]. Dor principal: [dor]. Resultado entregue: [resultado]. Tom: [tom]. Título com no máximo 12 palavras.
```

### Pedido: Plano de lançamento

```
/arena --quick Monte um plano de 7 dias para lançar [produto]. Tenho [horas] por dia, audiência de [tamanho] no [canal] e nenhum orçamento para anúncios. Quero o que fazer em cada dia e o conteúdo de cada postagem.
```

### Pedido: Objeção de preço

```
/arena --quick Escreva a melhor resposta para quando um cliente diz "está caro" sobre [produto ou serviço]. Entregas: [lista]. Perfil do cliente: [perfil]. Deve caber em uma mensagem de WhatsApp e não pode oferecer desconto.
```

### Pedido: Escolher o projeto

```
/arena --quick Tenho três projetos e apenas [horas] por semana: [A], [B], [C]. Meu objetivo para 90 dias é [objetivo]. Diga qual fazer primeiro, por quê, e o que cortar.
```

## Avisos

Os juízes também são o Claude: revise o resultado antes de usar.

A tarefa vira um arquivo no seu computador. Retire nomes e telefones de clientes antes.

Confira quanto do seu limite sobra antes de rodar o modo completo.

## Checklist final

- [ ] Li o README antes de instalar
- [ ] Comecei pelo --quick
- [ ] Escrevi a tarefa com todo o contexto
- [ ] Revisei a resposta vencedora
## Quem fez

Arena é de Jake Schincariol (github.com/Jakeschincariol/arena-skill, licença MIT). Guia escrito pela Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
