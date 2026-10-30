# O Claude testa o seu site como um visitante

A skill webapp-testing, da Anthropic, abre o seu site local, clica, preenche formulários e tira prints para conferir se tudo funciona antes de publicar.

A skill webapp-testing faz parte do repositório oficial anthropics/skills (atualizado em outubro de 2026). Na data da conferência, a pasta da skill traz a licença Apache 2.0. Pela descrição no arquivo, ela ajuda o Claude a testar aplicações web que rodam no seu computador, usando o Playwright: verifica a tela, depura o comportamento da interface, captura imagens do navegador e lê as mensagens de erro.

Na prática, em vez de abrir o site e clicar em tudo, você pede ao Claude que faça um roteiro de visita: entrar na página, clicar no botão, preencher o formulário, tirar um print.

## Passo a passo

### 1. Instale

`

npx skills add https://github.com/anthropics/skills --skill webapp-testing

`

### 2. Tenha o site rodando no seu computador

A skill é para sites locais, que estão em um endereço como localhost. Ela tem um auxiliar que liga o servidor do site durante o teste.

### 3. Peça o teste

Descreva o que um visitante faria e o que deve acontecer.

### 4. Leia o relatório e os prints

Se algo falhar, peça que o Claude explique e proponha a correção.

## Pedido para o teste

### Pedido: Visita de teste

```
Abra o meu site que está rodando em [endereço local] e faça uma visita de teste: carregue a página inicial, clique nos botões principais, preencha o formulário de contato com dados de teste e tire um print de cada etapa. Liste o que funcionou, o que falhou e o que parece estranho no celular e no computador.
```

## Avisos

Use dados de teste nos formulários, nunca dados reais de clientes.

Teste só sites seus, em ambiente local ou de teste.

O teste automático não substitui olhar o site no celular de verdade.

## Checklist final

- [ ] Instalei a skill
- [ ] Rodei o teste em um site meu
- [ ] Li o relatório e os prints
- [ ] Corrigi o que falhou e testei de novo
## Quem fez

webapp-testing, de Anthropic (github.com/anthropics/skills), licença Apache 2.0 na pasta da skill. Guia escrito pela Oficina do BirutIA, a partir da seleção da comunidade Inteligência Aplicada (consultada como referência) e do que lemos no repositório.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.
