import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Space Mono', monospace;
    }

    .App{
        width: 100vw;
        height: 100vh;
    }

    html{
        --blue: #0079ff;
        
        --bg-light-primary: #F6F8FF;
        --bg-light-secondary: #FEFEFE;
        --color-light: #69c79a;

        --bg-dark-primary: #141D2F;
        --bg-dark-secondary: #1E2A47;
        --color-dark: #ffffff;
    }
`

export default GlobalStyle