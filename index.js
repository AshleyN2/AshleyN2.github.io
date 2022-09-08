const baseApi = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
  //
  let taskForm = document.querySelector('form');
  taskForm.addEventListener('submit', (e) => { // Enables user to click submit form
    e.preventDefault();
    buildWeeklyPlanner(e.target.new_task.value);
    taskForm.reset();
    
    })
  });
// Retrieve data from our API 
  function fetchData(){
    fetch(`${baseApi}/priorities`)
    .then(response => response.json())
    .then(ldata => ldata.forEach(prior => displayList(prior)))
  }
  
  // Enables user to type a task and it gets displayed
  function buildWeeklyPlanner(newTask){
    let btn = document.createElement('button');
    btn.textContent = 'X';
    btn.addEventListener('click', handleDelete);
    let p = document.createElement('p');
    p.textContent = `${newTask } `
    document.querySelector('#tasks').appendChild(p);
    p.append(btn);
    
  }
  
  // Enables user to delete a task
  function handleDelete(e){
    e.target.parentNode.remove()
  }

// Displays the Weekly focus 
function displayList(prior){
  const content = document.querySelector('#priorities');
  const ulList = document.createElement('li');
  ulList.textContent = prior.task;
  ulList.className = 'c-list';
  const header = document.createElement('HEADER');
  header.className = 'c-header';
  header.innerHTML = prior.day;
  
  const deleteButton = document.createElement('button');
  content.append(header,ulList, deleteButton);
  ulList.appendChild(deleteButton)
  deleteButton.textContent = 'COMPLETED';
  deleteButton.addEventListener('click', () => deletePriority())

  // Enables user to delete a priority once they have accomplished it
  function deletePriority(){
    const url = `http://localhost:3000/priorities${prior.id}`;
    const url1 = `http://localhost:3000/priorities${prior.day}`;
    const requestObj = { method: 'DELETE' }; 
    fetch(url, url1, requestObj)
    .then( ulList.remove(),header.remove() )
    
  }
  }

fetchData()