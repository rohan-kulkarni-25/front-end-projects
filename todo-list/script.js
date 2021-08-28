const taskList = [
]

const addTask = () => {
  const data = document.getElementById('inp-title').value
  if ((data != '')) {


    const obj = {
      taskNo: taskList.length,
      taskTitle: `${data}`,
      taskStatus: false
    }
    taskList.push(obj);
    displayTask();
    document.getElementById('inp-title').value = ``
  }
}

const displayTask = () => {
  document.getElementById('tasks').innerHTML = ``
  for (let index = 0; index < taskList.length; index++) {
    const taskDiv = document.createElement('div');
    taskDiv.id = index
    taskDiv.classList.add('task')
    taskDiv.innerHTML = `<p>${taskList[index].taskTitle}</p>
    <div>
      <img src="assets/media/baseline_done_black_24dp.png" alt="" srcset="" onclick="taskDone()">
      <img src="assets/media/baseline_delete_black_24dp.png" alt="" srcset="" onclick="deleteTask()">
    </div>`

    if (taskList[index].taskStatus) {
      taskDiv.classList = 'taskDone';
      taskDiv.innerHTML = `<p>${taskList[index].taskTitle}</p>
<div>
  <img src="assets/media/baseline_delete_black_24dp.png" alt="" srcset="" onclick="deleteTask()">
</div>`
    }

    document.getElementById('tasks').appendChild(taskDiv);
  }

}

const deleteTask = (e) => {
  let taskToDelete = event.target
  taskToDelete = (taskToDelete.parentNode)
  taskToDelete = taskToDelete.parentNode.id
  taskList.splice(taskToDelete, 1);
  displayTask();
}

// const taskDone = () => {
//   let taskToDelete = event.target
//   taskToDelete = (taskToDelete.parentNode)
//   taskToDelete = taskToDelete.parentNode
//   taskToDelete.className = 'taskDone'
//   console.log(taskToDelete);
//   console.log('clicked')
//   let imgclicked = event.target
//   console.log(imgclicked);
//   imgclicked.className = 'hide';
// }

const taskDone = () => {
  let taskToDelete = event.target
  taskToDelete = (taskToDelete.parentNode);
  taskToDelete = (taskToDelete.parentNode).id
  let objectDone = taskList[taskToDelete];
  objectDone.taskStatus = true;
  displayTask();
}

displayTask();