import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./themes/default";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${defaultTheme.dark};
        font-family: 'Roboto', sans-serif;
        color: ${defaultTheme.white};
    }

    
`



