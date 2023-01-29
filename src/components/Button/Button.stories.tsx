import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { Wrapper } from "../Wrapper";

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

export const Default = Template.bind({});
Default.args = {
    text:'Save',
    color:'black'
};
