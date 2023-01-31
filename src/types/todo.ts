export type TodoStep = {
  id: string;
  text: string;
  checked: boolean;
};

export type Todo = {
  id: string;
  title: string;
  date: string;
  steps: TodoStep[];
};
