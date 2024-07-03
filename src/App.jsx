import React from 'react';
import './css/main.css';
import Todos from './components/Todos';
import DisplayTodo from './components/DisplayTodo';
import {motion} from 'framer-motion'

function App() {
  return (
    <div className='App'>
      <motion.h1 whileHover={{ scale: 1.1 }} initial={{ y: -200}} animate={{ y:0 }} transition={{ type: "spring", duration: 0.5 }}>Todo App</motion.h1>
      <motion.div initial={{ y:1000}} animate={{ y:0 }} transition={{type: "spring", duration: 1}}>
      <Todos />
      <DisplayTodo/>
      </motion.div>
    </div>
  );
}

export default App;
