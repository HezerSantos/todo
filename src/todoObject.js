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


export {resetContainer, toDoList}