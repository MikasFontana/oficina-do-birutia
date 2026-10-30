# Colocar o seu site no ar com a Vercel

A skill oficial da Vercel publica o seu projeto e devolve o link. Veja o passo a passo, o que ela faz por padrão e o que conferir antes de publicar.

A skill deploy-to-vercel vem do repositório oficial vercel-labs/agent-skills (atualizado em outubro de 2026). Pela descrição no arquivo, serve para publicar aplicações e sites na Vercel: "publique o meu app e me dê o link", "coloque no ar" ou "crie uma versão de pré-visualização".

Dois pontos importantes que lemos no arquivo da skill: por padrão ela publica uma versão de pré-visualização, e só publica em produção se você pedir; e ela tenta levar o projeto para um modelo em que cada alteração enviada ao Git publica sozinha.

Licença: na data da conferência, a página do repositório não mostrava uma licença no nível principal. Por isso o guia só indica como instalar e não redistribui o conteúdo.

## O que você precisa

Uma conta na Vercel e um projeto pronto (um site criado com o Claude, por exemplo). O GitHub Pages, que usamos na Oficina, é outra opção, mais simples para sites estáticos.

## Passo a passo

### 1. Instale

`

npx skills add https://github.com/vercel-labs/agent-skills --skill deploy-to-vercel

`

### 2. Entre na sua conta da Vercel

A conta e o login são seus: faça você mesmo, no navegador ou no terminal, como a Vercel pedir.

### 3. Peça uma pré-visualização

Comece sempre pela versão de pré-visualização e confira o link.

### 4. Só depois publique em produção

Peça a versão final apenas quando tiver conferido tudo.

## Pedido para publicar com segurança

### Pedido: Pré-visualização primeiro

```
Publique este projeto na Vercel como versão de pré-visualização, não em produção. Antes, liste os arquivos que serão enviados e avise se houver senhas, chaves ou dados pessoais no projeto. Me dê o link e espere eu aprovar antes de qualquer publicação final.
```

## Avisos

Publicar torna o conteúdo acessível na internet. Revise o que está no projeto antes.

Nunca envie arquivos com senhas, chaves de API ou dados de clientes.

Confira o plano da Vercel e os limites do uso gratuito no site oficial.

## Checklist final

- [ ] Revisei o conteúdo do projeto
- [ ] Publiquei como pré-visualização primeiro
- [ ] Conferi o link no celular e no computador
- [ ] Só então pedi a publicação final
## Quem fez

Skill de Vercel (github.com/vercel-labs/agent-skills). Licença não exibida no nível principal do repositório na data da conferência. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
