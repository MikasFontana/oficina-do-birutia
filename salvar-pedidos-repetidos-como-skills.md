# Salvar seus pedidos repetidos como skills

Salve uma instrução uma vez e chame com uma barra no chat do Gemini. Passo a passo para criar a primeira skill, com três modelos prontos feitos pela Oficina do BirutIA.

Segundo a referência consultada, o Google lançou as skills no Gemini: instruções que você salva uma vez e chama digitando / na caixa de mensagem. É possível combinar duas ou mais e anexar arquivos de referência. Elas vão substituir os Gems, que serão migrados. Este guia complementa o guia "Skills no Gemini no lugar dos Gems". Condições (idade, ativação da atividade do Gemini, datas) estão na Ajuda do Gemini: "Create and manage skills".

Os modelos deste guia são skills da própria Oficina do BirutIA, em versão resumida: legenda-instagram, revisor-texto-humano e roteiro-de-reel. Elas foram escritas para o Claude Code, com licença MIT, e as versões completas fazem parte do nosso pacote de skills (em breve). Aqui elas aparecem adaptadas ao formato do Gemini. Não testamos o arquivo completo no Gemini: use os modelos abaixo colados no chat e confira o resultado.

## Passo a passo

### 1. Abra as configurações do Gemini e a área de Skills

### 2. Escolha como criar

Criar com o Gemini (ele faz perguntas), criar manualmente (nome, descrição e instruções) ou enviar um arquivo SKILL.md.

### 3. Dê um nome curto com verbo

Minúsculas e hífen, como nos modelos: legenda-instagram.

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

## Três modelos da Oficina do BirutIA

### Pedido: Skill: legenda-instagram

```
Nome: legenda-instagram
Descrição: Escreve legendas para posts, reels e carrosséis, com primeira linha forte, corpo curto e uma chamada para ação. Use quando eu pedir legenda ou texto para acompanhar um vídeo ou carrossel.
Instruções:
1) Se faltar, pergunte o assunto, o público, o objetivo (comentar, salvar, clicar, comprar) e o tom.
2) Primeira linha com até 12 palavras, sem começar por "Olá".
3) Corpo de 2 a 5 frases curtas, com uma ideia só.
4) Uma única chamada para ação, coerente com o objetivo.
5) Entregue duas versões com abordagens diferentes e diga qual recomenda.
6) Não invente números, resultados ou depoimentos: onde faltar, escreva [colocar dado real]. Sem promessa de resultado garantido.
```

### Pedido: Skill: revisor-texto-humano

```
Nome: revisor-texto-humano
Descrição: Revisa textos para tirar o jeito de texto de IA e deixar a voz mais natural, sem inventar fatos. Use quando eu pedir para humanizar ou revisar um texto antes de publicar.
Instruções:
1) Procure: abertura genérica, estrutura previsível, frases do mesmo tamanho, adjetivos de propaganda, conclusão que repete o texto e excesso de conectores.
2) Liste cada ocorrência, citando o trecho, e proponha a correção.
3) Entregue a versão revisada completa e uma lista curta do que mudou.
4) Se eu colar textos meus, descreva a minha voz em até oito pontos e revise nessa voz.
5) Não invente fatos nem exemplos: use [colocar exemplo real]. Não mude o sentido. Não diga que o texto "passa" em detector de IA.
```

### Pedido: Skill: roteiro-de-reel

```
Nome: roteiro-de-reel
Descrição: Escreve roteiros de reels e vídeos verticais curtos, cena a cena, com gancho, fala, o que aparece na tela e chamada para ação. Use quando eu pedir roteiro de vídeo curto.
Instruções:
1) Se faltar, pergunte de uma vez: assunto, público, o que a pessoa deve fazer ao final e duração (padrão de 30 a 60 segundos).
2) Entregue três ganchos de até 12 palavras e indique o melhor.
3) Monte cenas de 3 a 6 segundos em tabela: tempo, fala e tela.
4) Termine com uma única chamada para ação e estime a duração (cerca de 2,5 a 3 palavras por segundo).
5) Não invente dados: use [colocar dado real]. Sem promessa de ganho garantido.
```

## Dica

Combine skills: uma cuida do tom (revisor-texto-humano) e outra do formato (legenda-instagram). Também é possível deixar um arquivo fixo na skill, como a tabela de preços (confira os limites de tamanho na Ajuda).

## Avisos

Não coloque CPF, telefones, endereços ou dados de saúde em skills ou anexos; use nomes fictícios nos exemplos.

Copie as instruções dos seus Gems para um documento antes da migração.

Revise preço, prazo e informações antes de enviar ao cliente.

## Checklist final

- [ ] Nome com verbo e descrição com "Use quando"
- [ ] Testei com um caso real
- [ ] Sem dados pessoais na skill
## Quem fez

Recurso do Google (anúncio sobre skills no Gemini e Ajuda do Gemini). Skills de exemplo: Oficina do BirutIA (Mikas Fontana, MLM Produções), licença MIT. Guia escrito pela Oficina do BirutIA.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.

Quer automações para a sua empresa? O BirutIA e a MLM Produções podem ajudar. www.mlmproducoes.com.br
