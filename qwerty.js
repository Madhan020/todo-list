function addtask() {
    const task = document.getElementById("newtask").value;
    if (task.length > 0) {
        document.getElementById("tasklist").innerHTML += "<div class='task'>" +"<div class='box'>"+ task +"</div>"+ "<button onclick='deleteTask(this)'>DELETE</button></div>";
    }
    document.getElementById("newtask").value = "";
}
function deleteTask(element) {
    element.parentElement.remove();
}