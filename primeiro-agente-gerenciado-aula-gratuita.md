# Seu primeiro agente gerenciado, aula gratuita

Uma aula prática da Anthropic ensina a criar um agente que trabalha sozinho. Veja como acompanhar e adaptar para uma tarefa sua.

Os Claude Managed Agents são o jeito da Anthropic de executar agentes por você: o ciclo do agente, as ferramentas e o ambiente rodam na infraestrutura dela. Em uma aula prática do evento Code with Claude 2026, a engenheira Isabella He monta ao vivo um agente que investiga incidentes. Este guia indica como acompanhar. Procure a aula na página oficial do evento; os detalhes abaixo vêm de material de referência e podem ter mudado.

Esta aula exige alguma familiaridade com programação e uma chave de API (serviço pago por uso).

## Três ideias para entender

- Agent: quem o agente é: modelo, instruções e ferramentas.
- Environment: onde ele trabalha: arquivos, pacotes e permissões.
- Session: cada execução, com a conversa e as tarefas daquela rodada.
## Passo a passo

### 1. Abra a aula e faça o cadastro, se pedido

### 2. Crie uma chave de API

No console da Anthropic. Guarde-a como variável de ambiente, nunca em texto aberto.

### 3. Baixe o repositório do workshop

O link está na página da aula.

### 4. Acompanhe pausando

Pause a cada etapa (Agent, Environment, Session) e rode o código antes de seguir.

### 5. Troque a tarefa pela sua

Por exemplo: triagem de e-mails, conferência de pedidos ou relatório semanal.

## Pedido pronto

### Pedido: Planejar o seu primeiro agente

```
Quero criar meu primeiro agente com os Claude Managed Agents. A tarefa dele: [descreva]. Sistemas e ferramentas que ele precisa acessar: [liste]. Monte para mim: 1) as instruções do agente; 2) o que o ambiente precisa ter; 3) as ferramentas próprias que devo criar; 4) os pontos em que ele deve pedir a minha aprovação antes de agir.
```

## Avisos

Comece por tarefas que apenas leem e resumem.

Deixe qualquer ação que envie, pague ou apague dependente de aprovação humana.

Acompanhe o custo das primeiras execuções.

## Checklist final

- [ ] Assisti à aula até o fim
- [ ] Chave de API guardada com segurança
- [ ] Rodei o exemplo antes de adaptar
- [ ] Defini o que exige aprovação
## Quem fez

Aula da Anthropic (Code with Claude 2026, com Isabella He). Curadoria da Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
