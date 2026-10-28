# WhatsApp conectado ao Claude (cuidados primeiro)

Um projeto aberto e não oficial liga o WhatsApp ao Claude Desktop. Entenda os riscos antes de qualquer instalação e veja um uso mínimo, só de leitura.

Existe um projeto aberto (lharries/whatsapp-mcp, licença MIT) que conecta o WhatsApp ao Claude Desktop por meio de um servidor MCP: o Claude pode buscar conversas, resumir grupos e rascunhar respostas. Conferi no GitHub que o repositório original não recebe atualização desde julho de 2025; a referência cita um *fork* mantido (verygoodplugins/whatsapp-mcp), que não verifiquei. Este guia é uma apresentação com cuidados; não ensina a automatizar envios.

## Leia antes de qualquer instalação

- É uma integração não oficial. Segundo a referência, os termos do WhatsApp proíbem acesso automatizado e a conta pode ser bloqueada. Confira os termos atuais do WhatsApp.
- Risco de bloqueio: a ponte entra como "aparelho conectado". Envio em massa ou automático chama atenção.
- Mensagens maliciosas: uma mensagem recebida pode tentar manipular o agente (injeção de instruções). Nunca deixe que ele envie algo sozinho.
- Privacidade: suas conversas e as de outras pessoas passariam pelo modelo de IA que você usa (LGPD).
- Projeto parado: código sem manutenção pode ter falhas de segurança.
## Se mesmo assim quiser testar

1. Use um número secundário, nunca o principal ou o da empresa.

2. Habilite somente ferramentas de leitura.

3. Deixe todo envio dependente da sua aprovação explícita.

4. Siga o README do projeto, que pede ambiente de programação (Go, Python) e um código QR para conectar o aparelho.

5. Desconecte o aparelho nas configurações do WhatsApp quando terminar.

## Pedidos de leitura (exemplos)

### Pedido: Resumo dos grupos

```
Resuma o que aconteceu hoje nos meus grupos do WhatsApp. Mostre só o que precisa de mim: quem pediu, o que pediu e até quando.
```

### Pedido: O que combinei

```
O que combinei com [nome] sobre [assunto]? Procure na conversa e traga valores, datas e o que ficou pendente.
```

### Pedido: Rascunho com aprovação

```
Escreva um rascunho de resposta à última mensagem de [nome]. Mostre o texto e NÃO envie. Só envie se eu escrever "pode enviar".
```

## Alternativa mais segura

Para atendimento de empresa, prefira a API oficial do WhatsApp Business e ferramentas homologadas.

## Avisos

Você pode perder a conta do WhatsApp.

Nunca autorize envio automático.

Dados de terceiros nas conversas exigem cuidado.

## Checklist final

- [ ] Li os termos do WhatsApp
- [ ] Uso número secundário
- [ ] Só leitura habilitada
- [ ] Aparelho desconectado ao terminar
## Quem fez

Projeto de lharries (github.com/lharries/whatsapp-mcp). Curadoria da Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
