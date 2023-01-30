import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';
import { Button, Text, TodoList, Loading } from "@/components";
import type { Todo } from "@/types";
import { getTodo } from "@/services";

import todoDefault from "@/data/todoDefault.json";
import styles from "./CreateTodo.module.css";

type CreateTodoProps = {
  handleAddTodo: (todo: Todo) => void;
};

export const CreateTodo = ({ handleAddTodo }: CreateTodoProps) => {
  const [searchTodo, setSearchTodo] = useState<Todo>();
  const [inputSearch, setInputSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearchTodo = async () => {
    setSearchTodo(undefined);
    setIsLoading(true);
    const todos = await getTodo(inputSearch);
    setIsLoading(false);
    setSearchTodo(todos);
  };

  const handleButton = () => {
    if (!searchTodo) return;
    handleAddTodo(searchTodo);
    navigate("/my-todos");
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
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button onClick={handleSearchTodo} className={styles.btnSearch}>
          <FiSearch />
          </button>
        </div>
      </div>
      <div className={styles.containerTask}>
        {isLoading ? (
          <Loading />
        ) : searchTodo ? (
          <>
            <Text size="16px" weight={700} text={searchTodo.title} />
            <TodoList
              deleteStepAtTodo={() => {}}
              steps={searchTodo.steps}
              handleChange={() => {}}
            />
          </>
        ) : (
          <>
            <Text size="16px" weight={700} text={todoDefault.title} />
            <TodoList
              deleteStepAtTodo={() => {}}
              steps={todoDefault.steps}
              handleChange={() => {}}
            />
          </>
        )}
      </div>
      {searchTodo && (
        <div className={styles.buttonContainer}>
          <Button color="dark" text="Save" onClick={handleButton} />
        </div>
      )}
    </div>
  );
};
