const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //! #todo-form input
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
    //JSON.stringify : JavaScript object나 Array 또는 어떤 Js코드던 간에 String으로 만들어줌.
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); 

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    //* input의 현재 value를 새로운 변수에 복사
    //* 그 다음에 무엇을 하든 newToDo 변수와는 상관 없음
    
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);