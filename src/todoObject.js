const todoContainer = document.querySelector(".todoContainer");
const resetContainer = () => {
    while (todoContainer.firstChild){
        todoContainer.removeChild(todoContainer.firstChild);
    }
}

const toDoList = (title, description) => {
    const list = [];
    return {title: title, description: description, list: list};
}

const toDoItem = (title, description, dueDate, priority) => {
    return {title: title, description: description, dueDate: dueDate, priority: priority}
}

export {resetContainer, toDoList}