# Skills no Gemini no lugar dos Gems

As Skills vão substituir os Gems no Gemini. Veja o que muda, como escrever a sua primeira e modelos prontos para adaptar.

Segundo a referência consultada, o Google anunciou que as Skills vão substituir os Gems no Gemini. Uma skill é um conjunto de instruções salvo uma vez e reutilizado sempre que você pede aquele tipo de tarefa. É possível usar mais de uma na mesma conversa, e elas seguem um formato aberto chamado SKILL.md, escrito em Markdown.

As datas da transição (início em outubro, migração dos Gems em novembro, fim dos Gems em contas de empresa em março de 2027) vêm da referência consultada: confira o calendário no Google Workspace Updates. As skills criadas no app do Gemini não aparecem no Gmail ou no Docs, e vice-versa.

## Passo a passo

### 1. Escolha uma tarefa que você repete

Tarefa de uma vez só não precisa de skill.

### 2. Dê um nome que comece com verbo

Minúsculas com hífen: escrever-post-da-marca, resumir-reuniao.

### 3. Escreva a descrição com "Use quando"

É por ela que o Gemini decide quando aplicar a skill.

### 4. Escreva as instruções

Formato da resposta, passos em ordem, erros a evitar e o que fazer quando faltar informação.

### 5. Teste e ajuste

Chame a skill em uma conversa nova e corrija a instrução se a resposta sair fora do padrão.

## Modelos prontos

### Pedido: Escrever na voz da marca

```
Nome: escrever-na-voz-da-marca
Descrição: Escreve textos de marketing no tom da [marca]. Use quando eu pedir post, legenda, e-mail ou anúncio.
Instruções:
- Público: [quem compra].
- Tom: [direto, acolhedor ou divertido], frases curtas, linguagem do dia a dia.
- Palavras que a marca usa: [lista]. Palavras proibidas: [lista].
- Termine sempre com uma chamada para ação clara.
- Se eu não disser o canal, pergunte antes de escrever.
```

### Pedido: Resumir reunião

```
Nome: resumir-reuniao
Descrição: Transforma anotações ou transcrição de reunião em resumo com decisões e tarefas. Use quando eu colar anotações ou transcrição.
Instruções:
1. Resumo em até cinco linhas.
2. Decisões tomadas, em lista.
3. Tarefas em tabela: tarefa, responsável, prazo.
4. Pontos em aberto.
Se faltar responsável ou prazo, escreva "a definir" e não invente.
```

### Pedido: Responder cliente

```
Nome: responder-cliente
Descrição: Escreve respostas a clientes por WhatsApp ou e-mail no padrão da [empresa]. Use quando eu colar a mensagem de um cliente e pedir uma resposta.
Instruções:
- Cumprimente pelo nome, responda em até quatro frases e feche com o próximo passo.
- Siga estas políticas: [prazo de troca, horários, formas de pagamento].
- Nunca prometa desconto, prazo ou reembolso fora dessas políticas.
- Se a reclamação for grave, sugira que eu ligue ao cliente.
```

### Pedido: Migrar um Gem para skill

```
Abaixo estão as instruções de um Gem que eu uso. Reescreva no formato de skill: nome em minúsculas com hífen começando por verbo, descrição com "Use quando...", instruções em passos, erros comuns e o que fazer quando faltar informação. Não mude o objetivo do Gem.

[cole as instruções]
```

## Avisos

Não coloque senhas, CPF, dados bancários ou informações de clientes dentro das instruções. A informação entra na conversa, já anonimizada.

A skill padroniza o jeito de fazer; quem confere o resultado é você.

Em conta de empresa, quem libera é o administrador do Workspace.

## Checklist final

- [ ] Escolhi uma tarefa repetida
- [ ] Descrição com "Use quando"
- [ ] Testei em conversa nova
- [ ] Copiei as instruções dos meus Gems antes da migração
## Quem fez

Recurso do Google (Workspace Updates e Ajuda do Gemini). Modelos escritos pela Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
