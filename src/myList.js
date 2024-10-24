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

    return button
}
const showLists = () => {
    listContainer.forEach((list) => {
        const div = createDiv();
        const button = viewListButton();
        div.textContent = list.title;
        div.appendChild(button);
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