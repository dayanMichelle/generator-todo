import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TodoList } from "./TodoList";
import { Wrapper } from "../wrapper/Wrapper";

export default {
  title: "Components/TodoList",
  component: TodoList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => {
  return (
    <Wrapper>
      <TodoList {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  steps: [
    {
      id: "adk-2",
      text: "Choose a variety of tomato plants that are suited for your region.",
      checked: true,
    },
    {
      id: "adk-3",
      text: "Start the seeds indoors in a warm, sunny spot.",
      checked: false,
    },
    {
      id: "adk-4",
      text: "Space the plants about 2 feet apart in a sunny spot.",
      checked: false,
    },
  ],
  handleChange: (id) => {
    console.log(id);
  },
};
