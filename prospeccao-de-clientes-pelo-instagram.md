# Prospecção de clientes pelo Instagram

Um conector de terceiros analisa fontes do Instagram e entrega uma lista de contas comerciais para você revisar. Veja o passo a passo e os limites legais.

Segundo a referência consultada, o Mailerfind é um serviço que pode ser ligado ao Claude como conector personalizado para analisar fontes do Instagram (seguidores de uma marca, comentários, hashtags e localização) e listar contas comerciais. É um serviço de terceiros, com plano gratuito e uso por créditos; não verifiquei seu funcionamento. Ferramentas de extração de terceiros podem ir contra as regras do Instagram. Leia os termos da plataforma e do serviço antes de usar.

## Antes de começar

- Tenha uma oferta clara: saiba que tipo de empresa compra de você.
- Foque em empresas e contas comerciais com dados públicos.
- A LGPD vale: e-mail e telefone de pessoa física são dados pessoais. Tenha motivo legítimo, identifique-se e ofereça a saída da lista.
## Passo a passo

### 1. Adicione o conector

Nas configurações do Claude, em conectores, adicione um conector personalizado usando o endereço informado na documentação oficial do Mailerfind. Entre na sua conta do serviço e autorize.

### 2. Peça a análise, confirmando o custo antes

### Pedido: Análise com confirmação de custo

```
Use o Mailerfind para analisar os seguidores da conta @[conta do meu nicho] no Instagram. Antes de executar, diga quantos créditos a análise vai usar e espere minha confirmação. Depois mostre apenas contas comerciais em tabela: nome, @, nicho, cidade, contato público disponível e fonte.
```

### 3. Filtre quem combina

### Pedido: Filtrar

```
Minha oferta é: [descreva em duas linhas]. Da lista acima, separe as 20 empresas com mais chance de precisar disso. Critérios: nicho, região [região] e contato comercial público. Explique em uma linha por que cada uma entrou.
```

### 4. Escreva um rascunho personalizado

### Pedido: Primeira mensagem

```
Escreva um e-mail curto para [empresa], com até 90 palavras, tom direto e educado. Cite algo específico do perfil dela, uma ideia concreta de como posso ajudar e termine com uma pergunta simples. Inclua uma frase dizendo que a pessoa pode pedir para não receber mais mensagens. Deixe como rascunho; não envie nada sem minha confirmação.
```

## Avisos

Mande pouco e personalizado. Disparo em massa vira spam e pode prejudicar o seu domínio.

Revise cada mensagem antes de enviar.

Não use dados de pessoas físicas sem base legal (LGPD).

Consulte o jurídico se pretende abordar em escala.

## Checklist final

- [ ] Li os termos do Instagram e do serviço
- [ ] Confirmei o custo em créditos antes de rodar
- [ ] Revisei cada mensagem
- [ ] Ofereço forma de sair da lista
## Quem fez

Mailerfind (serviço de terceiros). Guia escrito pela Oficina do BirutIA, com base no material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
