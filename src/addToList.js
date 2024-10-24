import { resetContainer } from "./todoObject";

const todoContainer = document.querySelector(".todoContainer");
const addToListButton = document.querySelector("#addToList");

const createForm = () => {
    return document.createElement("form");
}
const createInput = (id, type) => {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.style.cssText = `
        width: 100%;
        height: 50%;
        border: 2px solid black;
        outline: none;
    `;
    return input;
}

const createSelect = (id, name) => {
    const select = document.createElement("select");
    select.setAttribute("id", id);
    select.setAttribute("name", name);
    select.style.cssText = `
        width: 100%;
        height: 50%;
        border: 2px solid black;
        outline: none;
    `;
    return select
}
const createButton = (content, type) => {
    const button =  document.createElement("button");
    button.setAttribute("type", type);
    button.textContent = content;
    button.style.cssText = `
    color: white;
    background-color: rgb(184, 83, 83);
    padding: 20px;
    font-size: 1rem;
    `;
    return button;
}
const createLabel = (id) => {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = `${id.toUpperCase()}`;
    return label;
}
const createDiv = () => {
    const div = document.createElement("div");
    div.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 16%;
    gap: 5%;
    `;
    return div;
}

const styleFormContainer = (form) => {
    form.style.cssText = `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 0;
    padding: 0% 10% 10% 10%;
    `;
}

const addToListContainer = () => {
    const form = createForm();
    styleFormContainer(form);

    const titleContainer = createDiv();
    const titleInput = createInput('title');
    const titleLabel = createLabel('title', 'text');
    titleContainer.append(titleLabel, titleInput);

    const descriptionContainer = createDiv();
    const descriptionInput = createInput('description');
    const descriptionLabel = createLabel('description', 'text');
    descriptionContainer.append(descriptionLabel, descriptionInput);

    const dueDateContainer = createDiv();
    const dueDateInput = createInput('dueDate');
    const dueDateLabel = createLabel('dueDate', 'text');
    dueDateContainer.append(dueDateLabel, dueDateInput);

    const priorityContainer = createDiv();
    const priorityInput = createInput('priority');
    const priorityLabel = createLabel('priority');
    priorityContainer.append(priorityLabel, priorityInput);

    const myListsContainer = createDiv();
    const myListSelect = createSelect('list', 'myLists');
    const myListLabel = createLabel('list');
    myListsContainer.append(myListLabel, myListSelect);

    const addButtonContainer = createDiv();
    const addButton = createButton('Add to List', 'button');
    addButton.style.alignSelf = 'flex-end';
    addButtonContainer.appendChild(addButton);
    

    form.append(titleContainer, descriptionContainer, dueDateContainer, priorityContainer, myListsContainer, addButtonContainer);

    todoContainer.appendChild(form);
}








const addToList = () => {
    addToListButton.addEventListener('click', () => {
        resetContainer();
        addToListContainer();
    })
}




export {addToList}