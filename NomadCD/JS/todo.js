const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //! #todo-form input
const toDoList = document.getElementById("todo-list");


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    //* input의 현재 value를 새로운 변수에 복사
    //* 그 다음에 무엇을 하든 newToDo 변수와는 상관 없음
    
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);