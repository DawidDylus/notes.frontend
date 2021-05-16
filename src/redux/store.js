import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from './notesReducer';

// Creating store and passing reducer to it
export const store = configureStore({
  reducer: {
    notesReducer: NotesReducer,
  },
});


/*
Store -> Globalized state. Special place for global variables

Action -> Functions that returns an object
 --- NOTE since the Actions in Redux only contain the type/name we can use one function to store all function types instead of making them separatelty

Reducer -> Checks what action was colled and modify approprieate state in Store. (check what change and modify global variable)

Dispatch -> Sends function to the reducer to be executed and let reducer modify Store later. 

ACTION EXAMPLE!
export function increment () {
  return {
    type: 'INCREMENT'  ---- Type is just a name of the function.
  }
}

REDUCER EXAMPLE!
export function counter ( state=0 ----- Passing state and setting the default to 0 ,  action  ----- passing an action) {
      switch(action.type){  ---- switching action depending on the type(name) of the Action(function) / picking an action to use
      case "INCREMENT": 
        return state + 1; ---- logic/functionality of the action (it's not in the action smh)
      }
  }
}

STORE EXAMPLE (creation)
let store = createStore(counter); ---- this is only one way of doing it. Look above for normal code. counter is a name of the reducer.

DISPATCH EXAMPLE
store.dispatch(increment()); ---- call function to execute throught our store
*/