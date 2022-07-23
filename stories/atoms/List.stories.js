import { jsx as _jsx } from "react/jsx-runtime";
import { List } from "@/components";
export default {
    title: "Example/List",
    component: List,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
const Template = (args) => _jsx(List, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    children: [
        _jsx("li", { children: "hello i'm a child" }, 1),
        _jsx("li", { children: "hello i'm a child" }, 2),
    ],
};
