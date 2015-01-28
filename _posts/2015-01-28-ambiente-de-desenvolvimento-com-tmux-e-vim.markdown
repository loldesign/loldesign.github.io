---
layout: post
title:  "Ambiente de desenvolvimento com Tmux e Vim"
date:   2015-01-28 16:01:41
categories: programacao
---

No final de 2014 resolvi dar uma tunada no meu ambiente. Já tinha ouvido falar do Tmux, mas nunca tinha dado uma chance pra ele.
Esse post é mais focado no Tmux, mostrando instalação e comandos, mas não sem antes dar uma passada pelo Vim.

Já uso Vim como meu editor oficial a uns 3 anos. Comecei com o [vimfiles do Akita](https://github.com/akitaonrails/vimfiles), que
para aprender foi muito bom. Com o uso você vai vendo quais plugins você gosta ou não de usar, vai criando
suas próprias [Key Mappings](http://vimdoc.sourceforge.net/htmldoc/map.html), colorschema, usando a fonte que você gosta, etc.

Hoje eu tenho meu próprio [vimfiles](https://github.com/marcosinger/vimfiles) baseado em tudo que eu vou aprendendo por ai. Dá uma olhada e se tiver alguma dica ou plugin legal, só me falar.

A última novidade foi a integração com [Tmux](http://tmux.sourceforge.net).
Tentando resumir: o Tmux é um terminal onde você pode criar sessões (tipo as do [screen](http://en.wikipedia.org/wiki/GNU_Screen)), se conectar e desconectar delas,
mas com a vantagem de ter janelas e painéis.

Antes de qualquer coisa você não precisa do Vim para usar o Tmux. É só o meu ambiente e porque eu me acho muito mais produtivo nele.
A integração entre eles fica pela questão de que, como o Vim vai estar aberto dentro de uma session do Tmux, posso alternar totalmente entre os projetos que estou trabalhando,
levando o meu editor comigo. Além disso eu uso o plugin [Tslime](https://github.com/jgdavey/tslime.vim) que manda comandos do meu Vim para qualquer session, window ou pane :)

Mas chega de falar e vamos usar!

## Instalando o Tmux ##

Para instalar é fácil: como estou no Mac posso instalar através do [brew](http://brew.sh):

`brew install tmux`

ou senão baixar [direto do site](http://downloads.sourceforge.net/tmux/tmux-1.9a.tar.gz) o source e instalar como qualquer pacote em ambiente Unix.

## Entendendo um pouco mais ##

Citei no começo sobre sessões, janelas e painéis. Eu separaria eles da seguinte forma:

* __sessões [section]__ são conjuntos de janelas;
* __janelas [window]__ são conjuntos de painéis;
* __painéis [pane]__ são divisões (horizontal e vertical) que você pode fazer em uma janela e rodar comandos dentro deles;

## Section ##

Mão na massa! Vou criar uma sessão chamada **blog** com o seguinte comando:

`tmux new-session -s blog`

Se você não passar a opção -s o nome da sessão vai ser 0, 1, 2, etc, dependendo de quantas sessões você já tem rodando.

Você vai notar que apareceu uma barra de status no seu terminal. Algo como:

![Tmux](/assets/images/tmux/tmux_statusbar.png "Session do Tmux")

Não se preocupe com essas informações que aparecem, pois não vou entrar em detalhes sobre todas elas, mas isso quer dizer que já estamos dentro de uma sessão Tmux!

## Windows e Panes ##

Até agora temos nossa sessão criada com uma janela, que aparece com o texto **0:...ing.github.io** na imagem acima.
Vamos abrir um arquivo no Vim nessa janela:

`vim NOME_DO_ARQUIVO`

Vou criar alguns panes aqui, para rodar um `git status` e um `top`, e para isso vamos dividir a tela na vertical com

`Ctrl-a %`

e depois na horizontal com

`Ctrl-a "`

(Ctrl-a é como se fosse a tecla leader no Vim. Todos os comandos são baseados nela.)

O foco deve estar no último pane criado, para mudar de panel na vertical você pode usar o atalho

`Ctrl-a <SETA PRA CIMA>` ou `Ctrl-a <SETA PRA BAIXO>`

e na horizontal usando

`Ctrl-a <SETA PRA ESQUERDA>` ou `Ctrl-a <SETA PRA DIREITA>`

Rodando os comandos que eu falei nos panes, minha window ficou assim:

![Tmux](/assets/images/tmux/tmux_blog.png "Tmux")

Agora vamos criar uma nova window para deixar o server do Redis rodando, por exemplo. Ao criar uma nova window com

` Ctrl-a c `

veja como ficou nossa barra de status:

![Tmux](/assets/images/tmux/tmux_statusbar_window.png "Tmux")

Isso significa que temos agora duas windows rodando, uma chamada **0:top** e outra **1:..ing.github.io**

Vou subir o server do Redis na nossa nova window (fique a vontade para rodar o comando que você quiser):

![Tmux](/assets/images/tmux/tmux_redis.png "Tmux")

Agora para voltar a outra window é fácil. Lembra que ela chamava 0:top? Esse número é a posição dela na session, seguido do nome realmente da window, então podemos
alternar usando `Ctrl-a 0` para ver a window com as nossas três panes ou `Ctrl-a 1` para voltar a window com o Redis-server.

Uma alternativa é usar `Ctrl-n` e `Crtl-a p`, para navegar para a próxima janela ou para a anterior, respectivamente.

O atalho para sair (apenas sair, não fechar) da nossa session, é:

` Ctrl-a d `

Com `tmux ls` podemos agora ver as sessions ativas, conectar novamente a elas com `tmux attach-session -t NOME_DA_SESSION` ou deletar usando `tmux kill-session -t NOME_DA_SESSION`

## E não para por ai ##

Isso foi só o básico do básico.
Agora segue uma listinha de links para aprender mais atalhos, entender como funciona o .tmux.conf e passar a usar a usá-lo como seu terminal definitivo.

* [Tmux - A Simple Start](http://www.sitepoint.com/tmux-a-simple-start/)
* [Tmuxinator](https://github.com/tmuxinator/tmuxinator)
* [Livro de Tmux](https://pragprog.com/book/bhtmux/tmux)
* [tmux.conf do Gregory Pakosz](https://github.com/gpakosz/.tmux)
* [Gist Andreyvit](https://gist.github.com/andreyvit/2921703)
* [Vim + Tmux - A Perfect Match](https://teamgaslight.com/blog/vim-plus-tmux-a-perfect-match)

Espero que tenham gostado. Abraço!

####by [Marco Singer](http://twitter.com/mahsinger)####
