import { useEffect, useState } from "react";
import { createStep } from "../helpers";
import type { Todo, TodoStep } from "../types";
import { DropResult } from "react-beautiful-dnd";

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

  const addStepAtTodo = (step: string) => {
    const stepObj: TodoStep = createStep(step);
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedIdTodo) {
        const newSteps = [...todo.steps, stepObj];
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

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newTodos = todos.map((todo) => {
      if (todo.id === selectedIdTodo) {
        const newSteps = [...todo.steps];
        const [removed] = newSteps.splice(result.source.index, 1);
        newSteps.splice(result.destination!.index, 0, removed);
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
    handleDragEnd,
  };
};
