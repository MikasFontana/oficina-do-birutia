# Automações no Manus

O Manus 2.0 permite automações agendadas ou disparadas por eventos. Veja como criar a primeira com segurança.

O Manus é um agente de IA. Segundo a referência consultada, a versão 2.0 (lançada em 28/09/2026) trouxe *Automations*: você diz o que deve acontecer e quando, e o agente começa a tarefa sozinho. As informações de desempenho e preços vêm da empresa e não foram conferidas por nós; verifique no site do Manus e na documentação de Automations. Há plano gratuito com créditos limitados, e cada execução gasta créditos.

## Três tipos

- Agendada: em dia e horário fixos (resumo diário, relatório semanal).
- Por evento: começa quando algo acontece em um app conectado (chegou um e-mail com anexo, entrou um pedido).
- Avançada (beta): você descreve o fluxo inteiro em texto.
## Passo a passo

### 1. Abra Automations e escolha o tipo

### 2. Conecte o app necessário

Sem autorização, a automação para. Conecte apenas o que ela precisa.

### 3. Defina o gatilho com precisão

Troque "fim do dia" por "dias úteis às 18h, horário de Brasília".

### 4. Descreva o resultado e o destino

### 5. Teste antes de ligar

Um caso que deve disparar e outro que deve ser ignorado.

### 6. Acompanhe as execuções

Pause e corrija se algo sair torto.

## Pedidos prontos

### Pedido: Resumo do dia (agendada)

```
Todo dia útil às [horário], horário de Brasília, leia os e-mails recebidos desde o mesmo horário do dia anterior. Separe em três blocos: precisa da minha resposta hoje, pode esperar, só informativo. Para cada item do primeiro bloco, escreva um rascunho curto no meu tom [descreva]. Entregue tudo em um único resumo e nunca envie nada sem a minha aprovação.
```

### Pedido: Relatório semanal (agendada)

```
Toda [dia da semana] às [horário], reúna os dados de [fonte] da semana anterior e monte um relatório de uma página: o que subiu, o que caiu, o maior destaque e dois pontos de atenção, comparando com a semana anterior. Salve em [destino]. Se faltar algum dado, avise no topo e siga com o que houver.
```

### Pedido: Nota fiscal por e-mail (por evento)

```
Quando chegar um e-mail com anexo em PDF e a palavra [nota fiscal ou boleto] no assunto, extraia fornecedor, valor, vencimento e número. Acrescente uma linha na planilha [nome] e salve o anexo na pasta [nome]. Se algum campo não estiver legível, marque como "conferir" e me avise.
```

### Pedido: Preparação de reunião (por evento de agenda)

```
Uma hora antes de cada compromisso com a palavra [cliente] no título, busque no meu e-mail as últimas conversas com os participantes e monte um resumo: quem é a pessoa, o que foi combinado, pendências e perguntas para eu fazer. Entregue em [destino].
```

## Avisos

Comece com frequência diária ou semanal; automação frequente gasta créditos o tempo todo.

Peça rascunho em tudo que sai para cliente, fornecedor ou banco. Enviar, pagar e publicar ficam com você.

E-mails, pedidos e notas fiscais têm dados pessoais (LGPD): use só o necessário e guarde o resultado em local restrito.

A automação avançada está em beta e menus podem mudar.

## Checklist final

- [ ] Testei com caso que dispara e caso que não dispara
- [ ] Conectei só os apps necessários
- [ ] Defini quem aprova antes de enviar
- [ ] Acompanho o gasto de créditos
## Quem fez

Manus (anúncio "Introducing Manus 2.0" e documentação). Guia escrito pela Oficina do BirutIA, com base no material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
