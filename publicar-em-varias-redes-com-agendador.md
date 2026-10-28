# Publicar em várias redes com agendador

Conecte o Claude a um agendador de redes sociais para adaptar, agendar e publicar o mesmo conteúdo em cada plataforma, com a sua aprovação.

O Claude não publica nas redes sozinho: ele usa um agendador conectado. Este guia usa o Postiz, que, segundo a referência consultada, tem conector no diretório do Claude, suporta dezenas de canais e possui versão de código aberto (github.com/gitroomhq/postiz-app). Os planos são pagos, com período de teste; confira preços, teste e redes aceitas no site do Postiz. Existem alternativas, como o PostEverywhere.

## Passo a passo

### 1. Crie a conta e conecte duas ou três redes

Comece pequeno.

### 2. Conecte o Postiz ao Claude

Procure o Postiz no diretório de conectores do Claude, clique em conectar e autorize o acesso.

### 3. Teste com um post

### Pedido: Teste de adaptação

```
Mostre quais redes estão conectadas ao Postiz. Depois adapte o texto abaixo para Instagram, LinkedIn e X, respeitando o tamanho e o tom de cada rede. Mostre as três versões e espere a minha aprovação antes de agendar.

TEXTO: [cole o post]
```

### 4. Agende

### Pedido: Agendar

```
Agende as versões aprovadas para [dia] às [horário]. Se houver dados de desempenho das minhas contas, sugira antes os melhores horários.
```

### 5. Monte o calendário do mês

### Pedido: Calendário de conteúdo

```
Meu negócio: [o que vendo e para quem]. Monte um calendário de conteúdo para o próximo mês nas redes conectadas: um post por dia útil, alternando formatos (dica, bastidor, prova, oferta), adaptados a cada rede. Entregue em tabela (data, rede, formato, texto, horário). Só agende depois que eu aprovar a tabela.
```

## Avisos

Revise sempre antes de agendar: um erro sai em todas as redes ao mesmo tempo.

Cada rede tem formato próprio de imagem e vídeo (por exemplo, 9:16 para Reels).

Algumas redes e listas podem não ser suportadas pelo agendador; confira a lista oficial.

Não publique fotos ou dados de pessoas sem autorização.

## Checklist final

- [ ] Conectei poucas redes primeiro
- [ ] Aprovei cada versão antes de agendar
- [ ] Conferi formatos de imagem e vídeo
- [ ] Revisei preço do plano e fim do teste
## Quem fez

Postiz (postiz.com) e Anthropic (conectores). Guia escrito pela Oficina do BirutIA, com base no material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
