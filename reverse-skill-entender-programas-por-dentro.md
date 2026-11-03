# Reverse-skill: entender programas por dentro

Um pacote de skills ajuda agentes de IA a estudar aplicativos e programas. Veja como auditar o pacote com uma skill da Oficina antes de instalar, e use só em alvos seus ou autorizados.

A reverse-skill (repositório zhaoxuya520/reverse-skill, licença MIT, conferido no GitHub) é um pacote de skills que orienta agentes de IA de programação em tarefas de engenharia reversa e pesquisa de segurança. Segundo a referência, ela funciona como um roteador: você descreve a tarefa, ela identifica o tipo de alvo, verifica quais ferramentas estão instaladas e conduz o método, terminando com um relatório de achados.

Uso permitido apenas em sistemas seus ou com autorização por escrito do dono. Analisar ou invadir sistemas de terceiros sem permissão é crime. O próprio repositório restringe o uso a pesquisa legal, estudo, competições de segurança e sistemas autorizados.

Como o pacote executa comandos no seu computador, a regra aqui é auditar antes de instalar. Para isso usamos uma skill nossa, a auditor-de-skills (Oficina do BirutIA, licença MIT), que só lê: nunca instala, nunca executa os scripts e nunca apaga nada.

## Para que serve (usos legítimos)

- Auditar o seu próprio aplicativo antes de lançar.
- Entender o que faz um sistema antigo da sua empresa.
- Estudar segurança em competições do tipo CTF.
- Analisar um arquivo suspeito, em máquina virtual isolada.
## Pré-requisitos

Um agente de programação com suporte a skills, Node.js e Python recentes (veja as versões no README) e, para aplicativos Android, o Java. Há conhecimento técnico envolvido: se você está começando com IA em conteúdo, vendas ou atendimento, este não é o ponto de partida.

## Passo a passo resumido

1. Leia o README e as regras de uso do repositório.

2. Baixe o pacote para uma pasta de teste, sem instalar.

3. Audite com a skill auditor-de-skills (pedido abaixo) e só continue se o veredito for "Pode instalar" ou "Instalar com ressalvas" que você aceita.

4. Instale conforme o README e abra o agente dentro da pasta do projeto.

5. Deixe a skill listar as ferramentas já instaladas.

6. Descreva a tarefa e declare que o alvo é seu ou autorizado.

### Pedido: Auditar antes de instalar

```
Use a skill auditor-de-skills na pasta [caminho da pasta baixada]. Leia todos os arquivos, inclusive os scripts, sem executar nada. Entregue a tabela com: o que faz, scripts, acesso à internet, leitura ou gravação fora da pasta, senhas ou chaves, licença e dependências, citando arquivo e trecho de cada achado. Termine com o veredito em uma linha e diga o que você não conseguiu verificar.
```

### Pedido: Exemplo de pedido autorizado

```
Tenho o pacote do aplicativo da minha empresa nesta pasta. Quero entender com quais servidores ele se comunica e se há informação sensível exposta no código. O aplicativo é nosso e tenho autorização para analisá-lo. Defina o escopo antes de agir e entregue um relatório com as provas.
```

## Avisos

Não rode em sistemas de clientes sem autorização formal do dono.

Arquivos suspeitos (possíveis vírus) só em máquina virtual separada, nunca no computador principal.

A IA executa comandos no seu computador: leia o que ela vai rodar antes de aprovar.

A auditoria da auditor-de-skills é uma leitura, não uma garantia: ela mesma lista o que não conseguiu verificar.

O projeto muda rápido: confira o README.

## Checklist final

- [ ] O alvo é meu ou autorizado por escrito
- [ ] Auditei o pacote antes de instalar
- [ ] Ambiente isolado para arquivos suspeitos
- [ ] Revisei os comandos antes de aprovar
## Quem fez

reverse-skill, de zhaoxuya520 (github.com/zhaoxuya520/reverse-skill). Skill de auditoria: Oficina do BirutIA (Mikas Fontana, MLM Produções), licença MIT. Curadoria da Oficina do BirutIA.

Oficina do BirutIA - material gratuito. Conferido em 30/10/2026. As ferramentas de IA mudam com frequência.

Quer automações para a sua empresa? O BirutIA e a MLM Produções podem ajudar. www.mlmproducoes.com.br
