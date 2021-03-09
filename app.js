//Selector
	const todoInput = document.querySelector('.todo-input');
	const todoButton = document.querySelector('.todo-button');
	const todoList = document.querySelector('.todo-list');
	const filterOption = document.querySelector('.todo-filter');

//EventListeners

	todoButton.addEventListener("click", addTodo);
	todoList.addEventListener("click", deleteList);
	filterOption.addEventListener("click", filterTodo);
//Functions

	function addTodo(event){
		event.preventDefault();		

		//check if the input is empty
		if (todoInput.value.length == 0)
		{
			alert("Please Add Something in ToDo");
		}
		else if (todoInput.value.length >= 26)
		{
			alert("No more than 25 charecters");
		}
		else
		{// createing div fron todo items
				const todoDiv = document.createElement("div");
				todoDiv.classList.add("todo");
		
				//create List for todo items
				const newTodo = document.createElement("li");
				newTodo.classList.add("todo-list-items");
				newTodo.innerText = todoInput.value;
				todoDiv.appendChild(newTodo);
		
				//crate check buttons
				const checkButton = document.createElement("button");
				checkButton.classList.add("check-btn");
				checkButton.innerHTML = '<i class = "fas fa-check"></i>';
				todoDiv.appendChild(checkButton);	
		
				//crate trach buttons
				const trashButton = document.createElement("button");
				trashButton.classList.add("trash-btn");
				trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
				todoDiv.appendChild(trashButton);	
		
				//append this todoDiv into our UL ehich is in html
				todoList.appendChild(todoDiv);	
		 	}
		}
 	// deleting the list 
 	function deleteList(e) {
 		const item  = e.target;	
 		if (item.classList[0] === "trash-btn")
 		{
 			const todo = item.parentElement;
 			todo.classList.add("fall");
 			todo.addEventListener("webkitTransitionEnd", myFunction = () =>{todo.remove()});
 			
 		}
 		if (item.classList[0] === "check-btn")
 		{
 			const todo = item.parentElement;
 			todo.classList.toggle('completed');
 		}
 	}
 	//filtering Todo's here
 	function filterTodo(e){
 		const todos = todoList.childNodes;
 		todos.forEach(function(todo) {
 			switch(e.target.value){
 				case "all" :
 				todo.style.display = 'flex';
 				break;

 				case "completed" :
 				if(todo.classList.contains('completed') ){
 					todo.style.display = 'flex';	
 				}else{
 					todo.style.display = "none";
 				}
 				break;

 				case "pending" :
 				if(todo.classList.contains('completed') ){
 					todo.style.display = 'none';	
 				}else{
 					todo.style.display = "flex";
 				}
 				break;

 			}
 		})
 		
 	}