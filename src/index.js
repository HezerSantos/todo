import './style.css'
import { createList, listContainer } from './createList';
import { addToList } from './addToList';
import { myLists, createListItem } from './myList';

if (module.hot) {
    module.hot.accept();
};


const loadListsFromStorage = () => {
    const storedListContainer = localStorage.getItem('ListContainer');
    if (storedListContainer) {
        const parsedLists = JSON.parse(storedListContainer);
        
        // Clear the existing listContainer
        listContainer.length = 0; // Clear existing items

        // Populate your UI with the lists
        parsedLists.forEach(list => {
            listContainer.push(list); // Add the parsed list to the listContainer
            createListItem(list); // Call the function to create the UI elements
        });
    }
};


// Call this function in your main script after the DOM is ready
loadListsFromStorage();
createList(); // Or other initializations
addToList();
myLists();