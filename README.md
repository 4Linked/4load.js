# 4load.js
load javascript sync and async as modules

4load is a simple and easy to use solution. An alternative to require.js for simple loading javascript async or sync as a module. It promotes a modular project , consequently speedy websites by loading things faster.

HOW TO USE

your hmtl index.html
```
<script src="/js/4load.js" async data-modules="[{src: '/js/myjavascript.min.js', async: true}]"></script>
```

The myjavascript asset will load async and add the new tag to bottom of body tag. You can refer a cdn too.
