function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("closed");
  } 
  function toggleAddTask() {
    const popup = document.getElementById("task-card");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
  }
function datefun(){ 
  document.querySelector('.date-input').innerHTML = `<input type="date">`;
}