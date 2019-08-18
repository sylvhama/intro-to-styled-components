import { Fragment } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 0 1rem;
  border: 2px solid palevioletred;
  padding: 0.25rem 1rem;
  color: palevioletred;
  background: transparent;
  border-radius: 5px;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export default function Example3() {
  return (
    <Fragment>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Fragment>
  );
}
