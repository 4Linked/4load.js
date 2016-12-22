


var cs = document.currentScript;
var modules = cs.getAttribute('data-modules')
var modules = JSON.parse(JSON.stringify(eval("(" + modules + ")")))
for(var i=0;i<modules.length;i++){
  var tag = document.createElement('script');
  tag.src = modules[i]['src']
  tag.async= modules[i]['async'] ? true : false
  document.body.appendChild(tag);
}
