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
`

const ThemeBtn = styled(ThemeToggleBtn)`
    .sun-icon path{
        fill: var(--color-dark-primary);        //sun icon
        transition: all .2s ease-in-out;
    }
    .moon-icon path{
        fill: var(--color-light-primary);       //moon icon
        transition: all .2s ease-in-out;
    }

    &:hover{
        .sun-icon path{
            fill: var(--blueish-gray);          //sun icon
        }

        .moon-icon path{
            fill: var(--color-light-secondary);  //moon icon
        }
    }
`

const Logo = styled.h1`
    color: ${props => props.darkTheme? 'var(--color-dark-primary)' : 'var(--color-light-secondary)'};
    transition: all .2s ease-in-out;
`

export default function Header({darkTheme, onClickToggleTheme}) {
    return (
        <Wrapper
            className="header">
            <Logo darkTheme={darkTheme}>devfinder</Logo>
            <ThemeBtn
                darkTheme={darkTheme}
                onClick={onClickToggleTheme}>
                    <span>{darkTheme? 'light' : 'dark'}</span>
                    {darkTheme ? <SunIcon /> : <MoonIcon />}
          </ThemeBtn>
        </Wrapper>
    )
}
