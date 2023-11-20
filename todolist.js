
const input = document.querySelector("input");
const btnAdd = document.querySelector(".btn-add");
const btnDelete = document.querySelector(".btn-delete");
const ul = document.querySelector("ul");

const todosArray = JSON.parse(localStorage.getItem("todos")) || [];

window.onload = () => {
  showTodos();
};

const addTodo = () => {
  const text = input.value.trim();
  if (text !== "") {
    const todo = {
      id: todosArray.length + 1,
      text,
    };
    todosArray.push(todo);
    localStorage.setItem("todos", JSON.stringify(todosArray));
  } else {
    showError();
  }
  ul.innerHTML = "";
  input.value = "";
  showTodos();
};

const showTodos = () => {
  todosArray.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    ul.appendChild(li);
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    li.appendChild(removeBtn);

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.style.cssText =`
    margin-right:20px;
    padding:10px 20px; 
    background-color:blue;`
    li.appendChild(doneBtn);
    
    removeBtn.addEventListener("click", () => {
      deleteTodoById(todo.id);
    });
  });
};

const deleteAllDotos = () => {
  localStorage.clear();
  location.reload();
};

const deleteTodoById = (id) => {
  const todos = todosArray.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(todos));
  location.reload();
};

const showError = () => {
  const divError = document.createElement("div");
  divError.textContent = "please enter a note";
  divError.classList.add("error");
  document.body.appendChild(divError);

  const line = document.createElement("div");
  line.classList.add("line");
  divError.appendChild(line);

  const showErrorDuration = 0;
  const lineDuration = 2000;

  setTimeout(() => {
    line.style.width = "0";
  }, showErrorDuration );

  setTimeout(() => {
    divError.remove();
  }, lineDuration );
};

btnDelete.addEventListener("click", deleteAllDotos);

btnAdd.addEventListener("click", addTodo);

input.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    addTodo();
  }
});










// const input = document.querySelector("input");
// const btnAdd = document.querySelector(".btn-add");
// const btnDelete = document.querySelector(".btn-delete");
// const ul = document.querySelector("ul");
// const todosArray = JSON.parse(localStorage.getItem("todos")) || [];
// let errorDiv = document.querySelector(".error");

// window.onload = () => {
//   showTodos();
// };

// const addTodo = () => {
//   const text = input.value.trim();

//   if (text !== "") {
//     const todo = {
//       id: todosArray.length + 1,
//       text,
//     };
//     todosArray.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todosArray));
//     ul.innerHTML = "";
//     input.value = "";
//     showTodos();
//   } else {
//     showError("Please enter a note");
//   }
// };

// const showTodos = () => {
//   ul.innerHTML = ""; // Mevcut listeyi temizle
//   todosArray.forEach((todo) => {
//     const li = document.createElement("li");
//     li.textContent = todo.text;
//     ul.appendChild(li);
//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     li.appendChild(removeBtn);

//     removeBtn.addEventListener("click", () => {
//       deletTodoById(todo.id);
//     });
//   });
// };

// const deleteAllDotos = () => {
//   localStorage.clear();
//   location.reload();
// };

// const deletTodoById = (id) => {
//   const todos = todosArray.filter((todo) => todo.id !== id);
//   localStorage.setItem("todos", JSON.stringify(todos));
//   location.reload();
// };

// const showError = (message) => {
//   if (!errorDiv) {
//     errorDiv = document.createElement("div");
//     errorDiv.classList.add("error");
//     document.body.appendChild(errorDiv);
//   }

//   errorDiv.textContent = message;
//   errorDiv.style.display = "block";

//   let timeline = 3000;
//   setTimeout(() => {
//     errorDiv.style.display   = "none";
//   }, timeline);
// };

// btnDelete.addEventListener("click", deleteAllDotos);

// btnAdd.addEventListener("click", addTodo);

// input.addEventListener("keydown", (e) => {
//   if (e.keyCode == 13) {
//     addTodo();
//   }
// });
