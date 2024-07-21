const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "",
    dueDate: "",
  },
];
//{ name: "make dinner", dueDate: "01/30/2024" },
//{ name: "study", dueDate: "01/30/2024" },

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name; same as the below line the below line syntax called destructuring
    // const dueDate = todoObject.dueDate;

    const { name, dueDate } = todoObject;

    todoListHTML += `
      <div>${name}</div> <div>${dueDate}</div> 

      <button onclick = "removeItem(${i});  renderTodoList();" class= "delete-todo-button">Delete</button>
    `;
  }

  document.querySelector(".todolist-content").innerHTML = todoListHTML;
}

function removeItem(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addTodo() {
  const inputElement = document.querySelector(".input-todo-list");
  const name = inputElement.value;
  if (name === "") {
    alert("Enter Todo Name:");
    return;
  }
  const dateElement = document.querySelector(".date-todolist");
  const dueDate = dateElement.value;

  if (dueDate === "") {
    alert("Enter Date:");
    return;
  }

  todoList.push({ name, dueDate }); // here we use the shorthand property as the property name is same as the variable name: name

  localStorage.setItem("todoList", JSON.stringify(todoList));

  renderTodoList();

  inputElement.value = ``;
}