import React from 'react'
import styled from 'styled-components'
import { ThemeToggleBtn } from "../components/Buttons"

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.h1`
    color: ${props => props.darkTheme? 'var(--color-dark-primary)' : 'var(--color-light-secondary)'};
`

export default function Header({darkTheme, onClickToggleTheme}) {
    return (
        <Wrapper>
            <Logo darkTheme={darkTheme}>devfinder</Logo>
            <ThemeToggleBtn
                darkTheme={darkTheme}
                onClick={onClickToggleTheme}>
                    <span>{darkTheme? 'light' : 'dark'}</span>
                    <img src="" width="20px" height="20px" alt="" />
          </ThemeToggleBtn>
        </Wrapper>
    )
}
