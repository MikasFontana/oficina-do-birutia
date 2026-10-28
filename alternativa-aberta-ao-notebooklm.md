# Alternativa aberta ao NotebookLM

O Open Notebook roda no seu computador, guarda seus arquivos com você e deixa escolher a IA. Veja como instalar com Docker.

O Open Notebook (repositório lfnovo/open-notebook, licença MIT, ativo no GitHub) é uma alternativa aberta ao NotebookLM/Gemini Notebook. Você envia PDFs, vídeos, áudios e páginas da web, conversa com a IA com respostas baseadas nas suas fontes e escolhe o modelo: serviços pagos (OpenAI, Anthropic, Gemini) ou modelos locais. Roda no seu computador ou servidor, e os arquivos ficam com você. Isso ajuda com material sensível, mas lembre: ao usar um modelo de nuvem, o texto enviado a ele sai do seu computador.

## Antes de começar

Instale o Docker Desktop e deixe-o aberto. Comandos e versões mudam: confira o README do projeto.

## Passo a passo

### 1. Baixe o arquivo de configuração

Em uma pasta vazia, no terminal:

### Pedido: Baixar a configuração

```
curl -o docker-compose.yml https://raw.githubusercontent.com/lfnovo/open-notebook/main/docker-compose.yml
```

Abra o arquivo e leia antes de executar.

### 2. Suba o sistema

### Pedido: Iniciar

```
docker compose up -d
```

### 3. Abra no navegador

Aguarde alguns segundos e acesse http://localhost:8502.

### 4. Configure a IA

Cadastre a chave do serviço que usa ou aponte para um modelo local.

### 5. Crie o primeiro caderno

Envie três ou quatro fontes sobre um assunto.

### Pedido: Primeira pergunta

```
Resuma os pontos principais das fontes deste caderno e cite, para cada ponto, de qual fonte ele saiu. Se algo não estiver nas fontes, diga que não está.
```

## O que dá para fazer

Pesquisa com citações, busca por significado, geração de áudios a partir das fontes e automação por interface de programação.

## Avisos

Modelos locais exigem um computador potente.

Chaves de API ficam em arquivo local, nunca no GitHub.

Confira respostas importantes na fonte citada.

## Checklist final

- [ ] Li o arquivo de configuração antes de executar
- [ ] Defini onde o modelo roda (local ou nuvem)
- [ ] Testei com fontes sem dados pessoais
## Quem fez

Open Notebook, de lfnovo (github.com/lfnovo/open-notebook). Guia escrito pela Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
