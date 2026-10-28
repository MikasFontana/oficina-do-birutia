# Componentes prontos para interfaces bonitas

Conecte um catálogo de componentes de interface ao seu agente de programação para parar de gerar telas com cara de modelo genérico.

O 21st.dev é um catálogo de componentes de interface (React e Tailwind). Um conector (MCP) liga esse catálogo ao seu agente de programação, que passa a buscar componentes prontos, instalar no projeto e adaptar ao seu conteúdo. O repositório do conector (21st-dev/magic-mcp, licença ISC) existe e está ativo. O número de componentes, os limites do plano gratuito e a forma de gerar a chave mudam: confira em 21st.dev/mcp.

Este guia pressupõe que você já usa um agente de programação (Claude Code, Cursor ou similar).

## Passo a passo

### 1. Crie a conta e gere a chave de API em 21st.dev/mcp

Trate a chave como senha.

### 2. Instale pelo comando indicado na página oficial

Ele pede o nome do seu editor e abre o login no navegador. Se preferir, configure manualmente o bloco de MCP do seu editor com a chave, seguindo a documentação.

### 3. Reinicie o editor e teste

### Pedido: Teste

```
Use o 21st para buscar componentes de seção de abertura (hero) para uma página de consultoria e me mostre as opções.
```

## Pedidos prontos

O segredo é pedir que ele busque primeiro e só crie do zero se não achar nada bom.

### Pedido: Página completa

```
Use o 21st para montar a página do meu produto [descrição]. Para cada seção (abertura, benefícios, prova social, preços, perguntas frequentes e chamada final), busque componentes prontos no catálogo, mostre duas opções de cada e só depois instale as escolhidas. Mantenha a mesma paleta e tipografia em todas as seções.
```

### Pedido: Melhorar uma tela feia

```
Esta tela está com cara de modelo genérico. Use o 21st para buscar componentes equivalentes com design mais refinado e substitua um por um, sem mudar a lógica nem os textos.
```

### Pedido: Faixa de logos

```
Crie uma faixa com logotipos das ferramentas que uso: [lista]. Busque os logotipos em SVG pelo 21st, deixe todos em cinza e com cor ao passar o mouse.
```

### Pedido: Painel administrativo

```
Monte um painel com cartões de métricas, gráfico de linha e tabela dos últimos pedidos, usando componentes do 21st, responsivo para celular.
```

## Dica

Antes de construir, navegue no catálogo, salve três ou quatro componentes que combinam entre si e peça ao agente que use esses como referência para o resto.

## Avisos

Chave de API não vai em arquivos que sobem ao GitHub.

Confira a licença de cada componente antes de usar em projeto comercial.

Teste o resultado no celular e com leitor de tela, quando possível: acessibilidade faz parte do design.

## Checklist final

- [ ] Chave guardada com segurança
- [ ] Testei a busca
- [ ] Revisei licença e acessibilidade dos componentes
- [ ] Defini a paleta antes de montar a página
## Quem fez

21st.dev (catálogo) e o conector magic-mcp. Guia escrito pela Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
