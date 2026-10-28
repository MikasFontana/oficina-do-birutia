# Workshop gratuito de agentes que funcionam

Um workshop gratuito de uma hora mostra como a equipe de uma empresa de programação com IA faz agentes entregarem código confiável. Veja as ideias e como aplicar.

Segundo a referência consultada, Lauren Tan, engenheira do Cursor, deu um workshop de cerca de uma hora, em inglês, mostrando o sistema que a equipe usa para que agentes de programação parem de entregar código duvidoso. A gravação está disponível gratuitamente na plataforma Maven (com cadastro gratuito). Procure o título do workshop e o nome dela; use apenas o endereço oficial da Maven e desconfie de reenvios de terceiros, que podem sair do ar. Não pude conferir os detalhes da aula, então eles seguem a referência.

## As ideias principais

- O agente é como um contratado novo: rápido, talentoso e esquecido. Ele repete erros até você escrever a regra onde ele sempre lê.
- Curva de confiança: comece revisando tudo e libere mais autonomia conforme a verificação fica sólida.
- Verificação acima de tudo: o agente deve rodar o produto e provar com evidência que funcionou.
- Mapa de funcionalidades: um índice das telas e funções, como chegar nelas e onde costumam quebrar.
- Avaliações das skills: cada skill precisa de seu próprio teste, para melhorar sem quebrar o que funcionava.
- Código pensado para agentes: testes automáticos rígidos, regras de dependência e alterações pequenas.
## Como aplicar hoje

### 1. Escreva as regras do seu projeto

Em um arquivo: estilo, o que pode e não pode, como rodar os testes.

### 2. Exija prova

### Pedido: Exigir prova

```
Ao terminar, rode o que você fez e mostre a evidência (teste passando, captura de tela ou resposta da API) antes de dizer que concluiu. Se não puder verificar, diga o que ficou sem verificação.
```

### 3. Crie um mapa de funcionalidades

### Pedido: Mapa de funcionalidades

```
Percorra este projeto e escreva um documento curto listando cada tela e função, como chegar até ela e onde costuma quebrar.
```

### 4. Diminua as tarefas

Tarefas menores geram mudanças menores, mais fáceis de revisar.

### 5. Só então use vários agentes ao mesmo tempo

Paralelizar antes de ter verificação confiável multiplica o retrabalho.

## Avisos

A aula é em inglês; use a legenda traduzida do player e confira termos técnicos.

Repositórios citados na aula devem ser lidos antes de instalar, como qualquer código de terceiros.

## Checklist final

- [ ] Assisti pelo endereço oficial
- [ ] Escrevi as regras do projeto
- [ ] Passei a exigir evidência
- [ ] Reduzi o tamanho das tarefas
## Quem fez

Workshop de Lauren Tan, disponibilizado na Maven. Curadoria da Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
