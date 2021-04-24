import { FC } from "react";

enum SomeEnum {
  one = 1,
  two = 3,
}

export interface TestProps {
  enumNumber?: SomeEnum;
  unionString?: "1" | "3";
  unionNumber?: 1 | 3;
}

const Test: FC<TestProps> = (props) => <pre>{JSON.stringify(props)}</pre>;

export default Test;
