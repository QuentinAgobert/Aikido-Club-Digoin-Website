import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Nunito", sans-serif;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;