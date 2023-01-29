const addBtn = document.querySelector("#add-btn"),
Input = document.querySelector("#text");
let Tasks = document.querySelector("#tasks");
newTask = document.querySelector(".new-task input")

addBtn.addEventListener('click', ()=>{
    if(Input.value.length == 0){
        alert("Please enter a task.")
    }else{
        Tasks.innerHTML += `
        <div class="task">
            <span id="taskname"> ${Input.value}</span>
            <button class="delete">
            <i class="fa-regular fa-trash"></i>
            </button>
        </div>
        ` 
        Input.value = "";
    }
    var current_tasks = document.querySelectorAll('.delete');
    for(var i = 0 ; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    var tasks = document.querySelectorAll(".task");
    for(var i = 0 ; i < tasks.length; i++) {
        tasks[i].onclick = function(){
            this.classList.toggle("completed")
        }
    }
})