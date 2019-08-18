import { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";

const Title = styled.h2`
  margin: 0;
  padding: 0 0 0.5em;
  font-size: 2rem;
  color: ${props => props.theme.color};
`;

Title.defaultProps = {
  theme: {
    color: "palevioletred"
  }
};

const theme = {
  color: "mediumseagreen"
};

export default function Example6() {
  return (
    <Fragment>
      <Title>Normal</Title>
      <ThemeProvider theme={theme}>
        <Title>Themed</Title>
      </ThemeProvider>
    </Fragment>
  );
}
