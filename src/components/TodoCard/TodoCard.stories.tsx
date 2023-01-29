import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TodoCard } from "./TodoCard";
import { Wrapper } from "../Wrapper";

export default {
  title: "Components/TodoCard",
  component: TodoCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TodoCard>;

const Template: ComponentStory<typeof TodoCard> = (args) => (
  <Wrapper>
    <TodoCard {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: "Plant Tomatoes",
  date: "23/02/2022",
  checkedTodo: 4,
  totalTodo: 5,
  id: "adds-234",
};

export const Completed = Template.bind({});
Completed.args = {
  title: "Plant Tomatoes",
  date: "23/02/2022",
  checkedTodo: 5,
  totalTodo: 5,
  id: "adds-234",
};
