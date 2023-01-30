import { Todo, todoStep } from "../types";

type ResponseAPI = {
  id: string;
  generations: {
    id: string;
    text: string;
  }[];
  prompt: string;
};

export const convertDataToTodo = (data: ResponseAPI): Todo => {
  const { id, generations, prompt: title } = data;

  // todoStep format
  const stepText = converTextToChecklist(generations[0].text);
  const todoStep: todoStep[] = stepText.map((text) => {
    return {
      id: Math.random().toString(36).substring(7),
      text,
      checked: false,
    };
  });

  // Todo format
  const todo: Todo = {
    id,
    title: removePromptToTitle(title),
    date: createDate(),
    steps: todoStep,
  };

  return todo;
};

const converTextToChecklist = (text: string): string[] => {
  return text
    .trim()
    .split("\n")
    .filter((t) => t !== "");
};

const removePromptToTitle = (text: string): string => {
  return text.replace("Make a list of the steps to follow to ", "");
};

const createDate = (): string => {
  const date = new Date();
  const formattedDate =
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getDate().toString().padStart(2, "0") +
    "/" +
    date.getFullYear();

  // format: "01/01/2023"
  return formattedDate;
};
