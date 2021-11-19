// on form submit
let formElement = document.getElementById("todo-form"),
  textContainer = document.getElementById("form-container");

function addtask(event) {
  event.preventDefault();
  //get input value
  let todoTaskEle = document.getElementById("todo-task"),
    todoTaskValue = todoTaskEle.value,
    //create new li element
    liEle = document.createElement("li"),
    //create new span element
    spanEle = document.createElement("span"),
    //cretate done element
    doneEle = document.createElement("a"),
    //cretate edit element
    editEle = document.createElement("a"),
    //cretate delete element
    deleteEle = document.createElement("a");

  //add input value in span innerHTML
  spanEle.innerHTML = todoTaskValue;

  //add class name for each a tag
  doneEle.classList.add("done-btn");
  editEle.classList.add("edit-btn");
  deleteEle.classList.add("delete-btn");

  //add text for each a tag
  doneEle.innerHTML = "done";
  editEle.innerHTML = "edit";
  deleteEle.innerHTML = "delete";

  //add href for a tag
  doneEle.setAttribute("href", "#");
  editEle.setAttribute("href", "#");
  deleteEle.setAttribute("href", "#");

  //insert span tag for li
  liEle.appendChild(spanEle);
  //insert a.done tag for li
  liEle.appendChild(doneEle);

  //insert a.edit tag for li
  liEle.appendChild(editEle);

  //insert a.delete tag for li
  liEle.appendChild(deleteEle);
  //insert li to ol tag
  textContainer.appendChild(liEle);
}
formElement.addEventListener('submit', addtask);
