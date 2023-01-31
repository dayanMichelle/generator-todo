import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Error } from "./Error";

export default {
  title: "Components/Error",
  component: Error,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => {
  return <Error />;
};

export const Default = Template.bind({});
Default.args = {};
