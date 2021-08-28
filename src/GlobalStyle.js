import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Space Mono', monospace;
    }

    html{
        --blue: #0079ff;
        --light-blue: #60ABFF;
        --white: #ffffff;
        
        --bg-light-primary: #F6F8FF;
        --bg-light-secondary: #FEFEFE;
        --color-light-primary: #697c9a;
        --color-light-secondary: #2B3442;

        --bg-dark-primary: #141D2F;
        --bg-dark-secondary: #1E2A47;
        --color-dark-primary: #ffffff;

        --border-radius: 10px;

        --fw-regular: 400;
        --fw-bold: 700;
    }

    p, span, h3{
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: var(---fw-regular);
    }

    h1{
        font-size: 1.625rem;
        line-height: 2.375rem;
    }

    h2{
        font-size: 1.375rem;
        line-height: 2rem;
    }

    h4{
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: var(--fw-regular);
    }
`

export default GlobalStyle