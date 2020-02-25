function todo(id, titel, status){
  this.id = id, 
  this.titel = titel,
  this.status = status;
}

var todos = [
    {
      id: 1,
      titel: "Ikea",
      status: false
    },
    {
      id: 2,
      titel: "JS lernen",
      status: false
    },
    {
      id: 3,
      titel: "Sport",
      status: false
    },
    {
      id: 4,
      titel: "Einkaufen",
      status: false
    }
]

const todoItems = document.getElementsByClassName("todoItem");
var ul = document.getElementById("todoItems");
const ueberschrift = document.getElementById("ueberschrift");
const todoHinzufuegen = document.getElementById("todoHinzufuegenInput");
let newItemCounter = 5;

todoHinzufuegen.addEventListener('submit', hinzufuegen)

ul.addEventListener('mouseover', highlightItem);

document.body.addEventListener('click', unhighlightItem);

function highlightItem(e){
  // falls geklicktes Element == Div
    if(e.target.nodeName == "DIV"){
        for(let j = 0; j < e.target.parentNode.children.length; j++){
          e.target.parentNode.children[j].classList.remove('active');

      }  
      e.target.classList.add('active');
    }
}

function unhighlightItem(e){
  if(!e.target.classList.contains('inputAndLabel')){
    var listenelemente = document.getElementById("todoItems").children;
    for(let k = 0; k < listenelemente.length; k++){
      listenelemente[k].classList.remove('active');
    }
  }
}

function hinzufuegen(value){

  if(value != ""){

    // neues Todo-Objekt anlegen und dem Array todos hinzufügen
    var newTodo = new todo(newItemCounter, value, false);
    todos.push(newTodo);

    // neue HTML-Elemente für das entsprechende todo anlegen und in den Dom einfügen
    // div für input und label hinzufügen
    const divItem = document.createElement("div");
    divItem.setAttribute('class', "inputAndLabel");
  
    // checkbox hinzufügen
    const newItem = document.createElement("input");
    newItem.setAttribute('class', "todoItem");
    newItem.setAttribute('type', "checkbox");
    newItem.setAttribute('id', "item" + newItemCounter)
  
    // label hinzufügen
    const newLabel = document.createElement("label");
    newLabel.innerHTML = value;
    newItemCounter++;
  
    divItem.appendChild(newItem);
    divItem.appendChild(newLabel);
    ul.appendChild(divItem);

    document.getElementById("todoHinzufuegenInput").value = "";
  }
  else{
    alert("Bitte geben Sie ein Todo ein :)");
  }
}


function changeStatus(e){
  console.log("Clicked change status")
  if(e.classList.contains('done')){
    e.classList.remove('done');
  }
  else{
    e.classList.add('done');
  }
}