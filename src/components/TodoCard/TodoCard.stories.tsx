import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TodoCard } from "./TodoCard";
import { Wrapper } from "../Wrapper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/TodoCard",
  component: TodoCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TodoCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoCard> = (args) => (
  <Wrapper>
    <TodoCard {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Plant Tomatoes",
  date: "23/02/2022",
  checkedTodo: 4,
  totalTodo: 5,
  id: "adds-234",
};

export const Completed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Completed.args = {
  title: "Plant Tomatoes",
  date: "23/02/2022",
  checkedTodo: 5,
  totalTodo: 5,
  id: "adds-234",
};
