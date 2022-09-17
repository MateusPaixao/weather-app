import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    html, #root {
        min-height: 100vh;
    }
    body {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }
`

export const Container = styled.div`
    max-width: 100%;
    height: 100vh;
    background-color: #343d4b;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export default GlobalStyle