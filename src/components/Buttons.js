import styled from "styled-components"

const Button = styled.button`
    cursor: pointer;
    padding: 1rem 1.5rem;
    color: var(--white);
    border-radius: var(--border-radius);
    border: none;
    font-weight: var(--fw-bold);
    transition: all .2s linear;
    background-color: transparent;
`

export const SearchBtn = styled(Button)`
    background-color: var(--blue);
    text-transform: capitalize;

    &:hover{
        background-color: var(--light-blue);
    }
`

export const ThemeToggleBtn = styled(Button)`
    color: ${props => props.darkTheme? 'var(--color-dark-primary)' : 'var(--color-light-primary)'};
    text-transform: uppercase;
    letter-spacing: 2.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;

    img{
        margin-left: 1rem;
    }
`