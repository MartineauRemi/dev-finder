import React from 'react'
import styled from 'styled-components'
import { ThemeToggleBtn } from "../components/Buttons"
import MoonIcon from '../components/icons/MoonIcon'
import SunIcon from '../components/icons/SunIcon'

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.25rem;

    .sun-icon .sun-icon path{
        fill: var(--color-dark-primary);
    }

    &:hover .sun-icon path{
        fill: var(--blueish-gray);
    }
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
                    {darkTheme ? <SunIcon className="sun-icon" /> : <MoonIcon className="moon-icon"/>}
          </ThemeToggleBtn>
        </Wrapper>
    )
}
