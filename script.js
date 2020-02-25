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

// Bestehende Todos in den Dom einfügen

todos.forEach(element => {
    const divItem = document.createElement("div");
    divItem.setAttribute('class', "inputAndLabel");
    divItem.addEventListener('onClick', changeStatus);
  
    // checkbox hinzufügen
    const newItem = document.createElement("input");
    newItem.setAttribute('class', "todoItem");
    newItem.setAttribute('type', "checkbox");
    newItem.setAttribute('id', "item" + element.id);
    newItem.addEventListener('change', changeStatus);
  
    // label hinzufügen
    const newLabel = document.createElement("label");
    newLabel.innerHTML = element.titel;
    
    divItem.appendChild(newItem);
    divItem.appendChild(newLabel);
    ul.appendChild(divItem);

    document.getElementById("todoHinzufuegenInput").value = "";
});
   

todoHinzufuegen.addEventListener('submit', hinzufuegen)

ul.addEventListener('mouseover', highlightItem);

document.body.addEventListener('click', unhighlightItem);

// über den Parameter e kann man auf alle möglichen Informationen über das entsprechende Event zugreifen --> z.B. liefert e.target das Element, welches geklickt wurde
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
    divItem.addEventListener('onClick', changeStatus);
  
    // checkbox hinzufügen
    const newItem = document.createElement("input");
    newItem.setAttribute('class', "todoItem");
    newItem.setAttribute('type', "checkbox");
    newItem.setAttribute('id', "item" + newItemCounter);
    newItem.addEventListener('change', changeStatus);
  
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
  const indexTodo = parseInt(e.target.id.substring(4)) - 1;
  todos[indexTodo].status = !todos[indexTodo].status;
  if(e.target.checked){
    e.target.parentNode.classList.add('done');
    console.log(todos[indexTodo].status);
  }
  else{
    e.target.parentNode.classList.remove('done');
    console.log(todos[indexTodo].status);
  }
  
}