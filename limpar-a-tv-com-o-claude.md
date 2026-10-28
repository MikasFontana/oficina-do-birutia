# Limpe a sua TV e troque a tela inicial com o Claude Code

Tire anúncios e apps que pesam da sua TV com Android TV ou Google TV e instale uma tela inicial limpa, com backup e caminho de volta. Inclui o que fazer em Samsung, LG e Roku.

Muita TV vem cheia de anúncios, recomendações e apps que você nunca abriu. Com o Claude Code e um projeto aberto chamado CleanYourTV, dá para desativar o que pesa e instalar uma tela inicial mais limpa. Nada é apagado: tudo que for desativado pode ser reativado.

## Antes de começar

- Serve para: TV com Android TV ou Google TV (TCL, Philips, Sony, Xiaomi, Hisense e outras). Se a tela inicial tem a Google Play e o Assistente do Google, quase sempre é uma delas.
- Não serve para: Samsung (Tizen), LG (webOS) e Roku. Elas usam sistemas fechados, que não aceitam outra tela inicial. Veja a seção sobre elas mais abaixo.
- Você precisa de: um computador no mesmo Wi-Fi da TV, o Claude Code instalado e uns 30 minutos com o controle na mão.
Cuidado: este método muda configurações da TV. Leia o que o Claude propõe e aprove só o que entender. Se a TV estiver na garantia, confira a política do fabricante antes.

## Passo a passo

### 1. Ligue o modo desenvolvedor na TV

Abra Configurações e entre em Sistema, Sobre (em algumas TVs, Preferências do dispositivo, Sobre). Desça até o item da versão do sistema (pode se chamar Build) e aperte OK no controle 7 vezes seguidas. Volte uma tela, abra Opções do desenvolvedor e ligue a Depuração USB. Se houver Depuração pela rede ou sem fio, ligue também. Os nomes mudam um pouco de marca para marca.

### 2. Anote o modelo e o endereço da TV

O modelo aparece em Configurações, Sobre, ou na etiqueta atrás da TV. O endereço (IP) fica em Configurações, Rede. Se você não achar, o Claude tenta encontrar a TV na rede sozinho.

### 3. Cole o pedido no Claude Code

Abra o Claude Code no computador que está no mesmo Wi-Fi e cole o pedido abaixo.

### Pedido: Limpar a TV e trocar a tela inicial

```
Quero limpar a minha TV com Android TV ou Google TV e trocar a tela inicial por uma mais limpa, usando o projeto aberto CleanYourTV (https://github.com/Gathin23/cleanyourtv). Antes de tudo, pergunte a marca e o modelo da TV e o endereço dela na rede; se eu não souber, ajude a achar. Clone o projeto, leia o README e o PROMPT.md e siga o PROMPT.md. Explique em português simples, como se eu nunca tivesse feito isso, o que vai mudar e como a ferramenta fala com a TV. Verifique o que falta no meu computador e me ajude a instalar. Diga o que devo fazer na TV (modo desenvolvedor e depuração) e espere eu confirmar. Faça o backup antes de desativar qualquer coisa, desative em lotes pequenos e confira com uma captura de tela da TV depois de cada lote. Pergunte quais apps, assistente de voz, Chromecast e atualizações eu uso antes de mexer neles. Se a TV for Samsung (Tizen), LG (webOS) ou Roku, pare e me avise, porque este método não serve para elas. No fim, me dê o comando exato para desfazer tudo e me lembre de desligar a depuração na TV. Responda sempre em português.
```

### 4. Aceite o aviso na TV

Quando aparecer na TV a pergunta "Permitir depuração USB?", marque a opção de sempre permitir a partir deste computador e confirme com OK.

### 5. Responda às perguntas do Claude

Ele vai perguntar quais apps você usa, quantos ficam na barra de baixo e se quer manter o assistente de voz, o Chromecast e as atualizações. Marque o que você usa: ele só desativa o que você não marcar.

### 6. Teste com o controle

O Claude vai pedir que você aperte botões (Netflix, YouTube, entradas HDMI). Se algum não responder, diga qual, e ele ajusta.

### 7. Desligue a depuração

Ao terminar, volte em Opções do desenvolvedor e desligue a Depuração USB e a depuração pela rede. Com ela ligada, outros aparelhos da sua rede conseguem mandar comandos para a TV.

## Se algo der errado, volte atrás

O Claude guarda um backup antes de mexer em qualquer coisa. Se quiser desfazer, peça: "Restaure a minha TV como estava antes". Ele reativa tudo que desativou.

## E se a minha TV for Samsung, LG ou Roku?

O método acima não funciona, porque não dá para instalar outra tela inicial. Mas dá para melhorar. Os nomes dos menus mudam conforme o ano da TV, então use isto como roteiro:

- Reinício completo: segure o botão de ligar do controle até a TV reiniciar. Se a TV continuar lenta, tire da tomada por 30 segundos. Isso libera a memória.
- Exclua o que você não usa: na tela de Apps, abra as configurações (a engrenagem), escolha o app e use Excluir. Alguns apps também têm a opção de limpar o cache.
- Desligue o que abre sozinho: nas configurações do Smart Hub, desative o início automático do Smart Hub e do último app, e as recomendações e os anúncios por interesse.
- Redefina o Smart Hub: apaga os dados de todos os apps e destrava a TV. Depois, reinstale só os que você usa. O PIN padrão costuma ser 0000.
- Troque o aparelho, não a TV: ligue um Android TV (como um stick de streaming) em uma entrada HDMI. Nele, este guia funciona de verdade, e a sua TV passa a ser só a tela.
Segundo o projeto, ele mantém uma página própria para essas marcas, que desliga o rastreamento com o controle: cleanyour.tv/not-android.

## Sobre o projeto usado

O CleanYourTV é um projeto aberto de Gathin23 (github.com/Gathin23/cleanyourtv). Não temos ligação com ele: o pedido acima é nosso e apenas indica o projeto. Leia a licença e o código antes de usar.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
