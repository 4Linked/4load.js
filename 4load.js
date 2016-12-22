


var cs = document.currentScript;
console.log(cs)
var modules = cs.getAttribute('data-modules')
var modules = JSON.parse(JSON.stringify(eval("(" + modules + ")")))

for(var i=0;i<modules.length;i++){
  var tag = document.createElement('script');
  console.log(modules[i])
  tag.src = modules[i]['src']
  tag.async= modules[i]['async'] ? false : true
  //tag.appendChild(document.createTextNode(code));
  document.body.appendChild(tag);
  console.log('here')
}
