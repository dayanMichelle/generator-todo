export type todoStep = {
  id: string;
  text: string;
  checked: boolean;
};

export type todo = {
  id: string;
  title: string;
  date: string;
  steps: todoStep[];
};


