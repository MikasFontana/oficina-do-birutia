# Personalizar o Gemini com instruções e skills

Instruções fixas, skills para tarefas repetidas e apps conectados: tudo para deixar o Gemini com o seu jeito, com skills da Oficina do BirutIA como ponto de partida.

Segundo a referência consultada, o app do Gemini ganhou um menu de personalização (em inglês, *Customize*) reunindo três coisas: instruções que valem para toda conversa, skills (conjuntos de instruções salvas para tarefas que você repete) e apps conectados. A liberação é gradual, a lista de apps varia por conta e país, e as skills são, por enquanto, para maiores de 18 anos. Se algo não bater com a sua tela, procure o mesmo nome em Configurações e na Ajuda do Gemini.

As skills usadas como exemplo aqui são da Oficina do BirutIA (licença MIT), feitas originalmente para o Claude Code. Aqui aparecem em versão resumida, para colar no chat. Não testamos o arquivo completo no Gemini.

## Passo a passo

### 1. Abra o menu de personalização

Se ainda não aparecer, a instrução fixa do passo 2 costuma funcionar pelas Configurações.

### 2. Escreva as instruções fixas

### Pedido: Instruções fixas

```
Sou [profissão] e trabalho com [área ou tipo de cliente]. Responda sempre em português do Brasil, em tom [direto, leve ou formal], com frases curtas. Comece pela resposta e explique depois, se necessário. Quando faltar informação importante, pergunte antes de supor. Quando citar número ou fato, diga de onde veio.
```

### 3. Crie a primeira skill: o seu estilo de escrita

Esta é a nossa skill revisor-texto-humano, que aprende a sua voz e tira o jeito de texto de IA. Substitua o texto entre colchetes.

### Pedido: Skill: revisor-texto-humano

```
Vou colar três textos que escrevi. Descreva o meu jeito de escrever em até oito pontos (tamanho das frases, tom, palavras que repito, o que evito). Depois salve isso como uma skill chamada "revisor-texto-humano", com estas regras: ao receber um texto, procure abertura genérica, estrutura previsível, frases do mesmo tamanho, adjetivos de propaganda e conclusão que repete o texto; liste cada ocorrência, proponha a correção e entregue a versão revisada na minha voz; nunca invente fatos ou exemplos (use [colocar exemplo real]) e não mude o sentido. Textos: [cole aqui]
```

Para chamar uma skill, digite @ e o nome dela na caixa de mensagem.

### 4. Conecte poucos apps

Cada app ligado dá ao Gemini acesso ao que há nele. Ligue um, teste, e só depois o seguinte.

## Outros pedidos úteis

### Pedido: Skill: legenda-instagram

```
Crie uma skill chamada "legenda-instagram": ao receber um assunto, pergunte o que faltar (público, objetivo e tom) e entregue duas versões de legenda. Cada versão tem primeira linha de até 12 palavras, corpo de 2 a 5 frases curtas e uma única chamada para ação. Nunca invente números ou depoimentos: use [colocar dado real].
```

### Pedido: E-mail com app conectado

```
Veja os e-mails dos últimos sete dias que ainda estão sem resposta e mostre os cinco mais importantes, com um rascunho curto de resposta para cada. Não envie nada: eu reviso e envio.
```

### Pedido: Semana organizada

```
Veja a minha agenda da próxima semana e diga quais dias estão cheios, onde cabe um bloco de duas horas para [tarefa] e quais reuniões parecem dispensáveis. Apenas sugira, sem alterar a agenda.
```

## Avisos

Peça sempre rascunho e revise antes de enviar e-mail, marcar compromisso ou mexer em arquivos.

Não coloque CPF, senhas, dados de saúde ou informações de clientes nas instruções e skills.

Para apagar o que o Gemini guardou, revise as instruções e o histórico de atividade.

## Checklist final

- [ ] Instruções fixas salvas
- [ ] Uma skill criada e testada
- [ ] Apenas os apps necessários conectados
## Quem fez

Recurso do Google (notas de versão do app Gemini e Ajuda do Gemini). Skills de exemplo: Oficina do BirutIA (Mikas Fontana, MLM Produções), licença MIT. Guia escrito pela Oficina do BirutIA.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.

Quer automações para a sua empresa? O BirutIA e a MLM Produções podem ajudar. www.mlmproducoes.com.br
