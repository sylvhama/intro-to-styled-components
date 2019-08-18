import styled from "styled-components";

const Button = styled.button`
  margin: 1rem 0;
  border: 2px solid palevioletred;
  padding: 0.25rem 1rem;
  color: palevioletred;
  background: transparent;
  border-radius: 5px;
`;

export default function Example1() {
  return <Button>I am a Button</Button>;
}
