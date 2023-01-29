import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TodoItem } from "./TodoItem";
import { Wrapper } from "../Wrapper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/TodoItem",
  component: TodoItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TodoItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoItem> = (args) => {
  const [change, setChange] = useState(args.todoStep.checked);
  const handleChange = (id: string) => {
    setChange(!change);
  };

  const newStep = { ...args.todoStep, checked: change };
  return (
    <Wrapper>
      <TodoItem {...args} handleChange={handleChange} todoStep={newStep} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  todoStep: {
    id: "323",
    text: "Choose a variety of tomato plants that are suited for your region.",
    checked: false,
  },
  handleChange: (id) => {
    console.log(id);
  },
};

export const Checked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checked.args = {
  todoStep: {
    id: "323",
    text: "Choose a variety of tomato plants that are suited for your region.",
    checked: true,
  },
  handleChange: (id) => {
    console.log(id);
  },
};
