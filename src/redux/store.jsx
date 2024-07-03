// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducer';

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return undefined;
    }
    return { tasks: JSON.parse(serializedState) }; // Return as an object with tasks key
  } catch (err) {
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
