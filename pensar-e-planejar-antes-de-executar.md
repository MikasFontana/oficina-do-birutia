# Pensar e planejar antes de executar

As skills brainstorming e writing-plans fazem o Claude entender o que você quer e montar um plano antes de agir, em tarefas de software ou fora dele.

O repositório obra/superpowers (licença MIT, atualizado em outubro de 2026, conferido no GitHub) reúne várias skills para trabalhar com agentes. Duas delas ajudam quem ainda não sabe descrever o que precisa:

- brainstorming: antes de criar qualquer coisa, o Claude conversa com você para descobrir o que você realmente quer e por quê. A descrição da skill diz que serve também para fora do software, como uma palestra, um negócio ou uma reforma.
- writing-plans: com a ideia definida, o Claude escreve um plano em etapas, com arquivos, passos e testes, para alguém executar sem precisar adivinhar nada.
## Passo a passo

### 1. Instale as duas

`

npx skills add https://github.com/obra/superpowers --skill brainstorming

`

`

npx skills add https://github.com/obra/superpowers --skill writing-plans

`

### 2. Comece pelo brainstorming

Conte a sua ideia e responda às perguntas. Não tenha pressa.

### 3. Peça o plano

Quando a ideia estiver clara, peça o plano em etapas.

### 4. Execute uma etapa por vez

Peça ao Claude que faça só a primeira etapa e confira o resultado antes da próxima.

## Pedido para fechar a conversa de ideias

### Pedido: Do que conversamos ao plano

```
Com base na nossa conversa, escreva um plano em etapas numeradas. Para cada etapa, diga o que será feito, o que precisa existir antes e como vamos saber que deu certo. Marque o que ainda é dúvida minha.
```

## Avisos

O repositório tem muitas outras skills. Instale só as que você entendeu.

Um plano bom não substitui a conferência: leia antes de mandar executar.

Em projetos de clientes, não cole dados pessoais na conversa.

## Checklist final

- [ ] Instalei brainstorming e writing-plans
- [ ] Respondi às perguntas do brainstorming
- [ ] Recebi o plano e fiz uma etapa por vez
## Quem fez

Superpowers, de obra e colaboradores (github.com/obra/superpowers), licença MIT. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
