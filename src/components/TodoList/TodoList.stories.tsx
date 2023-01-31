import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Wrapper, TodoList } from "../../components";

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
  children: <p>Prueba</p>,
};
