import { resetContainer, toDoItem, toDoList } from "./todoObject";
const todoContainer = document.querySelector(".todoContainer");
const createListButton = document.querySelector("#createList");

const createForm = () => {
    return document.createElement("form");
}
const createInput = (id, length = true) => {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", id);
    input.setAttribute("maxLength", "20");
    input.setAttribute('required', '');
    if (!length){
        input.setAttribute("maxLength", "");
    }
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

    const descriptionInput = createInput('description', false);
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

    addNewList(titleInput, descriptionInput, makeListButton);

    
}


let listContainer = [];


const newList = toDoList('My List', 'w');
const x = toDoItem('Get Monies', "Get yo monies Get yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo monies Get yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo moniesGet yo monies", 'Now', 'High');
newList.list.push(x);
listContainer.push(newList);



const addNewList = (titleInput, descriptionInput, button) => {
    button.addEventListener('click', () => {
        if (!titleInput.value || !descriptionInput.value){
            return;
        }

        if (listContainer.length == 0){
            const newList = toDoList(titleInput.value, descriptionInput.value);
            listContainer.push(newList);
        } else {
            if (isDuplicate(titleInput) === 0){
                const newList = toDoList(titleInput.value, descriptionInput.value);
                listContainer.push(newList);
            } else {
                const newList = toDoList(`${titleInput.value} (${isDuplicate(titleInput) + 1})`, descriptionInput.value);
                listContainer.push(newList);
            }
        };
  
        titleInput.value = '';
        descriptionInput.value = '';
    })
}

const compact = () => {
    listContainer = listContainer.filter(item => item !== null);
    listContainer.forEach(item => {
        item.list = item.list.filter(item => item !== null);
    })
}

const isDuplicate = (title) => {
    let listCounter = 0;
    listContainer.forEach(item => {
        let indexZero = item.title.split('(');
        if (indexZero[0].trim() === title.value){
            listCounter ++;
        }
    })
    return listCounter;
}

const createList = () => {
    createListButton.addEventListener('click', () => {
        const listContainers = localStorage.setItem('ListContainer', JSON.stringify(listContainer));
        const store = localStorage.getItem('ListContainer');
        console.log(JSON.parse(store));
        resetContainer();
        createListContainer();
    })
}

export {createList, listContainer, compact}
