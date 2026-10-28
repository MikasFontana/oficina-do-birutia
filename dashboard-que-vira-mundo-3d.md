# Um dashboard que vira um mundo 3D clicável

Em vez de gráficos de sempre, os números do seu negócio viram uma cidade ou uma oficina em 3D, onde cada prédio ou máquina conta uma parte da história. Veja como pedir, na ordem.

Dashboard comum é útil e cansativo. Um mundo em 3D, em que cada elemento representa um número, prende mais a atenção e é ótimo para apresentar resultados. A ideia é simples: escolha uma metáfora e deixe o Claude montar a cena em Three.js.

## O método em seis pedidos

### 1. Escolha a metáfora

Pergunte antes de construir.

### Pedido: Pedido 1 · metáfora

```
Tenho estes números do meu negócio: [lista]. Sugira 3 metáforas em 3D para mostrá-los, por exemplo cidade, oficina ou jardim, dizendo o que cada número viraria. Escolho uma depois.
```

### 2. Prepare os dados

Os números ficam em um arquivo à parte, para você atualizar sem mexer na cena.

### Pedido: Pedido 2 · dados separados

```
Coloque todos os números em um arquivo de dados em formato JSON, separado do código da cena. Explique como atualizá-los.
```

### 3. Monte a cena base

### Pedido: Pedido 3 · cena base

```
Crie a cena 3D da metáfora escolhida com Three.js: chão, luz suave e os elementos com tamanho proporcional aos números. Nas cores [cores]. Faça um fundo simples e leve.
```

### 4. Torne clicável

### Pedido: Pedido 4 · interação

```
Ao clicar em um elemento, mostre um cartão com o nome, o valor e uma frase explicando o que ele significa. Ao passar o mouse, o elemento deve se destacar. Permita girar a câmera com o mouse ou o dedo.
```

### 5. Cuide do celular e do acesso

### Pedido: Pedido 5 · celular e acessibilidade

```
Adapte a cena para o celular, com menos detalhes e toque em vez de mouse. Se o 3D não carregar, mostre uma tabela com os mesmos números. Respeite a opção de reduzir movimento.
```

### 6. Dê vida

### Pedido: Pedido 6 · movimento

```
Acrescente movimento discreto: elementos que crescem na entrada, uma leve flutuação e a câmera que se aproxima do item selecionado. Nada que atrapalhe a leitura dos números.
```

## Quando não usar

- Quando a decisão depende de comparar números com precisão. Gráfico comum ainda é melhor.
- Quando o público é muito leigo em tecnologia e vai acessar de aparelho antigo.
Os números continuam sendo o que importa. O 3D é a embalagem, e a tabela de apoio garante que ninguém fica sem a informação.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
