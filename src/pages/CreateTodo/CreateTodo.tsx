import { useState } from "react";
import { Button } from "../../components/Button";
import { TodoList } from "../../components/TodoList/TodoList";
import { Todo } from "../../types";

import styles from "./CreateTodo.module.css";

export const CreateTodo = () => {
  const [searchTodo, setSearchTodo] = useState<Todo>();

  const handleSearchTodo = () => {
    setSearchTodo(undefined);
    const todo = {
      id: "1",
      title: "todo 1",
      date: "2021-10-10",
      steps: [
        { id: "1", text: "step 1", checked: false },
        { id: "2", text: "step 2", checked: false },
        { id: "3", text: "step 3", checked: false },
      ],
    };
    setSearchTodo(todo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <p>busqueda</p> 
        <div><input type='text' className={styles.inputSearch} >buscar</input>
        
          </div>
        
      </div>
      {searchTodo ? (
        <TodoList steps={searchTodo.steps} handleChange={() => {}} />
      ) : (
        <div>.</div>
      )}
      <div className={styles.buttonContainer}>
        <Button color="dark" text="Save" onClick={() => {}} />
      </div>
    </div>
  );
};
