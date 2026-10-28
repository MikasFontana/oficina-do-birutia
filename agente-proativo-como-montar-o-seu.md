# Agente proativo: como montar o seu

O Claude Duet avisa antes de você pedir, mas ainda tem lista de espera nos EUA. Veja o que ele é e como montar algo parecido com o Claude que você já tem.

O Claude Duet é um agente proativo da Anthropic, em prévia de pesquisa. Segundo a página oficial, você passa tarefas por mensagem, ele trabalha em um computador próprio na nuvem com os apps que você conectar e avisa quando termina ou precisa de uma decisão, além de enviar um resumo diário do que pede atenção. Há lista de espera para assinantes Pro e Max, somente nos EUA, e a página avisa que ele pode interpretar mal uma conversa ou errar a urgência de um assunto.

Outros detalhes (número de conexões, limites do plano) variam entre as fontes; confira na página oficial: claude.com/product/claude-duet.

## Se você está fora dos EUA: monte uma versão simples

Não é o Duet, mas dá resultado parecido com recursos que já existem.

### 1. Conecte os seus aplicativos ao Claude

Nas configurações, em conectores: e-mail, agenda e arquivos. Comece com poucos; mais conexões gastam mais do limite do plano.

### 2. Crie um projeto chamado "Meu assistente"

### Pedido: Instruções do projeto

```
Você é meu assistente executivo. Eu trabalho com [meu negócio]. Sua função é me poupar tempo e avisar somente do que importa. Regras: 1) Nunca envie mensagem, faça pagamento, assine ou apague algo sem me mostrar antes e esperar a minha aprovação. 2) Nunca mexa com investimentos nem transfira dinheiro. 3) Seja breve: no máximo cinco itens por aviso, do mais ao menos urgente. 4) Quando puder adiantar, deixe o rascunho pronto e peça só a minha aprovação.
```

### 3. Agende o resumo da manhã

Em uma tarefa agendada (por exemplo, no Cowork do aplicativo Claude Desktop), todo dia útil de manhã:

### Pedido: Resumo da manhã

```
Faça o meu resumo da manhã. Consulte o meu e-mail, a minha agenda de hoje e as pendências que eu informei. Entregue: 1) compromissos de hoje, com horário; 2) e-mails que pedem resposta hoje, com rascunho de cada resposta; 3) prazos dos próximos sete dias; 4) cobranças vencidas ou prestes a vencer. Se um item estiver vazio, escreva "nada por aqui".
```

### 4. Agende checagens ao longo do dia

### Pedido: Checagem de horário comercial

```
Confira o meu e-mail e a minha agenda desde a última checagem. Avise somente se houver algo urgente: cliente esperando, reunião alterada, cobrança vencida ou prazo para hoje. Se estiver tudo certo, responda apenas "tudo tranquilo".
```

## Avisos

Não use VPN para contornar a restrição de país: isso pode violar os termos de uso da sua conta.

Em qualquer agente, mantenha a regra de aprovação humana antes de enviar, pagar, assinar ou apagar.

Rascunhos de resposta são para você revisar, nunca para enviar sem ler.

## Checklist final

- [ ] Poucas conexões, só as necessárias
- [ ] Regras de aprovação escritas no projeto
- [ ] Resumo da manhã testado por alguns dias
- [ ] Limite do plano acompanhado
## Quem fez

Claude Duet é da Anthropic. Guia escrito pela Oficina do BirutIA, com base na página oficial e no material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
