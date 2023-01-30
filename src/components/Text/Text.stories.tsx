import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";
import { Wrapper } from "../wrapper/Wrapper";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  return (
    <Wrapper>
      <Text {...args} />
    </Wrapper>
  );
};

export const White = Template.bind({});
White.args = {
  text: "NAME OF THE APP",
  weight: 700,
};
White.args = {
  text: "Estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
  weight: 700,
};
