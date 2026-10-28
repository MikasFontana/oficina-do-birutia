# Equipes de skills grátis para o seu Claude: marketing, redes, design, finanças e jurídico

Seis pacotes de skills gratuitos, com o autor, a licença e o comando certo de cada um, e um primeiro pedido nosso para testar. Aqui você só aponta para a fonte: nada é copiado.

Uma skill é uma pasta de instruções que o Claude segue sempre do mesmo jeito. Alguns autores publicam pacotes inteiros, de graça, que fazem o Claude trabalhar como uma equipe de marketing, de redes sociais, de design, de finanças ou de contratos. Este guia reúne os melhores que encontramos, com o link da fonte, o nome de quem criou e a licença de cada um.

## Como usamos esta lista

- Não copiamos nada. Cada comando baixa o pacote direto do repositório do autor, e as atualizações vêm de lá.
- O crédito é de quem fez. Os nomes e as licenças abaixo foram conferidos nas páginas dos projetos em 27/10/2026.
- O nosso trabalho é escolher, avisar dos cuidados e dar um primeiro pedido para testar.
Antes de instalar qualquer skill, abra o arquivo SKILL.md dela e leia. Skill é instrução (e às vezes código) que roda no seu computador. Veja o guia "Como achar e escolher skills com segurança".

## As seis equipes

### 1. Marketing, de Corey Haines

Cerca de 50 skills (52 na nossa contagem): anúncio, texto de venda, SEO, conversão, e-mail, preço, lançamento e análise. Licença MIT. Para instalar no Claude Code:

### Pedido: Instalar a equipe de marketing

```
npx skills add coreyhaines31/marketingskills
```

Repositório: github.com/coreyhaines31/marketingskills

### 2. Redes sociais, de Charlie Hills

17 skills, pensadas para o LinkedIn e úteis em qualquer rede: voz, post, roteiro de vídeo curto, gancho, carrossel e miniatura. Licença MIT. No Claude Code, são dois comandos:

### Pedido: Instalar a equipe de redes sociais

```
/plugin marketplace add charlie947/social-media-skills
/plugin install social-media-skills
```

Repositório: github.com/charlie947/social-media-skills

### 3. Design, três skills que se completam

- UI/UX Pro Max (nextlevelbuilder): monta o sistema de design para o seu tipo de negócio. Licença MIT.
- Taste Skill (Leonxlnx): ajuda a fugir do visual com cara de feito por IA. Licença MIT. Pede Node 22 ou mais novo e um navegador instalado.
- frontend-design (Anthropic): dá direção estética ao código.
Cada uma tem a sua instalação no repositório. Ex.: github.com/nextlevelbuilder/ui-ux-pro-max-skill e github.com/Leonxlnx/taste-skill.

### 4. Finanças e 5. Jurídico, plugins oficiais da Anthropic

Estão no repositório anthropics/knowledge-work-plugins, com licença Apache 2.0. O plugin financeiro trata de lançamentos, conciliação, análise de variação e fechamento do mês. O jurídico trata de revisão de contrato, triagem de NDA e risco.

### Pedido: Instalar finanças e jurídico

```
claude plugin marketplace add anthropics/knowledge-work-plugins
claude plugin install finance@knowledge-work-plugins
claude plugin install legal@knowledge-work-plugins
```

Cuidado: o resultado dessas duas equipes é rascunho. Quem decide é o seu contador e o seu advogado. Peça sempre o padrão brasileiro (contabilidade em CPC, contratos pela lei brasileira e LGPD) e que cada ponto cite de onde saiu.

### 6. Documentos (Word, PDF, PowerPoint e Excel)

As skills de documentos da Anthropic têm o código disponível para consulta, mas com licença própria, e não de código aberto. Por isso não as copiamos nem as redistribuímos: use pelo marketplace oficial anthropics/skills, que já traz as skills de documentos.

## Um primeiro pedido para cada equipe

Instale uma equipe por vez e teste com um trabalho real desta semana.

### Pedido: Marketing: ensinar o seu negócio ao Claude

```
Antes de qualquer texto de marketing, quero que você aprenda sobre o meu negócio. Use a skill de contexto de produto do pacote instalado e me faça uma pergunta por vez sobre: o que eu vendo e para quem, o problema do cliente nas palavras dele, quem são os concorrentes, as objeções mais comuns e onde os clientes me encontram. No fim, salve o resumo no arquivo que a skill indicar e me mostre antes de seguir.
```

### Pedido: Redes sociais: escrever com a sua voz

```
Quero que as skills de redes sociais escrevam com a minha voz. Leia estes textos meus: [colar de 3 a 5 textos]. Descreva em até 8 pontos como eu escrevo (tamanho das frases, palavras que repito, o que evito) e salve como guia de voz. Só depois escreva 3 ganchos sobre [assunto] nessa voz.
```

### Pedido: Design: direção visual antes do código

```
Vou criar a página de [negócio]. Use as skills de design instaladas para propor a direção visual (paleta, fontes e estrutura) antes de escrever código. Justifique cada escolha em uma frase e espere a minha aprovação. Evite o visual padrão de página feita por IA.
```

### Pedido: Finanças: comparar dois meses

```
Com o plugin financeiro, compare [mês] com [mês anterior] a partir dos números abaixo. Explique cada variação acima de [valor ou porcentagem], diga a causa provável e a pergunta que preciso responder para confirmar. Use o padrão contábil brasileiro e marque tudo como rascunho para o meu contador. Não invente nenhum número. Números: [colar aqui]
```

### Pedido: Jurídico: triagem de contrato

```
Com o plugin jurídico, leia o contrato anexo do ponto de vista de [contratante ou contratado], pela lei brasileira. Resuma em 5 linhas e marque as cláusulas de risco em verde, amarelo e vermelho, citando o número de cada cláusula. Liste as perguntas para levar ao meu advogado. É um rascunho, não um parecer.
```

## Antes de usar o que a equipe entregou

- Marketing e redes: nenhum número, depoimento ou garantia foi inventado.
- Finanças: os valores batem com o seu extrato, linha por linha, e o contador revisou.
- Jurídico: cada ponto cita a cláusula e o advogado revisou antes da assinatura.
- Os pacotes mudam com frequência: confira a página do projeto antes de instalar e atualize de vez em quando.
## Quem fez cada coisa

Corey Haines (marketing), Charlie Hills (redes sociais), nextlevelbuilder (UI/UX Pro Max), Leonxlnx (Taste Skill) e Anthropic (finanças, jurídico, documentos e frontend-design). Não temos ligação com nenhum deles. A licença de cada um está no repositório, e vale a de lá, não a deste guia.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
