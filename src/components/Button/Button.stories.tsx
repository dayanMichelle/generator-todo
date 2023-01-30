import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Wrapper } from "@/components";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Wrapper>
      <Button {...args} />
    </Wrapper>
  );
};

export const White = Template.bind({});
White.args = {
  text: "Save",
};

export const Black = Template.bind({});
Black.args = {
  text: "Doc Cohere",
  color: "dark",
};
