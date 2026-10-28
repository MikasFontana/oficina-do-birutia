# Vários agentes trabalhando na sua missão

O Clodfarm roda vários agentes do Claude Code em um contêiner, dia e noite, respeitando o seu limite de uso. Veja o que ele faz e os cuidados.

O clodfarm (repositório matank001/clodfarm, licença MIT, conferido no GitHub) é um projeto aberto e independente: não é da Anthropic. Ele roda vários agentes do Claude Code dentro de um contêiner. Você descreve a missão em um arquivo MISSION.md, o sistema divide em tarefas, os agentes trabalham, o comando de teste que você definiu valida, e só o que passou entra na ramificação principal do Git.

Este guia é uma apresentação para leitura. Ele exige Docker e conhecimento de programação.

## Como funciona, em palavras simples

- Fila e trabalhadores: cada tarefa vai para uma fila e cada agente trabalha em uma cópia separada do projeto.
- Planejador: quando a fila esvazia, ele lê a missão e cria as próximas tarefas.
- Testes: se o teste falha, o agente volta para corrigir.
- Controle de uso: segundo o projeto, os agentes param em 80% do uso semanal e não passam de 85% da janela de 5 horas. Com chave de API, dá para definir um teto diário de gasto.
## Modelo de missão

### Pedido: MISSION.md

```
# Missão
Objetivo: construir [descreva o app ou a melhoria em uma frase].
Escopo da primeira versão:
- [função 1]
- [função 2]
- [função 3]
Regras:
- Toda tarefa precisa de teste automatizado.
- Não altere [pastas ou arquivos que devem ficar intactos].
- Prefira tarefas pequenas.
Pronto quando: o comando de teste passar e [critério que eu consiga conferir].
```

## Avisos importantes

Por padrão os agentes rodam com permissões liberadas, e o contêiner funciona como área isolada. O próprio projeto diz que um pedido não é uma barreira de segurança. Monte apenas as pastas que eles podem alterar e dê acesso a um único repositório.

Termos de uso: o projeto recomenda usar a assinatura somente em projetos seus, com o seu login, e chave de API para trabalho comercial. Leia os termos atuais da Anthropic.

Instaladores baixados da internet devem ser lidos antes de executar.

## Checklist final

- [ ] Li o README e o instalador
- [ ] Defini o comando de teste
- [ ] Limitei as pastas e o acesso ao Git
- [ ] Usei somente em projeto meu
## Quem fez

Clodfarm é de matank001 e da comunidade (github.com/matank001/clodfarm). Curadoria da Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
