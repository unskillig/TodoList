const todoItems = document.getElementsByClassName("todoItem");
var ul = document.getElementById("todoItems");
const ueberschrift = document.getElementById("ueberschrift");
const todoHinzufuegen = document.getElementById("todoHinzufuegen");
let newItemCounter = 1;

todoHinzufuegen.addEventListener('submit', hinzufuegen)

ul.addEventListener('mouseover', highlightItem);

document.body.addEventListener('mouseover', unhighlightItem);

function highlightItem(e){
  // falls geklicktes Element Listenelement
    if(e.target.nodeName == "LI"){
        for(let j = 0; j < e.target.parentNode.children.length; j++){
          e.target.parentNode.children[j].classList.remove('active');
      }  
      e.target.classList.add('active');
    }
}

function unhighlightItem(e){
  if(e.target.nodeName != "LI"){
    var listenelemente = document.getElementById("todoItems").children;
    for(let k = 0; k < listenelemente.length; k++){
      listenelemente[k].classList.remove('active');
    }
  }
}

function hinzufuegen(value){
  const newItem = document.createElement("li");
  newItem.setAttribute('class', "todoItem");
  newItem.innerHTML = value;
  newItemCounter++;
  ul.appendChild(newItem);
}