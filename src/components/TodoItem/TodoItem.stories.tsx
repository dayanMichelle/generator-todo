import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TodoItem, Wrapper } from "@/components";

export default {
  title: "Components/TodoItem",
  component: TodoItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TodoItem>;

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
