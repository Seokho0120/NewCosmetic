import React from 'react';
import './App.css';
import styled from 'styled-components';
import Main from '../src/pages/Main';
import { ThemeProvider } from 'styled-components';
// import { theme } from './pages/assets/styles/theme';

export default function App() {
  return (
    <>
      {/* <Main /> */}
      <div>
        <Button>Test 1</Button>
        <ThemeProvider theme={theme}>
          <Button>Test 2</Button>
        </ThemeProvider>
      </div>
    </>
  );
}

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

const theme = {
  main: 'mediumseagreen',
};
