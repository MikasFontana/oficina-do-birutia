# Peça ao Claude que te interrogue antes de começar

A skill grill-me faz o Claude entrevistar você, rodada por rodada, até a ideia ficar clara. Ótimo para briefings e para planos que ainda estão na cabeça.

Muita gente pede algo ao Claude sem ter terminado de pensar. A skill grill-me, do repositório mattpocock/skills (licença MIT, atualizado em outubro de 2026, conferido no GitHub), inverte a ordem: em vez de responder logo, o Claude entrevista você. Ele monta uma "árvore de decisões", faz as perguntas que já pode fazer em uma rodada numerada, sugere uma resposta para cada uma e espera as suas respostas antes de seguir.

A skill grill-me é um atalho que chama outra skill do mesmo repositório, chamada grilling. Por isso, na instalação, escolha as duas.

Atenção a um detalhe: a lista da comunidade cita a skill to-prd, que transforma a conversa em documento de requisitos. Quando conferimos, o repositório tinha uma skill parecida chamada to-spec, e não encontramos to-prd. Confira o nome atual no repositório antes de instalar.

## Passo a passo

### 1. Instale

No terminal, na pasta do seu projeto:

`

npx skills add https://github.com/mattpocock/skills --skill grill-me

`

Se o instalador mostrar uma lista, marque também a grilling.

### 2. Conte a sua ideia em poucas linhas

Escreva o que quer fazer, mesmo que esteja confuso.

### 3. Chame a entrevista

Digite /grill-me e responda às perguntas numeradas. Pode aceitar a sugestão do Claude ou mudar.

### 4. Peça o resumo

Quando acabar, peça um resumo do que ficou decidido.

## Pedido para usar depois da entrevista

### Pedido: Resumo do que decidimos

```
Com base nas nossas respostas, escreva um resumo em tópicos: o objetivo, para quem é, o que precisa ter, o que fica de fora e as dúvidas que ainda restam. Use português simples e não invente nada que eu não tenha respondido.
```

## Avisos

A entrevista pode ser longa. Responda por rodadas e faça pausas.

Documentos gerados são rascunhos: confira antes de enviar a um cliente.

Não cole dados pessoais de clientes nas respostas.

## Checklist final

- [ ] Instalei grill-me e grilling
- [ ] Respondi às rodadas de perguntas
- [ ] Pedi o resumo e conferi
## Quem fez

Skills de Matt Pocock (github.com/mattpocock/skills), licença MIT. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
