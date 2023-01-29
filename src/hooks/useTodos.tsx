import { useEffect, useState } from "react";
import { Todo } from "../types";
import todosJson from "../data/todos.json";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedIdTodo, setSelectedIdTodo] = useState("");

  const getTodoById = (id: string) => {
    return todos.find((todo) => todo.id === id);
  };

  const handleCheckedTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedIdTodo) {
        const steps = todo.steps.map((step) => {
          if (step.id === id) {
            step.checked = !step.checked;
          }
          return { ...step };
        });

        return { ...todo, steps };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  const handleSelectedIdTodo = (id: string) => {
    setSelectedIdTodo(id);
  };

  useEffect(() => {
    setTodos(todosJson);
  }, []);

  return { todos, getTodoById, handleCheckedTodo, handleSelectedIdTodo };
};