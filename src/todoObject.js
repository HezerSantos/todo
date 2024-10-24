const todoContainer = document.querySelector(".todoContainer");
const resetContainer = () => {
    while (todoContainer.firstChild){
        todoContainer.removeChild(todoContainer.firstChild);
    }
}

export {resetContainer}