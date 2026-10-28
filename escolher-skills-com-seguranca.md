# Como achar e escolher skills com segurança

Skill é uma instrução pronta que o Claude segue. É ótima para ganhar tempo, mas é código de terceiros rodando no seu computador. Veja como achar, ler e testar antes de instalar.

Uma skill é um pacote de instruções, e às vezes de scripts, que ensina o Claude a fazer uma tarefa do seu jeito: montar um carrossel, revisar um texto, fazer uma planilha. Existem milhares, e a skill find-skills ajuda a encontrar a certa. O ponto de atenção é que uma skill pode mandar o Claude executar comandos. Por isso, ler antes de instalar faz parte do processo.

## O que é uma skill por dentro

Uma pasta com um arquivo SKILL.md e, às vezes, scripts e modelos. O SKILL.md tem o nome, a descrição e as instruções. É texto simples, e você consegue ler em dois minutos.

## Passo a passo

### 1. Descreva o que você precisa

Peça para o Claude buscar, em vez de procurar sozinho.

### Pedido: Pedido 1 · buscar skills

```
Use a skill find-skills para procurar skills que ajudem a [tarefa que você quer]. Me mostre as 5 melhores com: o que cada uma faz, de onde vem, quantas pessoas usam e qualquer sinal de risco. Não instale nada ainda.
```

### 2. Leia a skill antes de instalar

Esse é o passo que mais protege você.

### Pedido: Pedido 2 · auditoria rápida

```
Leia o SKILL.md e todos os arquivos da skill [nome] antes de instalar. Me diga em português: o que ela instrui o Claude a fazer, se roda comandos ou scripts, se acessa a internet, se lê ou grava arquivos fora da pasta do projeto e se pede alguma senha ou chave. Aponte qualquer coisa suspeita.
```

### 3. Instale só uma, e teste em pasta de teste

Teste em uma pasta com arquivos que você pode perder. Veja se ela faz o que promete.

### 4. Deixe só o que você usa

Skill parada também gasta o espaço de contexto do Claude. Remova as que você não usou em um mês.

## Checklist de segurança

- A origem é conhecida: repositório oficial ou criador com histórico?
- Tem muitas instalações e atividade recente?
- O SKILL.md descreve o que faz, sem instruções escondidas?
- Os scripts fazem só o que a descrição diz?
- Não pede senha, chave de API ou acesso a pastas fora do projeto?
Se algo parecer estranho, não instale. Uma skill a menos custa pouco, e uma instalada sem leitura pode custar caro.

Oficina do BirutIA - material gratuito. Conferido em 27/10/2026. As ferramentas de IA mudam com frequência.
