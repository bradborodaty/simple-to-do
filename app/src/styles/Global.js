import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 15px;
        font-family: 'Raleway', sans-serif;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: ${({theme}) => theme.colors.primary};
    }

    button {
        background: transparent;
        border: 1px solid ${({theme}) => theme.colors.primary};
        border-radius: 5px;
        padding: 10px;
        transition: all 0.3s;
    }

    button:hover {
        cursor: pointer;
        background-color: ${({theme}) => theme.colors.primary};
        color: #fff;
    }

    h1 {
        font-size: 1.5em;
    }

    fieldset {
        border: 0;
    }

    input {
        border: 0;
        background: transparent;
        outline: 0;
    }
`;