# Chamados Vix Log — pacote para gerar o APK

## O que tem nesta pasta
- `index.html` — o app (formulário, fotos, geração do PDF). Não renomeie.
- `manifest.json` — nome, cores e ícones do app.
- `sw.js` — faz o app abrir offline.
- `icones/` — ícones nos tamanhos que o Android usa.

Os quatro precisam ficar na mesma pasta, com esses nomes.

## Passo 1 — colocar num endereço https (GitHub Pages, grátis)
1. Crie uma conta em github.com.
2. **New repository** → nome `chamados-vixlog` → marque **Public** → **Create**.
3. Na tela do repositório: **Add file → Upload files**. Arraste os 4 itens
   (inclusive a pasta `icones`). Clique em **Commit changes**.
4. Menu **Settings → Pages**. Em *Source* escolha **Deploy from a branch**,
   branch **main**, pasta **/ (root)**. Salve.
5. Espere 1 a 2 minutos e recarregue a página. Vai aparecer o endereço:
   `https://SEU-USUARIO.github.io/chamados-vixlog/`
6. Abra esse endereço no celular e confira se o app carrega e gera o PDF.

O repositório público expõe só o código do app — nenhum chamado, foto ou
dado da Vix fica lá. Tudo o que é preenchido continua no celular de quem usa.

## Passo 2 — gerar o APK no PWABuilder (grátis)
1. Acesse `pwabuilder.com` no computador.
2. Cole o endereço do passo 1 e clique em **Start**.
3. Ele analisa e mostra a nota do manifest e do service worker.
4. Clique em **Package for stores → Android → Generate Package**.
5. Em *Signing key* deixe **Create new** (ele assina o APK pra você).
   **Baixe e guarde o arquivo `signing.keystore` junto com a senha** —
   sem ele você não consegue publicar atualizações do mesmo app depois.
6. Baixe o .zip. Dentro vem o `app-release-signed.apk`.

Observação: o pacote do Android vem preparado para Play Store. Para instalar
direto no celular, use o `.apk` assinado que está no zip.

## Passo 3 — instalar nos celulares
Mande o `.apk` por WhatsApp ou cabo, abra no celular e confirme
**instalar de fonte desconhecida** quando o Android pedir.
Se os aparelhos forem gerenciados pela TI, essa permissão pode estar
bloqueada — nesse caso o caminho é abrir o endereço no Chrome e usar
**Instalar aplicativo** no menu, que funciona igual e não exige APK.

## Como atualizar depois
1. Suba o `index.html` novo no GitHub (Upload files → substitui o antigo).
2. Abra `sw.js` no GitHub, clique no lápis e troque `chamados-vixlog-v1`
   por `-v2`. Salve.
3. Quem usa o endereço pelo Chrome já pega a versão nova ao abrir.
   Quem instalou o APK também, porque o APK aponta para o mesmo endereço.
   Só é preciso gerar APK novo se mudar nome, ícone ou endereço.
