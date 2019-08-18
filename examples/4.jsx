import styled from "styled-components";

const Button = styled.button`
  margin: 1rem 0;
  border: 2px solid palevioletred;
  padding: 0.25rem 1rem;
  color: palevioletred;
  background: transparent;
  border-radius: 5px;
`;

const StyledButton = styled(Button)`
  border-color: purple;
  background: purple;
  color: white;
`;

export default function Example4() {
  return <StyledButton>I am a Button</StyledButton>;
}
