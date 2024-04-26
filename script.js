let form = document.querySelector("#Input_bar");
taskid = 0;

let edit_buttons = null;
let delete_buttons = null;

edit_buttons = document.querySelectorAll("#Edit");
delete_buttons = document.querySelectorAll("#Delete");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let input_field = document.querySelector("#input_field").value;
  if (input_field == "") {
    return;
  }

  let task_element = document.createElement("div");
  task_element.className =
    "Task flex justify-center items-center border border-black m-4 ml-3 sm:mr-4 mr-0 sm:ml-0 rounded-lg p-4 text-md";
  task_element.id = "task_" + taskid;
  taskid += 1;
  let complete_button = document.createElement("button");
  complete_button.id = "complete_button";
  complete_button.className = "px-3";
  let complete_span = document.createElement("span");
  complete_span.className =
    "material-symbols-outlined flex justify-center items-center";
  complete_span.innerHTML = "radio_button_unchecked";
  complete_button.appendChild(complete_span);
  task_element.appendChild(complete_button);

  let task_text = document.createElement("div");
  task_text.innerHTML = input_field;
  task_text.className = "flex-grow text-xl font-medium";
  task_text.id = "content";
  task_element.appendChild(task_text);

  let edit_button = document.createElement("button");
  edit_button.id = "Edit";
  edit_button.className = "bg-black text-white p-1  rounded-lg mx-3";
  let span_edit = document.createElement("span");
  span_edit.className =
    "material-symbols-outlined flex justify-center items-center";
  span_edit.innerHTML = "edit";
  edit_button.appendChild(span_edit);
  task_element.appendChild(edit_button);

  let delete_button = document.createElement("button");
  delete_button.id = "Delete";
  delete_button.className =
    "bg-[#FF0000] text-white px-2 py-2 rounded-lg mx-3    ";
  let span_delete = document.createElement("span");
  span_delete.className =
    "material-symbols-outlined flex justify-center items-center";
  span_delete.innerHTML = "delete";
  delete_button.appendChild(span_delete);
  task_element.appendChild(delete_button);

  let task_list = document.querySelector("#task_pool");
  task_list.appendChild(task_element);
  let input_section = document.querySelector("#input_field");
  input_section.value = "";
  edit_buttons = document.querySelectorAll("#Edit");
  delete_buttons = document.querySelectorAll("#Delete");

  edit_buttons.forEach(function (edit_button) {
    edit_button.addEventListener("click", function (e) {
      let type = edit_button.id;
      let taskElement = edit_button.closest(".Task");
      let taskText = taskElement.querySelector("#content");
      console.log(type);
      if (type === "input") {
        edit_button.innerHTML = "";
        edit_button.id = "Edit";
        let new_task_value = document.querySelector("#edit_input").value;
        taskText.textContent = new_task_value;
        let span_edit = document.createElement("span");
        span_edit.className =
          "material-symbols-outlined flex justify-center items-center";
        span_edit.innerHTML = "edit";
        edit_button.appendChild(span_edit);
      } else {
        edit_button.innerHTML = "";
        edit_button.id = "input";
        let span_edit = document.createElement("span");
        span_edit.className =
          "material-symbols-outlined flex justify-center items-center";
        span_edit.innerHTML = "save";
        edit_button.appendChild(span_edit);
        let prevTask = taskText.textContent;
        taskText.innerHTML = "";
        let input = document.createElement("input");
        input.value = prevTask;
        input.className = "flex-grow text-xl font-medium";
        input.id = "edit_input";
        taskText.appendChild(input);
        input.focus();
      }
    });
  });

  delete_buttons.forEach(function (delete_button) {
    delete_button.addEventListener("click", function (e) {
      let task_element = delete_button.closest(".Task");
      task_element.remove();
    });
  });
});
