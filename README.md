# 4load.js
load javascript sync and async as modules

4load is a lightweight, simple and easy to use solution that loads javascripts async and sync as modules. It's a very simple alternative to require.js for loading things simple. It promotes a modular project , consequently speedy websites by loading things faster. An advantage is that you can use javascripts which are loaded by their predecessors modules, like jquery.

HOW TO USE

your hmtl index.html
```
<script src="/js/4load.js" async data-modules="[{src: '/js/myjavascript.min.js', async: true}]"></script>
```

The myjavascript asset will load async and added the new tag to bottom of body tag. You can refer a cdn too.
