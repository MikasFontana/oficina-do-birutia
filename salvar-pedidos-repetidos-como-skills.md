# Salvar seus pedidos repetidos como skills

Salve uma instrução uma vez e chame com uma barra no chat do Gemini. Passo a passo para criar a primeira skill e modelos prontos.

Segundo a referência consultada, o Google lançou as skills no Gemini: instruções que você salva uma vez e chama digitando / na caixa de mensagem. É possível combinar duas ou mais e anexar arquivos de referência. Elas vão substituir os Gems, que serão migrados. Este guia complementa o guia "Skills no Gemini no lugar dos Gems". Condições (idade, ativação da atividade do Gemini, datas) estão na Ajuda do Gemini: "Create and manage skills".

## Passo a passo

### 1. Abra as configurações do Gemini e a área de Skills

### 2. Escolha como criar

Criar com o Gemini (ele faz perguntas), criar manualmente (nome, descrição e instruções) ou enviar um arquivo SKILL.md.

### 3. Dê um nome curto com verbo

Minúsculas e hífen: responder-cliente.

### 4. Escreva quando usar

Termine a descrição com "Use quando..." e a situação.

### 5. Escreva as instruções em passos

Formato, tom e o que fazer quando faltar informação.

### 6. Teste no chat

Digite / e o nome da skill, envie um caso real e ajuste.

## Pedido para criar pelo chat

### Pedido: Criar skill pelo chat

```
Crie uma skill com base nestas instruções. Nome: [nome-com-hifen]. Descrição: [o que faz]. Use quando [situação]. Passos: 1) [passo] 2) [passo] 3) [passo]. Formato da resposta: [formato]. Se faltar informação, pergunte antes de responder.
```

## Modelos para colar

### Pedido: Skill: escrever no meu tom

```
Nome: escrever-no-meu-tom
Descrição: Reescreve textos no meu jeito de falar. Use quando eu pedir post, e-mail ou mensagem.
Instruções: Escreva em português do Brasil, frases curtas e linguagem de conversa. Evite palavras difíceis e termos em inglês quando houver equivalente. Meu público é [quem lê]. Exemplos do meu tom: [cole dois textos seus]. Evite texto longo demais, excesso de adjetivos e promessas que eu não posso cumprir.
```

### Pedido: Skill: responder cliente

```
Nome: responder-cliente
Descrição: Escreve resposta a mensagem de cliente. Use quando eu colar uma dúvida ou reclamação.
Instruções: 1) Identifique o que o cliente quer de fato. 2) Responda em até cinco linhas, com educação e sem jargão. 3) Em reclamação, reconheça o problema e informe o próximo passo com prazo. 4) Use só as informações que eu passar sobre preço, prazo e política; se faltar, pergunte. 5) Termine com uma pergunta que ajude a resolver.
```

### Pedido: Skill: legenda de post

```
Nome: legenda-instagram
Descrição: Escreve legenda de post. Use quando eu enviar o tema ou a imagem.
Instruções: Primeira linha com gancho curto. Depois duas ou três frases com a ideia principal. Feche com uma chamada para [comentar, salvar ou enviar mensagem]. Sem hashtags e sem emojis. Entregue duas versões com ganchos diferentes.
```

## Dica

Combine skills: uma cuida do tom e outra do formato. Também é possível deixar um arquivo fixo na skill, como a tabela de preços (confira os limites de tamanho na Ajuda).

## Avisos

Não coloque CPF, telefones, endereços ou dados de saúde em skills ou anexos; use nomes fictícios nos exemplos.

Copie as instruções dos seus Gems para um documento antes da migração.

Revise preço, prazo e informações antes de enviar ao cliente.

## Checklist final

- [ ] Nome com verbo e descrição com "Use quando"
- [ ] Testei com um caso real
- [ ] Sem dados pessoais na skill
## Quem fez

Recurso do Google (anúncio sobre skills no Gemini e Ajuda do Gemini). Guia escrito pela Oficina do BirutIA, com base no material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
