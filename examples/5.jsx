import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  transition: color ease 0.25s;
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ease 0.25s;
  }
  &:hover {
    color: yellow;
  }
  &.active {
    &::before {
      transform: scaleX(1);
    }
  }
`;

const Wrapper = styled.main`
  width: 90vw;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
`;

const Nav = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    padding-bottom: 1.5rem;
    &:last-child {
      padding-bottom: 0;
    }
  }
  ${StyledNavLink} {
    letter-spacing: 3px;
  }
`;

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default function AppRouter() {
  return (
    <Router>
      <Wrapper>
        <Nav>
          <ul>
            <li>
              <StyledNavLink exact to="/">
                Home
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/about/">About</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/users/">Users</StyledNavLink>
            </li>
          </ul>
        </Nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </Wrapper>
    </Router>
  );
}
