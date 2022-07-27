import React from 'react';
// import Main from '../src/pages/Main';
import './App.css';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './pages/assets/styles/theme';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.common.flexCenterColumn}
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.grey};
`;

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.colors.green};
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
`;

export default function App() {
  return (
    <>
      {/* <Main /> */}
      <ThemeProvider theme={theme}>
        <Container>
          <Title>Hello</Title>
          <SubTitle>World!</SubTitle>
          <Paragraph>ThemeProvider 사용법</Paragraph>
        </Container>
      </ThemeProvider>
    </>
  );
}
