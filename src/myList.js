import { resetContainer } from "./todoObject";
import { listContainer } from "./createList";
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

const deleteListFromMemory = (title) => {
    listContainer.forEach((list) => {
        if (list.title === title){
            listContainer.push(list);
            console.log(listContainer);
            //listContainer.pop();
            //console.log(listContainer);
        };
    });
}

const remove = (button, container, listTitle) => {
    button.addEventListener('click', () => {
        deleteListFromMemory(listTitle);
        todoContainer.removeChild(container);
    })
}

const showLists = () => {
    listContainer.forEach((list) => {
        const div = createDiv();
        const button = viewListButton();
        const removeButton = removeListButton();
        remove(removeButton, div, list.title);
        div.textContent = list.title;
        div.append(button, removeButton);
        todoContainer.appendChild(div);
    })
}

const myLists = () => {
    myListsButton.addEventListener('click', () => {
        resetContainer();
        showLists();
    })
}

export {myLists}