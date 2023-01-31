import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Text,
  Loading,
  InputSearch,
  StaticTodoList,
  Error,
} from "~/components";
import type { Todo } from "~/types";
import { getTodo } from "~/services";

import todoDefault from "~/data/todoDefault.json";
import styles from "./CreateTodo.module.css";

type CreateTodoProps = {
  handleAddTodo: (todo: Todo) => void;
};

export const CreateTodo = ({ handleAddTodo }: CreateTodoProps) => {
  const [searchTodo, setSearchTodo] = useState<Todo>();
  const [inputSearch, setInputSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleSearchTodo = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!inputSearch) return;
    setSearchTodo(undefined);
    setIsError(false);
    setIsLoading(true);
    try {
      const todos = await getTodo(inputSearch);
      setSearchTodo(todos);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
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
        <form onSubmit={handleSearchTodo}>
          <InputSearch
            handleChange={(e) => setInputSearch(e.target.value)}
            inputValue={inputSearch}
            handleSearchTodo={handleSearchTodo}
          />
        </form>
      </div>
      <div className={styles.containerTask}>
        {isError ? (
          <Error text="Error try later" />
        ) : isLoading ? (
          <Loading />
        ) : (
          <>
            <Text
              size="16px"
              weight={700}
              text={searchTodo ? searchTodo.title : todoDefault.title}
            />
            <StaticTodoList
              steps={searchTodo ? searchTodo.steps : todoDefault.steps}
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
