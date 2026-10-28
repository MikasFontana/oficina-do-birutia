# Seu próprio buscador com IA

O Vane (antigo Perplexica) pesquisa na internet, lê os resultados e responde com as fontes, rodando no seu computador com Docker.

O Vane (repositório ItzCrazyKns/Vane, licença MIT; segundo a referência, antes chamado Perplexica) é um buscador com IA aberto: pesquisa na internet, lê os resultados e responde com links das fontes. Roda no seu computador, guarda o histórico localmente e permite escolher o modelo, inclusive modelos locais. A última atualização do repositório que vi foi em setembro de 2026; confira se continua mantido.

## Antes de começar

Instale o Docker Desktop e deixe-o aberto. Confira o comando atual no README.

## Passo a passo

### 1. Suba o Vane

### Pedido: Iniciar (conforme o README)

```
docker run -d -p 3000:3000 -v vane-data:/home/vane/data --name vane itzcrazykns1337/vane:latest
```

### 2. Abra no navegador

http://localhost:3000.

### 3. Escolha o modelo

Cole a chave do serviço que você usa ou aponte para um modelo local.

### 4. Faça a primeira pesquisa

### Pedido: Pesquisa com fontes

```
Quais são as novidades de IA para pequenas empresas neste mês? Responda em tópicos curtos e cite o link de cada informação.
```

## O que ele oferece

Modos de busca com profundidade diferente, busca acadêmica e em fóruns, perguntas sobre arquivos enviados e histórico local.

## Avisos

Com modelo em nuvem, suas perguntas saem do computador para o serviço escolhido.

Abra as fontes citadas antes de confiar na resposta.

Se a pesquisa depender de um serviço de busca externo, ele pode ter limites ou regras próprias.

## Checklist final

- [ ] Docker instalado
- [ ] Modelo escolhido
- [ ] Fontes conferidas nas primeiras respostas
## Quem fez

Vane, de ItzCrazyKns (github.com/ItzCrazyKns/Vane). Guia escrito pela Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
