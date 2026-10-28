# Transformar um livro técnico em uma skill do Claude

Em vez de anexar o livro inteiro toda vez, você extrai os princípios e cria uma skill curta que o Claude consulta quando precisa. Menos limite gasto, respostas mais seguras.

Livros e manuais técnicos têm centenas de páginas. Anexar tudo a cada pergunta consome muito limite e dilui a resposta. A alternativa é destilar o livro: guardar só o que é regra, método e checklist, em uma skill que o Claude consulta quando o assunto aparecer.

## O que entra na skill

- Os princípios e as regras do livro, com as suas palavras.
- Passos e checklists que se aplicam no seu trabalho.
- Exemplos curtos de aplicação.
- O título e o autor, e o aviso de que é um resumo.
## O que não entra

- Trechos longos copiados. Direitos autorais valem para livros: resuma, não reproduza.
- O livro inteiro. Se tudo entra, nada se destaca.
## Passo a passo

### 1. Converta o livro para texto limpo

Se for PDF, converta para Markdown. Veja o guia do MarkItDown deste site.

### 2. Extraia os princípios

Trabalhe um capítulo por vez.

### Pedido: Pedido 1 · destilar um capítulo

```
Leia este capítulo e escreva, com as suas palavras, os 5 princípios principais, o passo a passo que ele propõe e 2 erros comuns que ele alerta. Não copie trechos. Marque "a confirmar" onde o texto for ambíguo. [capítulo]
```

### 3. Monte a skill

### Pedido: Pedido 2 · criar a skill

```
Com base nos resumos abaixo, crie uma skill chamada "[nome]". Ela deve entrar em ação quando eu perguntar sobre [tema]; consultar os princípios; citar de qual capítulo vem cada recomendação; e dizer quando a pergunta foge do que o livro cobre. Mantenha o arquivo curto. [cole os resumos]
```

### 4. Teste com perguntas que você conhece

### Pedido: Pedido 3 · teste

```
Use a skill para responder estas 3 perguntas de que eu já sei a resposta pelo livro: [perguntas]. Diga em que parte da skill se baseou, e avise se faltou algo.
```

### 5. Mantenha atualizada

Se o livro tiver nova edição, refaça os capítulos que mudaram.

## Cuidados

- Direitos autorais: a skill é para o seu uso. Não publique resumos longos de obras de terceiros.
- Confira a fidelidade. Resumos de IA podem torcer o sentido. Compare com o livro nos pontos importantes.
A skill guarda o método. O livro continua sendo a fonte de verdade.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
