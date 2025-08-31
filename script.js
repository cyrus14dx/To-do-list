function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("closed");
} 

function toggleTask() {
  const popup = document.getElementById("task-card");
  popup.classList.toggle("is-open");
}

function closeTask() {
  const popup = document.getElementById("task-card");
  popup.classList.remove("is-open");
}

function datefun(){ 
  document.querySelector('.date').innerHTML = `<input type="date" class="date-input" style="margin-top:5px;">`;
}  

let List = JSON.parse(localStorage.getItem("inboxTasks")) || []; 
let completedList = JSON.parse(localStorage.getItem("completedTasks")) || [];  

function saveData() {
  localStorage.setItem("inboxTasks", JSON.stringify(List));
  localStorage.setItem("completedTasks", JSON.stringify(completedList));
}


function toDoList() {  
  let text = document.querySelector('.task-input'); 
  let text2 = document.querySelector('.date-input'); 
  let name = text.value; 
  let date = text2 ? text2.value : ""; 

  if (name.trim() === "") return; 

  List.push({name: name, date: date}); 
  saveData();
  text.value = ""; 
  if (text2) text2.value = "";

  renderlist(); 
}  


function renderlist(){   
  let completList = ''; 
  for (let i = 0 ; i < List.length ; i++) { 
    const todoObject = List[i];  
    const name = todoObject.name; 
    const date = todoObject.date;

    const html = `
      <li class="active">  
        <input class="check" type="checkbox" onchange="completeTask(${i})"> 
        <p>${name}</p>  
        <p class="date-p">${date}</p> 
        <div class="icons"> 
          <i class="fa-regular fa-square-minus" onclick="deleteTask(${i})"></i>
        </div>
      </li>  
      <div class="line"></div>`; 

    completList += html; 
  }   
  document.querySelector('.task-list').innerHTML = completList; 
  document.querySelector('.title').innerHTML = 'Inbox'; 
  closeTask();
}  

function deleteTask(i) {
  List.splice(i, 1);
  saveData();
  renderlist();
}


function completeTask(i) {
  const task = List.splice(i, 1)[0]; 
  completedList.push(task);          
  saveData();
  renderlist();
}


function renderCompletelist(){   
  let completedListH = ''; 
  for (let i = 0 ; i < completedList.length ; i++) { 
    const todoObject = completedList[i];  
    const name = todoObject.name; 
    const date = todoObject.date;

    const html = `
      <li class="active">  
        <input class="check" type="checkbox" checked disabled> 
        <p style="text-decoration: line-through;">${name}</p>  
        <p class="date-p">${date}</p> 
        <div class="icons"> 
          <i class="fa-regular fa-square-minus" onclick="deleteCompleted(${i})"></i>
        </div>
      </li>  
      <div class="line"></div>`; 

    completedListH += html; 
  }    
  document.querySelector('.task-list').innerHTML = completedListH; 
  document.querySelector('.title').innerHTML = 'Completed'; 
}   


function deleteCompleted(i) {
  completedList.splice(i, 1);
  saveData();
  renderCompletelist();
}


function listOfComplete() {  
  renderCompletelist();
}


function listOfInbox() {
  renderlist();
}


window.onload = () => {
  renderlist(); 
}
