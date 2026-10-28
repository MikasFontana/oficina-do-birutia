# Organize o seu Drive com o Claude, sem apagar nada

Pasta cheia de arquivos soltos, duplicados e nomes como "final_v3_agora". Um método em duas etapas: primeiro a IA propõe, depois você aprova e ela move, com a lista para desfazer.

Organizar arquivos na mão leva horas. Entregar o Drive inteiro a uma IA sem plano pode virar bagunça pior. O método abaixo tem uma regra: a IA só propõe, e você aprova antes de qualquer coisa ser movida. Nada é apagado.

## Antes de começar

- Trabalhe com uma pasta por vez, não com o Drive inteiro.
- Faça uma cópia de segurança da pasta, ou confirme que o Drive guarda versões.
- Use a IA em uma pasta do seu computador ou na que o Drive mostra como unidade (o Claude Code e o Cowork leem pastas locais).
- Não coloque a IA em pasta com dados sensíveis de terceiros.
## O método

### 1. Faça o diagnóstico

A IA lê e descreve, sem mexer em nada.

### Pedido: Pedido 1 · diagnóstico

```
Leia a lista de arquivos desta pasta, sem abrir, sem mover e sem apagar nada. Me diga: quantos arquivos há por tipo, quais parecem duplicados, quais têm nome genérico e quais parecem ser do mesmo assunto. Termine com 3 observações do que mais bagunça a pasta.
```

### 2. Peça uma proposta de pastas

Você vê o desenho antes de qualquer mudança.

### Pedido: Pedido 2 · proposta de estrutura

```
Com base no que você viu, proponha uma estrutura de pastas simples, com no máximo 3 níveis, em português. Mostre como uma árvore e diga qual arquivo iria para cada pasta. Não mova nada. Se um arquivo não se encaixar, coloque em "A decidir".
```

### 3. Peça a lista de renomeações

O nome certo diz o que o arquivo é, sem precisar abri-lo.

### Pedido: Pedido 3 · nomes novos

```
Proponha novos nomes para os arquivos com nome genérico, no formato AAAA-MM-DD - assunto - versão. Leia o conteúdo só quando precisar. Entregue em uma tabela com "nome atual" e "nome novo". Não renomeie nada ainda.
```

### 4. Aprove e mova

Só depois de ler as tabelas.

### Pedido: Pedido 4 · executar com segurança

```
Aprovo a estrutura e os nomes que você propôs. Agora mova e renomeie. Regras: não apague nada; se houver dois arquivos iguais, mova o mais antigo para a pasta "Duplicados para revisar"; e salve em um arquivo "desfazer.csv" o caminho antigo e o novo de cada arquivo, para eu poder voltar.
```

### 5. Confira

### Pedido: Pedido 5 · conferência

```
Compare a pasta de agora com o diagnóstico inicial. Me mostre quantos arquivos foram movidos, renomeados e deixados em "A decidir". Confirme que o total de arquivos é o mesmo de antes.
```

Duplicado só se apaga na mão, depois de você abrir os dois e escolher. A IA nunca decide isso sozinha.

## Para manter organizado

Crie uma pasta Entrada e jogue tudo nela. Uma vez por semana, peça os pedidos 2 e 4 só para o que está lá.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
