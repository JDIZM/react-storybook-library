import React from "react";
import { List } from "@/components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/List",
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;
