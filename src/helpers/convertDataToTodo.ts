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
  const stepText = convertTextToChecklist(generations[0].text);
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

const convertTextToChecklist = (text: string): string[] => {
  // format without changes: "1. Step A\n2. Step B\n3. Step C"
  // format with changes: ["Step A", "Step B", "Step C"]
  return text
    .replace(/\n\d+\.? ?/g, "\n") // remove numbers when they are at the beginning of the line
    .trim() // remove white space
    .split("\n") // split by new line
    .filter((t) => t !== ""); // remove empty string
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
