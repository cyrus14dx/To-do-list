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
  document.querySelector('.date').innerHTML = `<input type="date" class="date-input">`;
} 
let List = []; 
let completList = '';
function toDoList() {  
  let text = document.querySelector('.task-input'); 
  let text2 = document.querySelector('.date-input'); 
  let name = text.value; 
  let date = text2.value; 
  List.push({name: name, date: date }); 
  renderlist(); 

}  
function renderlist(){   
    for (let i = 0 ; i < List.length ; i++) { 
    const todoObject = List[i];  
    const name = todoObject.name; 
    const date = todoObject.date;
    const html = `
            <li class="active">  
              <input class="check" type="checkbox"> 
              <p>${name}</p>  
              <p class="date-p">${date}</p> 
              <div class="icons">
                <i class="fa-regular fa-pen-to-square"></i> 
                <i class="fa-regular fa-square-minus" onclick="List.splice(${i},1);renderlist();"></i>
              </div>
            </li>  
             <div class="line"></div>`; 
    completList += html ; 
  }   
    document.querySelector('.task-list').innerHTML = completList ; 
    completList = ''; 
    closeTask();
}