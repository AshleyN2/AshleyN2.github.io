document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let taskForm = document.querySelector('form')
    taskForm.addEventListener('submit', (e) => { // Enables user to click submit form
      e.preventDefault();
      buildTaskLister(e.target.new_task.value)
      taskForm.reset()
    })
  });
  
  // Enables user to type a task and it gets displayed
  
  function buildTaskLister(newTask){
    let btn = document.createElement('button')
    btn.textContent = 'X'
    btn.addEventListener('click', handleDelete)
    let p = document.createElement('p')
    p.textContent = `${newTask } `
    document.querySelector('#tasks').appendChild(p)
    p.append(btn)
    
  }
  
  // Enables user to delete a task
  
  function handleDelete(e){
    e.target.parentNode.remove()
  }
  