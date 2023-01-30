import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TableTodo, Wrapper } from "@/components";

export default {
  title: "Components/TableTodo",
  component: TableTodo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TableTodo>;

const Template: ComponentStory<typeof TableTodo> = (args) => {
  return (
    <Wrapper>
      <TableTodo {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  todos: [
    {
      id: "1",
      title: "Plant Tomatoes",
      date: "16/10/2023",
      steps: [
        {
          id: "ajd839-09f3",
          text: "Choose the right variety of tomato for your area.",
          checked: false,
        },
      ],
    },
    {
      id: "2",
      title: "Plant Tomatoes",
      steps: [
        {
          id: "ajd839-093s",
          text: "Choose the right variety of tomato for your area.",
          checked: true,
        },
        {
          id: "ajd839-093",
          text: "Choose the right variety of tomato for your area.",
          checked: true,
        },
      ],
      date: "16/10/2023",
    },
    {
      id: "1",
      title: "Plant Tomatoes",
      date: "16/10/2023",
      steps: [
        {
          id: "ajd839-09f3",
          text: "Choose the right variety of tomato for your area.",
          checked: false,
        },
      ],
    },
    {
      id: "2",
      title: "Plant Tomatoes",
      steps: [
        {
          id: "ajd839-093s",
          text: "Choose the right variety of tomato for your area.",
          checked: true,
        },
        {
          id: "ajd839-093",
          text: "Choose the right variety of tomato for your area.",
          checked: true,
        },
      ],
      date: "16/10/2023",
    },
    {
      id: "1",
      title: "Plant Tomatoes",
      date: "16/10/2023",
      steps: [
        {
          id: "ajd839-09f3",
          text: "Choose the right variety of tomato for your area.",
          checked: false,
        },
      ],
    },
    {
      id: "2",
      title: "Plant Tomatoes",
      steps: [
        {
          id: "ajd839-093s",
          text: "Choose the right variety of tomato for your area.",
          checked: true,
        },
        {
          id: "ajd839-093",
          text: "Choose the right variety of tomato for your area.",
          checked: true,
        },
      ],
      date: "16/10/2023",
    },
  ],
};
