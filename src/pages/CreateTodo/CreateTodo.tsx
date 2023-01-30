import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text/Text";
import { TodoList } from "../../components/TodoList/TodoList";
import { Todo } from "../../types";

import todoDefault from "../../data/todoDefault.json";
import styles from "./CreateTodo.module.css";
import { getTodos } from "../../services/todos";
import { Loading } from "../../components/Loading";

type CreateTodoProps = {
  handleAddTodo: (todo: Todo) => void;
};

export const CreateTodo = ({ handleAddTodo }: CreateTodoProps) => {
  const [searchTodo, setSearchTodo] = useState<Todo>();
  const [inputSearch, setInputSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearchTodo = async () => {
    setIsLoading(true);
    const todos = await getTodos(inputSearch);
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
            🔍{" "}
          </button>
        </div>
      </div>
      <div className={styles.containerTask}>
        {isLoading ? (
          <Loading />
        ) : searchTodo ? (
          <>
            <Text size="16px" weight={700} text={searchTodo.title} />
            <TodoList steps={searchTodo.steps} handleChange={() => {}} />
          </>
        ) : (
          <>
          <Text size="16px" weight={700} text={todoDefault.title} />
          <TodoList steps={todoDefault.steps} handleChange={() => {}} />
          </>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <Button color="dark" text="Save" onClick={handleButton} />
      </div>
    </div>
  );
};
