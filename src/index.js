import './style.css'
import { createList, resetContainer } from './createList';
import { addToList } from './addToList';
import { myLists } from './myList';

if (module.hot) {
    module.hot.accept();
};


createList();
addToList();
myLists();