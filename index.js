const body = document.body;

const tasks = [];

const addTask = () => {
  let storeTask = document.getElementById("getTaskTextbox").value;
  tasks.push(storeTask);

  for (let task of tasks) {
    let creatTask = document.createElement("p");
    body.append(creatTask);
    creatTask.innerHTML = task;
    console.log(task);
  }
};
