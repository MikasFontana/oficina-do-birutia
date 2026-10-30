# Memória entre conversas no Claude Code

O claude-mem guarda o que aconteceu em cada sessão e devolve um resumo na próxima, para você não recomeçar do zero. Leia o que o instalador pede antes de aceitar.

Quem usa o Claude Code conhece o problema: ao abrir uma nova sessão, o assistente não lembra o que foi feito antes. O claude-mem (repositório thedotmack/claude-mem, licença Apache-2.0, atualizado em outubro de 2026, conferido no GitHub) tenta resolver isso. Segundo o projeto, ele registra o que acontece na sessão (ferramentas usadas, decisões, resumos) e devolve esse contexto comprimido nas próximas.

Pelo README, ele usa ganchos do Claude Code, um serviço local, um banco de dados SQLite no seu computador e uma busca por ferramentas de pesquisa.

## Antes de instalar: a conta

O instalador descrito no README pede que você entre no claude-mem pelo navegador, com um link enviado por e-mail, e oferece uma avaliação gratuita de 30 dias. Depois você escolhe de onde vem a "memória": do serviço do projeto, de uma chave sua (OpenRouter ou Gemini) ou do seu plano da Anthropic. Segundo o README, dá para pular esse passo usando uma opção de linha de comando. Leia cada tela antes de aceitar e escolha conscientemente quem vai processar o que o assistente registra.

## Passo a passo

### 1. Decida se faz sentido

Vale para quem trabalha em projetos longos e quer continuidade. Para tarefas rápidas, o arquivo CLAUDE.md simples costuma bastar.

### 2. Instale

`

npx claude-mem install

`

### 3. Leia o que ele pergunta

Observe a tela da conta e a escolha do provedor de memória.

### 4. Teste em um projeto sem dados sensíveis

Trabalhe uma sessão, feche e abra outra. Pergunte ao Claude o que ficou da sessão anterior.

## Pedido para conferir a memória

### Pedido: O que você lembra

```
Resuma em tópicos o que você sabe sobre este projeto a partir das sessões anteriores: o que foi feito, o que foi decidido e o que ficou pendente. Diga de onde vem cada informação e marque o que você não tem certeza.
```

## Avisos

A memória pode guardar trechos do que você escreveu e dos arquivos que o Claude leu. Evite projetos com senhas, chaves e dados de clientes.

Confira para onde vão os dados na opção que você escolheu.

Você pode desinstalar quando quiser; veja a documentação do projeto.

## Checklist final

- [ ] Li as telas do instalador antes de aceitar
- [ ] Escolhi o provedor de memória de propósito
- [ ] Testei em um projeto sem dados sensíveis
## Quem fez

claude-mem, de thedotmack (github.com/thedotmack/claude-mem), licença Apache-2.0. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
