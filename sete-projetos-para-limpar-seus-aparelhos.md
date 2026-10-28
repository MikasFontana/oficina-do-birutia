# Sete projetos gratuitos para limpar e acelerar seus aparelhos

Windows, TV, celular e rede de casa: sete projetos abertos e gratuitos, com o link oficial, a licença, o risco e como desfazer cada um. Faça backup antes e mude uma coisa por vez.

Tem projeto aberto e gratuito para tirar anúncio e programa inútil do Windows, da TV, do celular e até da rede inteira da sua casa. Este guia reúne sete deles, com o link oficial, a licença, o risco real e como voltar atrás. Nós não escrevemos esses projetos: cada comando baixa direto do repositório do autor.

## Antes de mexer em qualquer um

- Faça backup. No Windows, crie um ponto de restauração. No celular, salve fotos e conversas. Na TV, anote os apps que você usa.
- Baixe só do repositório oficial. Desconfie de site com o nome do projeto que não esteja no README oficial.
- Mude uma coisa por vez. Se algo quebrar, você sabe o que causou.
- Leia antes de rodar. Quem cola um comando que baixa e executa um script confia no autor: se puder, baixe e leia o arquivo primeiro.
Todos os projetos abaixo avisam, de um jeito ou de outro, que você usa por sua conta e risco. Confira a licença e a documentação deles antes de instalar.

## Os sete projetos

### 1. Win11Debloat, para o Windows

Script que tira apps pré-instalados, desliga anúncios e rastreamento e ajusta Copilot, Recall, barra de tarefas e menu Iniciar. Licença MIT. Roda no Windows 10 e 11, com permissão de administrador. Segundo o projeto, as mudanças podem ser revertidas, e quase todos os apps voltam pela Microsoft Store (o passo a passo está na página de reversão do projeto).

Repositório: github.com/Raphire/Win11Debloat

### 2. CleanYourTV, para Android TV e Google TV

É o projeto do nosso guia "Limpe a sua TV e troque a tela inicial". Desativa apps de anúncio e instala uma tela inicial limpa, sem desinstalar nada. Licença MIT. Não funciona em Samsung, LG ou Roku.

Repositório: github.com/Gathin23/cleanyourtv

### 3. Pi-hole, para a rede de casa

Funciona como o "porteiro" da internet da casa: bloqueia domínios de anúncio e rastreamento para todos os aparelhos do Wi-Fi, sem instalar nada neles. Roda em um Raspberry Pi ou em um PC ligado o tempo todo. O projeto recomenda baixar e ler o instalador em vez de rodar tudo de uma vez. Licença: veja o arquivo do repositório.

Cuidado: se o aparelho do Pi-hole desligar e o roteador não tiver um DNS reserva, a internet da casa pode parar. Saiba como voltar o roteador ao padrão.

Repositório: github.com/pi-hole/pi-hole

### 4. UAD-ng, para o celular Android

Programa de computador com interface gráfica que lista os apps de fábrica do Android para você remover sem root. Licença GPL 3.0. O projeto avisa: use por sua conta e risco. Remover um app essencial pode travar o celular, por isso fique nos apps que o próprio programa marca como seguros.

Repositório: github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation

### 5. GPU unlock, para IA local no Linux

Módulo do Linux que remove um limite de desempenho de placas NVIDIA, para rodar cálculos de IA mais rápido. Licença GPL 2.0. Só serve para quem roda IA local no Linux: nas placas da série RTX 30 o projeto diz que está estável, e nas outras é experimental. Para desfazer, tire a opção da linha de comando do kernel e reinicie.

Repositório: github.com/Zagitta/gpu-unlock

### 6 e 7. SmartTube e ReVanced Manager: só uma menção

- SmartTube é um cliente para Android TV com bloqueio de anúncio. O projeto tem um aviso de segurança sobre versões antigas e manda baixar só pelos links oficiais do repositório, nunca de lojas ou sites de APK.
- ReVanced Manager aplica modificações em apps de celular.
Os dois mexem em apps de serviços como o YouTube e podem ir contra os termos de uso desses serviços. Por isso nós não ensinamos o passo a passo deles aqui. Se você usar, confira os termos do serviço e baixe só pelo repositório e pelo site oficiais.

## Como usar o Claude Code para isso com segurança

Antes de rodar qualquer script, peça ao Claude para ler e explicar:

### Pedido: Ler e explicar um script antes de rodar

```
Leia o arquivo [nome do script] que baixei do repositório oficial [nome do projeto]. Explique em português simples, em lista, o que acontece se eu rodar com as opções padrão: o que será desativado ou removido, o que pode dar errado e como desfazer. Marque o que eu talvez use no dia a dia e não faça nenhuma mudança até eu aprovar.
```

## Quem fez cada coisa

Cada projeto tem o seu autor e a sua licença, indicados no repositório: Raphire (Win11Debloat), Gathin23 (CleanYourTV), equipe do Pi-hole, Universal Debloater Alliance (UAD-ng), Zagitta (GPU unlock), yuliskov (SmartTube) e a equipe do ReVanced. Não temos ligação com nenhum deles. Vale a licença que está no repositório de cada um.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
