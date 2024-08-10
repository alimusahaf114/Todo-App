let todoList = [{
    item: "Musahaf Ali is here",
    dueDate: "2003-02-01" ,
    },
    {
        item: "Asif Ali is here",
        dueDate: "8/9/2024",
    }] ;
displayItems();
function addTodo(){
    let inputValue = document.querySelector("#todo-app");
    let dateValue = document.querySelector("#todo-date");
    let inputContent = inputValue.value;
    let todoDate = dateValue.value ;
    todoList.push({item: inputContent , dueDate: todoDate});
    todoDate.value = ''
    inputValue.value = '';

    displayItems();
    
}
function displayItems(){
    let containerElement = document.querySelector(".todo-container");
    let newHtml = '' ;
    for(let i = 0 ; i < todoList.length ; i++){
        let {item , dueDate} = todoList[i];
        newHtml += `
        <span> ${item} </span>
        <span> ${dueDate} </span>
        <button class="btn-delete" onclick="todoList.splice(${i} , 1); displayItems();"> Delete</button>
        `;
    }

    containerElement.innerHTML = newHtml ;
}