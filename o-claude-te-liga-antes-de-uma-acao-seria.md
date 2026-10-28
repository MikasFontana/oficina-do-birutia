# O Claude te liga antes de uma ação séria

Conecte um serviço de ligações por voz de IA ao Claude Code para receber uma chamada de sim ou não antes de ações importantes, como apagar arquivos.

A Bland é uma plataforma de ligações telefônicas por voz de IA e, segundo a referência consultada, oferece um servidor MCP que dá ao Claude Code ferramentas para fazer uma ligação, esperar o fim dela e ler a transcrição. A ideia: você deixa o Claude trabalhando, e antes de algo sério o seu celular toca; uma voz explica o que ele pretende fazer e pergunta se pode.

Atenção ao que não foi confirmado: a documentação consultada não garante ligações para números do Brasil (+55) nem a qualidade do português. Faça um teste antes de depender disso. O custo é por minuto e muda; confira na página de preços da Bland.

## Passo a passo

### 1. Crie a conta na Bland e gere uma chave de API

Trate a chave como senha: não compartilhe nem mostre em capturas de tela.

### 2. Conecte o servidor ao Claude Code

Siga a documentação oficial da Bland ("Claude Code") para o comando exato do seu sistema, pois ele depende do seu terminal e da chave. Depois, no Claude Code, use /mcp para ver as ferramentas.

### 3. Faça uma ligação de teste

### Pedido: Teste de ligação

```
Faça uma ligação de teste para o meu número usando a Bland. A voz deve falar em português: "Olá, aqui é o seu Claude. Este é um teste. Está me ouvindo bem?" Espere a ligação terminar e mostre a transcrição.
```

### 4. Escreva as regras de quando ligar

Coloque no arquivo CLAUDE.md do projeto ou no início da conversa.

### Pedido: Regras de ligação

```
Você tem acesso ao servidor MCP da Bland, que faz ligações. Meu número é [número em formato internacional]. Ligue para mim: 1) ANTES de apagar qualquer arquivo ou pasta; 2) ANTES de sobrescrever um arquivo que você não criou nesta sessão; 3) ANTES de qualquer ação irreversível, publicação, envio ao exterior ou gasto de dinheiro; 4) ao terminar uma tarefa longa. Como ligar: a voz fala em português, em até três frases, explicando o que pretende fazer, por quê, e termina com uma pergunta de sim ou não. Depois espere a ligação terminar e leia a transcrição. Só prossiga se eu disser sim com clareza. Se eu não atender ou a resposta for confusa, não faça nada e deixe um resumo aqui no chat. Limites: no máximo [3] ligações por hora; nunca ligue para outro número; nunca diga senhas, chaves ou dados pessoais na ligação.
```

## Avisos

A ligação soma com, e não substitui, a revisão de permissões do Claude Code.

Aprove só o que você entende ao autorizar ferramentas novas.

Se a chave vazar, gere outra no painel da Bland e apague a antiga.

Cada minuto custa: mantenha o limite de ligações por hora.

## Checklist final

- [ ] Testei a ligação no meu número
- [ ] Confirmei que a voz fala bem em português
- [ ] Defini o limite de ligações por hora
- [ ] Chave guardada com segurança
## Quem fez

Bland (documentação oficial, seção Claude Code e MCP). Guia escrito pela Oficina do BirutIA, com base no material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
