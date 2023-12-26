let arr = [];
let button = document.getElementById("btnAdd");
button.addEventListener("click", function () {
  let input = document.getElementById("input").value;
  if (input.length <= 5 || input.trim == "") {
    return;
  }
  arr.push(input);
  console.log(arr);
  document.getElementById("input").value = "";
  updateList();
});
function updateList() {
  let todo = document.getElementById("list");
  todo.innerHTML = "";
  arr.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerText = item;
    //Added Edit Button
    let edit = document.createElement("button");
    edit.innerText = "edit";
    edit.addEventListener("click", () => {
      document.getElementById("input").value = arr.find(
        (item, i) => i == index
      );
      edit.style.display = "flex";
      arr.splice(index, 1);
      updateList();
    });
    //Todo Stricking or Completed
    li.addEventListener("click", function () {
      li.style.textDecoration = "line-through";
    });
    //Removing the Todos
    li.addEventListener("dblclick", function () {
      arr.splice(index, 1);
      updateList();
    });
    todo.appendChild(li);
    todo.append(edit);
  });
}
