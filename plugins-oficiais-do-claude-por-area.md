# Plugins oficiais por área de trabalho

A Anthropic publica plugins abertos para vendas, atendimento, marketing, jurídico, finanças, dados e produtividade. Veja como instalar e testar.

O repositório anthropics/knowledge-work-plugins (licença Apache-2.0, conferido no GitHub) reúne plugins feitos pela Anthropic. Cada um agrupa skills, comandos, conectores e subagentes de uma área. São arquivos de texto: dá para ler e adaptar.

## Os onze plugins listados

productivity, sales, customer-support, product-management, marketing, legal, finance, data, enterprise-search, bio-research e cowork-plugin-management (este ajuda a criar ou adaptar plugins). Plugins estão disponíveis nos planos pagos do Claude, segundo a referência consultada; confira na Central de Ajuda.

## Passo a passo

### 1. Escolha só uma área para começar

### 2. Instale

No aplicativo Claude (Cowork), vá em personalizar, plugins, descobrir, e adicione o plugin. No Claude Code, use os comandos abaixo, trocando sales pela área desejada.

### Pedido: Instalar no Claude Code

```
claude plugin marketplace add anthropics/knowledge-work-plugins
claude plugin install sales@knowledge-work-plugins
```

### 3. Teste com um pedido real

As skills entram sozinhas quando o assunto combina; os comandos aparecem ao digitar a barra (por exemplo /sales:call-prep).

## Pedidos para testar

### Pedido: Produtividade

```
Veja minhas tarefas e compromissos de [dia] e monte o meu plano: o que fazer primeiro, o que delegar e o que pode ficar para amanhã. Lista curta.
```

### Pedido: Vendas

```
Prepare minha reunião com [empresa]. Pesquise o que é público, liste cinco perguntas para eu fazer e três objeções possíveis, com uma resposta curta para cada.
```

### Pedido: Atendimento

```
Aqui estão as últimas [número] mensagens de clientes [cole sem nomes e telefones]. Agrupe por motivo, escreva uma resposta modelo para cada grupo e diga quais precisam de alguém da equipe.
```

### Pedido: Contrato

```
Leia este contrato [anexo] e mostre prazo, multa, renovação automática, reajuste e cláusulas desfavoráveis a mim. Marque o que devo levar a um advogado.
```

### Pedido: Dados

```
Analise esta planilha [anexo]. Diga as três coisas que mais mudaram em relação ao período anterior e monte um gráfico simples. Confira cada número antes de responder.
```

## Avisos

Instale somente de fontes confiáveis: um plugin pode trazer servidor local que roda com as permissões do seu computador.

Contratos, números financeiros e respostas a clientes passam por você e, quando for o caso, por advogado ou contador.

Antes de enviar dados de clientes, confira a política da sua empresa e retire o que identifica pessoas.

## Checklist final

- [ ] Instalei um plugin por vez
- [ ] Li o que ele faz antes de usar
- [ ] Revisei os resultados importantes
- [ ] Removi os que não uso
## Quem fez

Repositório da Anthropic (anthropics/knowledge-work-plugins). Guia escrito pela Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
