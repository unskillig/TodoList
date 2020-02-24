const todoItems = document.getElementsByClassName("todoItem");
var ul = document.getElementById("todoItems");
const ueberschrift = document.getElementById("ueberschrift");
const todoHinzufuegen = document.getElementById("todoHinzufuegen");
let newItemCounter = 1;

todoHinzufuegen.addEventListener('click', hinzufuegen)

ul.addEventListener('mouseover', highlightItem);

function highlightItem(e){
    if(e.target.nodeName == "LI"){
        for(let j = 0; j < e.target.parentNode.children.length; j++){
            e.target.parentNode.children[j].classList.remove('active');
        }
      e.target.classList.add('active');
    }
   
}

function hinzufuegen(){
  ul.innerHTML += "<li>Item" + newItemCounter + "</li>";
  newItemCounter++;
}

console.log("Hallo");