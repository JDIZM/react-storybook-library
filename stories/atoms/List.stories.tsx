import React from "react";
import { List } from "@/components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/List",
  component: List,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary: ComponentStory<typeof List> = Template.bind({});
Primary.args = {
  children: [
    <li key={1}>hello i'm a child</li>,
    <li key={2}>hello i'm a child</li>,
  ],
};
