import { resetContainer } from "./todoObject";
import { listContainer, compact } from "./createList";
const myListsButton = document.querySelector("#myLists")
const todoContainer = document.querySelector(".todoContainer");

const createDiv = () => {
    const div = document.createElement("div");
    div.className = "listItem";
    div.style.cssText = `
    min-height: 10vh;
    width: 80%;
    position: relative;
    margin: 1% 0 1% 0;
    padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

    return div
}

const viewListButton = () => {
    const button = document.createElement("button");
    button.textContent = 'View List';
    button.style.cssText = `
    height: 90%;
    width: 15%;
    color: white;
    background-color: rgb(184, 83, 83);
    font-size: .8rem;
    margin-left: auto;
    `;

    return button;
}

const removeListButton = () => {
    const button = document.createElement("button");
    button.textContent = 'Remove List';
    button.style.cssText = `
    height: 90%;
    width: 15%;
    color: white;
    background-color: rgb(184, 83, 83);
    font-size: .8rem;
    margin-left: 5%;
    `;

    return button;
}

const removeFromListContainer = (element, item, toDolist = null) => {
    if (item){
        let index = toDolist.indexOf(element)
        toDolist[index] = null;
    } else {
        let index = listContainer.indexOf(element);
        listContainer[index] = null;
    }
}

const deleteListFromMemory = (title, item) => {
    if (item){
        listContainer.forEach((toDolist) => {
            toDolist.list.forEach(todoItem => {
                if (todoItem.title === title){
                    removeFromListContainer(todoItem, item, toDolist.list);
                }
            })
        });
    } else {
        listContainer.forEach((list) => {
            if (list.title === title){
                removeFromListContainer(list, item);
            };
        });
    }
}

const remove = (button, container, listTitle, item = false) => {
    button.addEventListener('click', () => {
        compact();
        deleteListFromMemory(listTitle, item);
        todoContainer.removeChild(container);
    })
}

const viewList = (title, button) => {
    button.addEventListener('click', () => {
        resetContainer();
        listContainer.forEach(item => {
            if (item.title === title){
                item.list.forEach(e => {
                    createItem(e);
                })
            };
        });
    })    
}

const createDiv2 = () => {
    return document.createElement("div")
}
const createItem = (e) => {
    const todoItemContainer = createDiv2();

    const titleContainer = createDiv2();
    titleContainer.classList.add('titleContainer');
    titleContainer.textContent = `Title: ${e.title}`;

    const descriptionContainer = createDiv2();
    descriptionContainer.classList.add('descriptionContainer');
    descriptionContainer.textContent = `Description: ${e.description}`;

    const dueDateContainer = createDiv2();
    dueDateContainer.classList.add('dueDateContainer');
    dueDateContainer.textContent = `Due Date: ${e.dueDate}`;

    const priorityContainer = createDiv2();
    priorityContainer.classList.add('priorityContainer');
    priorityContainer.textContent = `Priority: ${e.priority}`;

    const buttonContainer = createDiv2();
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("removeItemButton");
    deleteButton.textContent = 'Delete item'
    buttonContainer.classList.add('buttonContainer');
    buttonContainer.appendChild(deleteButton);
    remove(deleteButton, todoItemContainer, e.title, true);

    todoItemContainer.classList = 'todoItem';

    todoItemContainer.append(titleContainer, descriptionContainer, dueDateContainer, priorityContainer, buttonContainer);

    todoContainer.appendChild(todoItemContainer);
}

const showLists = () => {
    listContainer.forEach((list) => {
        const div = createDiv();
        const button = viewListButton();
        const removeButton = removeListButton();
        viewList(list.title, button);
        remove(removeButton, div, list.title);
        div.textContent = list.title;
        div.append(button, removeButton);
        todoContainer.appendChild(div);
    })
}

const myLists = () => {
    myListsButton.addEventListener('click', () => {
        compact();
        resetContainer();
        showLists(); 
    })
}

export {myLists}