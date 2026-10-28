# Alternativas grátis à Adobe

Um conjunto de aplicativos abertos, escritos em Rust, com interface inspirada em programas conhecidos de edição. Ainda em fase inicial: veja o que esperar.

Crafting Apps é uma família de aplicativos de código aberto do time da ArtCraft, apresentados como alternativas a programas de edição bem conhecidos, sem assinatura e sem copiar código da Adobe. Confirmei no GitHub o primeiro deles, o PhotoCraft (repositório storytold/photocraft): editor de imagens escrito em Rust, com licença MIT ou Apache-2.0 à sua escolha, que abre e salva arquivos PSD com camadas, roda no computador e também no navegador. O restante da família descrita na referência consultada (ilustração, vídeo, fotos, efeitos, diagramação e PDF) deve ser conferido no site da ArtCraft.

## Seja realista

O próprio projeto afirma que o PhotoCraft está em versão alfa inicial e ainda não substitui o Photoshop no trabalho profissional diário. Faltam recursos de IA generativa, cerca de quinze ferramentas, e a compatibilidade com plugins é um ponto fraco. Alguns formatos têm limites (por exemplo, arquivos PSD salvos podem não ficar idênticos byte a byte aos originais).

## Passo a passo

### 1. Prefira o site oficial

A página do aplicativo no site da ArtCraft (getartcraft.com) é indicada como o caminho mais fácil.

### 2. Ou baixe pelo GitHub

Na aba Releases há versões para Windows, macOS e Linux, além de uma versão para navegador. Baixe somente do repositório oficial.

### 3. Teste com cópias

Abra uma cópia dos seus arquivos e mantenha o programa que você já usa para trabalhos de clientes.

### 4. Ajude o projeto

Por ser aberto, é possível relatar problemas e pedir recursos no GitHub.

## Para quem programa

### Pedido: Instalar pelo código

```
git clone https://github.com/storytold/photocraft
cd photocraft
cargo run --release -p photocraft
```

Exige a ferramenta Rust (Cargo). Leia o README antes.

## Avisos

Baixe programas apenas dos endereços oficiais e confira a origem do arquivo.

Não use o nome ou os logotipos do projeto em versões modificadas: a marca ArtCraft não está coberta pela licença do código.

Para trabalho profissional, não troque suas ferramentas atuais por um programa em alfa sem testar bastante.

## Checklist final

- [ ] Baixei de fonte oficial
- [ ] Testei com cópia dos arquivos
- [ ] Conferi os limites de formatos
- [ ] Mantive minha ferramenta atual para clientes
## Quem fez

PhotoCraft e Crafting Apps são da equipe ArtCraft (github.com/storytold/photocraft). Curadoria da Oficina do BirutIA, com apoio do material de Guilherme Morais (@guilhermemorais.ia), consultado como referência.

Oficina do BirutIA - material gratuito. Conferido em 28/10/2026. As ferramentas de IA mudam com frequência.
