import { useState } from "react";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text/Text";
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
        { id: "1", text: "Choose a variety of tomato plants that are suited for your region.", checked: false },
        { id: "2", text: "Start the seeds indoors in a warm, sunny spot.", checked: false },
        { id: "3", text: "Space the plants about 2 feet apart in a sunny spot", checked: false },
        { id: "4", text: "Space the plants about 2 feet apart in a sunny spot", checked: false },
        { id: "5", text: "Space the plants about 2 feet apart in a sunny spot", checked: false },
      ],
    };
    setSearchTodo(todo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Text size="20px" weight={700} text="Search a TODO" />
        <div>
          <input
            placeholder="e.j: Plant a tomatoes "
            type="text"
            className={styles.inputSearch}
          />
          <button onClick={handleSearchTodo} className={styles.btnSearch}>
            🔍{" "}
          </button>
        </div>
      </div>
      {searchTodo ? (
        <div className={styles.containerTask}>
          {/* <TodoList steps={searchTodo.steps} handleChange={() => {}} /> */}
        </div>
      ) : (
        <TodoList steps={searchTodo.steps} handleChange={() => {}} />
      )}
      <div className={styles.buttonContainer}>
        <Button color="dark" text="Save" onClick={() => {}} />
      </div>
    </div>
  );
};
