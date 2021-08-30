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
        --blueish-gray: #4B6A9B;
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

    a{
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }

    p, span{
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: var(---fw-regular);
    }

    p, span, a{
        color: ${props => props.darkTheme
                        ? 'var(--color-dark-primary)'
                        : 'var(--blueish-gray)'};
    }

    h1{
        font-size: 1.125rem;
        line-height: 1.5rem;
    }

    h2{
        font-size: 1.375rem;
        line-height: 2rem;
    }

    h3{
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    h4{
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: var(--fw-regular);
    }

    @media screen and (min-width: 768px){
        h1{
            font-size: 1.625rem;
            line-height: 2.375rem;
        }

        h3{
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }
`

export default GlobalStyle