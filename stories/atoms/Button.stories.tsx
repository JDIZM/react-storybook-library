import React from "react";
import { Button } from "@/components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary: ComponentStory<typeof Button> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary: ComponentStory<typeof Button> = Template.bind({});
Secondary.args = {
  backgroundColor: "orangered", // union types
  label: "Button",
};

export const Large: ComponentStory<typeof Button> = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small: ComponentStory<typeof Button> = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
