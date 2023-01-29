import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar } from "./Navbar";
import { Wrapper } from "../Wrapper";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => {
return (
    <Wrapper>
      <Navbar/>
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {

};
