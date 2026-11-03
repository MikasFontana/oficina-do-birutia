# Skills no Gemini no lugar dos Gems

As Skills vão substituir os Gems no Gemini. Veja o que muda, como escrever a sua primeira e modelos prontos da Oficina do BirutIA para adaptar.

Segundo a referência consultada, o Google anunciou que as Skills vão substituir os Gems no Gemini. Uma skill é um conjunto de instruções salvo uma vez e reutilizado sempre que você pede aquele tipo de tarefa. É possível usar mais de uma na mesma conversa, e elas seguem um formato aberto chamado SKILL.md, escrito em Markdown.

As datas da transição (início em outubro, migração dos Gems em novembro, fim dos Gems em contas de empresa em março de 2027) vêm da referência consultada: confira o calendário no Google Workspace Updates. As skills criadas no app do Gemini não aparecem no Gmail ou no Docs, e vice-versa.

Os modelos abaixo são skills da Oficina do BirutIA (licença MIT), em versão resumida e adaptada ao Gemini. Como o formato SKILL.md é aberto, a ideia é a mesma do Claude Code, mas não testamos o arquivo completo no Gemini: cole os modelos no chat e confira.

## Passo a passo

### 1. Escolha uma tarefa que você repete

Tarefa de uma vez só não precisa de skill.

### 2. Dê um nome que comece com verbo

Minúsculas com hífen, como nos nossos modelos: legenda-instagram, roteiro-de-reel.

### 3. Escreva a descrição com "Use quando"

É por ela que o Gemini decide quando aplicar a skill.

### 4. Escreva as instruções

Formato da resposta, passos em ordem, erros a evitar e o que fazer quando faltar informação.

### 5. Teste e ajuste

Chame a skill em uma conversa nova e corrija a instrução se a resposta sair fora do padrão.

## Modelos prontos da Oficina do BirutIA

### Pedido: Carrossel para redes sociais

```
Nome: carrossel-instagram
Descrição: Planeja carrosséis para Instagram e LinkedIn, tela por tela. Use quando eu pedir carrossel ou transformar um texto em sequência de telas.
Instruções:
1. Se faltar, pergunte o assunto, o público, a ação desejada ao final e se há cores e fontes da marca.
2. Use no máximo 6 telas: capa com promessa clara, quatro telas no meio com uma ideia cada e fechamento com uma única chamada para ação.
3. Cada tela tem até 25 palavras. Entregue: Tela N, Título, Texto e Visual sugerido.
4. Depois, escreva a legenda do post e faça uma verificação: a capa se entende sozinha? Cada tela faz sentido sem as outras?
5. Não invente dados: use [colocar dado real]. Se o assunto couber em 3 telas, faça com 3.
```

### Pedido: Roteiro de vídeo curto

```
Nome: roteiro-de-reel
Descrição: Escreve roteiros de reels e vídeos verticais curtos, cena a cena. Use quando eu pedir roteiro de vídeo curto.
Instruções:
1. Se faltar, pergunte de uma vez: assunto, público, o que a pessoa deve fazer ao final e duração.
2. Entregue três ganchos de até 12 palavras e indique o melhor.
3. Monte cenas de 3 a 6 segundos em tabela: tempo, fala e tela.
4. Feche com uma única chamada para ação e estime a duração.
5. Não invente dados nem prometa resultado garantido.
```

### Pedido: Revisor de texto

```
Nome: revisor-texto-humano
Descrição: Revisa textos para tirar o jeito de texto de IA, sem inventar fatos. Use quando eu pedir para humanizar ou revisar um texto antes de publicar.
Instruções:
1. Liste cada marca de texto de IA que encontrar, citando o trecho: abertura genérica, estrutura previsível, adjetivos de propaganda, excesso de conectores.
2. Proponha a correção de cada uma e entregue a versão revisada completa.
3. Preserve nomes, datas e termos técnicos. Não mude o sentido.
4. Onde faltar exemplo real, escreva [colocar exemplo real].
```

### Pedido: Migrar um Gem para skill

```
Abaixo estão as instruções de um Gem que eu uso. Reescreva no formato de skill: nome em minúsculas com hífen começando por verbo, descrição com "Use quando...", instruções em passos, erros comuns e o que fazer quando faltar informação. Não mude o objetivo do Gem.

[cole as instruções]
```

## Antes de instalar a skill de outra pessoa

Se você baixar uma skill pronta (de um repositório, por exemplo), leia tudo antes. Nós usamos a skill auditor-de-skills, que lê todos os arquivos sem instalar nem executar nada e entrega uma tabela de riscos, licença e dependências. Veja o guia sobre escolher skills com segurança aqui na Oficina.

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

Recurso do Google (Workspace Updates e Ajuda do Gemini). Skills de exemplo: Oficina do BirutIA (Mikas Fontana, MLM Produções), licença MIT. Guia escrito pela Oficina do BirutIA.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.

Quer automações para a sua empresa? O BirutIA e a MLM Produções podem ajudar. www.mlmproducoes.com.br
