import { resetContainer } from "./todoObject";
const myListsButton = document.querySelector("#myLists")




const myLists = () => {
    myListsButton.addEventListener('click', () => {
        resetContainer();
    })
}

export {myLists}