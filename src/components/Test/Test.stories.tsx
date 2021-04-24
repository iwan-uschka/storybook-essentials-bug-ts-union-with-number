import { ReactNode } from "react";
import { Story, Meta } from "@storybook/react";

import Test, { TestProps } from "./Test";

export default {
  title: "Test",
  component: Test,
} as Meta;

const Template: Story<TestProps> = (testProps) => <Test {...testProps} />;

export const Story1: Story<TestProps> = Template.bind({});
Story1.args = {
  enumNumber: 3,
  unionString: "3",
  unionNumber: 3,
};

export const Story2: Story<TestProps> = Template.bind({});
Story2.args = {
  enumNumber: 3,
  unionString: "3",
  unionNumber: 3,
};
