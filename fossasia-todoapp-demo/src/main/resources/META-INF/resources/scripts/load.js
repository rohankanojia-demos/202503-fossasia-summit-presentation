function populateTodos() {
  fetch('/todos')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not okay')
      }
      return response.json()
    })
    .then(data => {
      data.forEach(item => {
        addSingleItem(item)
      })
    })
}

function addSingleItem(item) {
  var todoList = document.getElementById('todo-list');
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(item.title));
  todoList.appendChild(li);
}

// Function to add a new item to the list
function addTodo() {
    // Get the value of the input field
    const newItemValue = document.getElementById('todo-add').value;
    console.log(newItemValue)
    // Check if the input is not empty
    if (newItemValue.trim() === '') {
        alert('Please enter a valid item!');
        return;
    }

    const newTodo = {
      title: newItemValue,
      completed: false
    }
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add todo')
      }
      return response.json();
    })
    .then(data => {
      console.log('Todo added successfully', data)
      document.getElementById('todo-add').value = ''
      addSingleItem(newTodo)
    })
    .catch(error => {
      console.error('Error adding todo: ', error)
      alert('There was an error in adding todo item')
    });
}

populateTodos();