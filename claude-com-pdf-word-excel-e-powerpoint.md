# Claude com PDF, Word, Excel e PowerPoint

As quatro skills de documentos da Anthropic leem, criam e editam PDF, Word, Excel e PowerPoint. Veja como instalar e o que a licença permite.

O repositório oficial anthropics/skills (atualizado em outubro de 2026, conferido no GitHub) traz quatro skills para trabalhar com arquivos de escritório:

- pdf: lê e extrai texto, junta ou divide arquivos e trata formulários e documentos escaneados.
- docx: cria e edita arquivos do Word, com títulos, tabelas e formatação.
- xlsx: cria e edita planilhas, com fórmulas e várias abas.
- pptx: monta apresentações com slides, textos e layouts.
## Licença: atenção

Ao contrário de outras skills do mesmo repositório, as pastas dessas quatro trazem um aviso de que todos os direitos são reservados e que o uso é regido pelo seu contrato com a Anthropic. Na prática: use-as para o seu trabalho dentro do Claude, mas não copie nem redistribua os arquivos delas. Por isso elas não entram no nosso pacote de skills e este guia só mostra como instalar e usar. Confirme os termos atuais no repositório.

## Passo a passo

### 1. Instale a que você precisa

`

npx skills add https://github.com/anthropics/skills --skill pdf

`

Troque o nome no final por docx, xlsx ou pptx.

### 2. Dê o arquivo e o objetivo

Diga o que quer: resumir, extrair uma tabela, preencher um formulário, montar uma apresentação.

### 3. Confira o arquivo gerado

Abra no programa de destino, como Word, Excel ou PowerPoint, e revise.

## Pedidos prontos

### Pedido: Resumir um PDF

```
Leia este PDF e faça um resumo em tópicos, com os pontos principais, os prazos e os valores citados. Indique a página de cada informação e marque o que estiver ilegível.
```

### Pedido: Organizar uma planilha

```
Leia esta planilha, aponte linhas duplicadas e dados fora do padrão e monte uma versão organizada, mantendo a original intacta. Explique o que mudou.
```

### Pedido: Apresentação em rascunho

```
Monte uma apresentação de [número] slides sobre [tema] para [público], com um título claro em cada slide e notas do apresentador. Não invente dados: marque onde eu preciso completar.
```

## Avisos

Não envie contratos, laudos e documentos pessoais de terceiros sem autorização e sem conferir a política de privacidade do seu plano.

Documentos jurídicos, médicos e financeiros gerados pela IA são rascunhos: um profissional deve revisar.

Confira números e fórmulas antes de usar.

## Checklist final

- [ ] Li o aviso de licença
- [ ] Instalei só a skill que preciso
- [ ] Não enviei documentos de terceiros sem autorização
- [ ] Conferi o arquivo gerado antes de enviar
## Quem fez

Skills de Anthropic (github.com/anthropics/skills). Licença reservada nas quatro pastas citadas, na data da conferência. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
