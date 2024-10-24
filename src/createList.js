import { resetContainer } from "./todoObject";
const todoContainer = document.querySelector(".todoContainer");
const createListButton = document.querySelector("#createList");

const createForm = () => {
    return document.createElement("form");
}
const createInput = (id) => {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", id);
    return input;
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
    return div;
}

const styleInputContainer = (div) => {
    div.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 33%;
    gap: 5%;
    `;
}

const styleInput = (input) => {
    input.style.cssText = `
        width: 100%;
        height: 30%;
        border: 2px solid black;
        outline: none;
    `;
}

const styleFormContainer = (form) => {
    form.style.cssText = `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 0;
    padding: 10%;
    `;
}

const styleButtonContainer = (div) => {
    div.style.cssText = `
    width: 100%;
    height: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
}

const createListContainer = () => {
    const form = createForm();

    const titleInput = createInput('title');
    const titleLabel = createLabel('title');

    const descriptionInput = createInput('description');
    const descriptionLabel = createLabel('description');

    const titleContainer = createDiv();
    const descriptionContainer = createDiv();

    const buttonContainer = createDiv();
    const makeListButton = createButton("Create List", "button");

    styleButtonContainer(buttonContainer);
    buttonContainer.appendChild(makeListButton);

    styleFormContainer(form);
    styleInputContainer(titleContainer);
    styleInputContainer(descriptionContainer);
    styleInput(titleInput);
    styleInput(descriptionInput);

    titleContainer.append(titleLabel, titleInput);
    descriptionContainer.append(descriptionLabel, descriptionInput);

    form.append(titleContainer, descriptionContainer, buttonContainer);
    
    todoContainer.appendChild(form);
}

const addNewList = () => {
    
}


const createList = () => {
    createListButton.addEventListener('click', () => {
        resetContainer();
        createListContainer();
    })
}

export {createList}
