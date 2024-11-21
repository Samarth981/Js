let todo = [];
let req = prompt('Please enter the requet');
console.log(req);
while (true) {
  if (req == 'quit') {
    console.log('you are quit');
    break;
  }
  if (req == 'list') {
    console.log('-------------------');
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log('-------------------');
  } else if (req == 'add') {
    let task = prompt('please enter the task you wnat to add');
    todo.push(task);
    console.log('task add');
  } else if (req == 'delete') {
    let idx = prompt('please enter the idx you wnat to delete');
    todo.splice(idx, 1);
    console.log(' task is delete');
  } else {
    console.log('please enter valide task');
  }
  req = prompt('Please enter the requet');
}
