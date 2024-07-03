// src/components/DisplayTodos.jsx
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { completeTodos, removeTodos, updateTodos } from '../redux/reducer';
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state.tasks, // Adjusted state shape
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("all"); // Set default state to "all"

  useEffect(() => {
    setSort("all"); // Ensure "all" is set on component mount
  }, []);

  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort("active")}>Active</motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort("completed")}>Completed</motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort("all")}>All</motion.button>
      </div>
      <ul>
        {props.todos.length > 0 && sort === "active" ?
          props.todos.map(item => {
            return (
              !item.completed &&
              <TodoItem key={item.id} item={item} removeTodo={props.removeTodo} updateTodo={props.updateTodo} completeTodo={props.completeTodo} />
            )
          })
          : null}

        {props.todos.length > 0 && sort === "completed" ?
          props.todos.map(item => {
            return (
              item.completed &&
              <TodoItem key={item.id} item={item} removeTodo={props.removeTodo} updateTodo={props.updateTodo} completeTodo={props.completeTodo} />
            )
          })
          : null}

        {props.todos.length > 0 && sort === "all" ?
          props.todos.map(item => {
            return (
              <TodoItem key={item.id} item={item} removeTodo={props.removeTodo} updateTodo={props.updateTodo} completeTodo={props.completeTodo} />
            )
          })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
