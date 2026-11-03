# Som para os seus vídeos feitos com o Claude: três ferramentas gratuitas e a licença de cada som

O Claude monta o vídeo em código, mas não escuta o resultado. Três ferramentas gratuitas resolvem isso: um banco de sons abertos, uma skill que encaixa o som no quadro certo e um programa que confere o áudio. Com a licença de cada uma e quais sons podem entrar em vídeo de cliente.

Quando o Claude monta um vídeo em código, ele escreve a imagem, a animação e o texto, mas não escuta o que saiu. O resultado costuma ser um vídeo mudo ou com um bipe sintético. Este guia reúne três ferramentas gratuitas que fecham essa lacuna: de onde vem o som, onde ele entra e se ficou bom.

## Como usamos esta lista

- Não copiamos nada. Cada ferramenta vem direto do repositório do autor, e as atualizações vêm de lá.
- O crédito é de quem fez. Autor, licença e link estão abaixo, conferidos em 30/10/2026.
- O nosso trabalho é explicar o papel de cada uma, avisar dos cuidados com a licença dos sons e dar pedidos prontos para testar.
Antes de instalar qualquer skill, abra o arquivo SKILL.md dela e leia. Skill é instrução, e às vezes código, que roda no seu computador.

## As três ferramentas

### 1. Openverse: o banco de sons

Buscador de mídia aberta mantido pela WordPress Foundation. Reúne sons de outros sites (Wikimedia Commons, Jamendo e Freesound, por exemplo) e tem busca no site e por API.

- Custo: gratuito. A página de termos e os limites de uso da API estão no site oficial: openverse.org.
- Cuidado importante: o Openverse junta arquivos de outros sites e você precisa conferir a licença na página original de cada som antes de usar.
### 2. Real SFX: onde cada som entra

Skill do Claude Code criada por Alexander Korbanov (Clipwing). Ela acha os momentos do vídeo que pedem som, escolhe gravações reais da sua biblioteca e encaixa cada uma no quadro exato, mantendo voz e música.

- Licença: os scripts são MIT. O pacote de sons de interface que acompanha a skill tem código MIT e sons CC0, segundo o README dela. O repositório em si não traz um arquivo de licença na raiz, então confira antes de redistribuir.
- Cuidado: ela não vem com biblioteca de efeitos. Você aponta a pasta dos seus sons, e o Openverse (com licença conferida) é uma boa fonte.
- Repositório: github.com/Clipwing/skills
### 3. earshot: o ouvido

Programa de Leon Lin (Leonxlnx), licença MIT. Descreve um som em palavras, compara com uma descrição, acha o melhor trecho de uma gravação, avalia o áudio de um vídeo e cria efeitos em código.

- Requisitos: Python 3.10 ou mais novo e FFmpeg. Roda só na CPU, sem placa de vídeo.
- Modelos: no primeiro uso baixa dois modelos abertos, cerca de 1,1 GB no total (CLAP, licença Apache 2.0, e AST, licença BSD-3-Clause).
- Privacidade: o áudio fica no seu computador. Só o comando opcional llm envia áudio para fora (para o Gemini), e exige a sua própria chave e uma confirmação explícita.
- Repositório: github.com/Leonxlnx/earshot
## A licença dos sons: o que pode entrar em vídeo de cliente

Vídeo de negócio é uso comercial. Cortar um som e sincronizar com a imagem também conta como obra derivada.

- CC0 e domínio público: pode, sem condição.
- CC BY: pode, com crédito obrigatório (título, autor, link e a informação de que foi editado).
- CC BY-SA: evite. A obra derivada precisa sair com a mesma licença.
- CC BY-NC: não use. É só para uso não comercial.
- CC BY-ND: não use. Proíbe obra derivada.
## Pedidos prontos

### Pedido: Achar e guardar sons com o crédito

```
Quero sons para um vídeo. Busque no Openverse (somente licenças CC0, domínio público e CC BY) estes tipos de som: whoosh, clique, pop e impacto leve. Baixe 5 opções de cada para a pasta Sons e, para cada arquivo, salve num arquivo de texto: título, autor, licença, endereço da página original e se exige crédito. Antes de baixar, me mostre a lista e espere o meu ok.
```

### Pedido: Pôr o som no vídeo

```
Tenho um vídeo montado em código, sem som. Use a skill real-sfx para achar os momentos que pedem efeito (entrada de texto, troca de cena, números subindo, logotipo), escolher o som certo da minha pasta Sons e colocar cada um no quadro exato. Mantenha a minha voz e a música. No fim, me entregue o vídeo novo e um relatório do que entrou em cada segundo.
```

### Pedido: Conferir o áudio antes de postar

```
Use o earshot para avaliar o áudio do meu vídeo final. Diga o que acontece em cada trecho, se algum som está alto demais ou fora do tempo da imagem, e liste as correções com o segundo exato de cada uma. Não envie nenhum áudio para fora do meu computador.
```

### Pedido: Créditos dos sons

```
Gere o texto de créditos para a descrição do vídeo, a partir do arquivo de créditos da pasta Sons. Inclua só os sons com licença CC BY, no formato: título, autor, licença e link.
```

## Cuidados

- Estas ferramentas medem o som. Elas não substituem o seu ouvido: ouça os trechos que elas apontarem, com fone e depois no alto-falante do celular, que é onde a maioria assiste.
- Confira a licença de cada som na página original, mesmo quando o Openverse já filtrou.
- Para uma voz ou um som que imite uma pessoa real, só com autorização por escrito.
- Em vídeo para crianças, ouça tudo antes: volume e sustos importam.
## Antes de publicar

- [ ] Todo som tem licença CC0, domínio público ou CC BY.
- [ ] Os créditos dos sons CC BY estão na descrição.
- [ ] Ouvi os trechos que a ferramenta apontou, no fone e no celular.
- [ ] A voz e a música continuam claras por cima dos efeitos.
## Quem fez

- Openverse: WordPress Foundation. openverse.org
- Real SFX: Alexander Korbanov, Clipwing. github.com/Clipwing/skills
- earshot: Leon Lin (Leonxlnx), licença MIT. github.com/Leonxlnx/earshot
Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.

Quer automações para a sua empresa? O BirutIA e a MLM Produções podem ajudar. www.mlmproducoes.com.br
