import { useEffect, useState } from "react";
import { createStep } from "@/helpers";
import type { Todo, TodoStep } from "@/types";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
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

  const handleDeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (todo: Todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const addStepAtTodo = (step: string, position: number) => {
    const stepObj: TodoStep = createStep(step);
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedIdTodo) {
        const newSteps = [...todo.steps];
        newSteps.splice(position, 0, stepObj);
        return { ...todo, steps: newSteps };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  const deleteStepAtTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedIdTodo) {
        const newSteps = todo.steps.filter((step) => step.id !== id);
        return { ...todo, steps: newSteps };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    getTodoById,
    handleCheckedTodo,
    handleSelectedIdTodo,
    handleDeleteTodo,
    handleAddTodo,
    addStepAtTodo,
    deleteStepAtTodo,
  };
};
