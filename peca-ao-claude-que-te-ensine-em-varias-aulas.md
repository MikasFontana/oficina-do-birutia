# Peça ao Claude que te ensine em várias aulas

A skill teach transforma uma pasta em sala de aula: o Claude guarda o que você quer aprender e continua de onde parou, aula após aula.

A skill teach, do repositório mattpocock/skills (licença MIT, atualizado em outubro de 2026, conferido no GitHub), foi feita para quem quer aprender algo aos poucos. Segundo a descrição no próprio arquivo, o pedido é "com estado": você pretende aprender o tema ao longo de várias sessões. Por isso o Claude trata a pasta atual como uma sala de aula: guarda o objetivo em um arquivo chamado MISSION.md e organiza as lições na pasta lessons, para retomar depois sem recomeçar.

Ela serve para aprender qualquer assunto: uma ferramenta, um conceito, uma habilidade nova.

## Passo a passo

### 1. Crie uma pasta só para o tema

Por exemplo, "aprender planilhas". A skill usa a pasta onde você a chama.

### 2. Instale

`

npx skills add https://github.com/mattpocock/skills --skill teach

`

### 3. Abra o Claude Code dentro da pasta e chame

Digite /teach e diga o que quer aprender.

### 4. Volte nos dias seguintes

Abra a mesma pasta e continue. O progresso fica nos arquivos.

## Pedido para o primeiro dia

### Pedido: Combinar o objetivo

```
Quero aprender [assunto] em [prazo]. Hoje eu sei [o que já sei]. Pergunte o que precisar para entender o meu objetivo e o meu nível, e depois proponha um plano de aulas curtas, com um exercício em cada uma.
```

## Avisos

O tom e o ritmo das aulas dependem do que você pedir; ajuste no começo.

A IA pode errar. Para assuntos de saúde, dinheiro ou direito, confirme com um profissional.

Os arquivos ficam no seu computador, na pasta que você escolheu.

## Checklist final

- [ ] Criei uma pasta própria para o tema
- [ ] Instalei e chamei /teach
- [ ] Combinei objetivo e prazo
- [ ] Voltei na pasta para continuar a aula
## Quem fez

Skills de Matt Pocock (github.com/mattpocock/skills), licença MIT. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
