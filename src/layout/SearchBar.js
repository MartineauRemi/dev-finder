import React, { useState } from 'react'
import styled from 'styled-components'
import {SearchBtn} from '../components/Buttons'
import search from "../assets/icon-search.svg"

const Wrapper = styled.form`
    border-radius: var(--border-radius);
    background-color: ${props => props.darkTheme? 'var(--bg-dark-secondary)' : 'var(--bg-light-secondary)'};
    color: ${props => props.darkTheme? 'var(--color-dark-primary)' : 'var(--color-light-secondary)'};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.625rem;
    padding-left: 1rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 768px){
        margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 1440px){
        padding: 0.625rem;
        padding-left: 2rem;
    }
`

const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: ${props => props.darkTheme? 'var(--color-dark-primary)' : 'var(--color-light-secondary)'};
    padding: 1rem 0.375rem;
    font-size: 1.125rem;
    line-height: 1.5rem;
    
    &::placeholder{
        color: ${props => props.darkTheme? 'var(--color-dark-primary)' : 'var(--color-light-secondary)'};
    }

    @media screen and (min-width: 425px){
        padding: 1rem 1.5rem;
    }
`

export default function SearchBar({darkTheme, setSearch}) {
    var value = ''

    function onHandleChange(e){
        value = e.target.value
    }

    function onHandleSubmit(e){
        e.preventDefault()
        if(value !== '')
            setSearch(value)
    }

    return (
        <Wrapper
            darkTheme={darkTheme}
            onSubmit={(e) => onHandleSubmit(e)}>
                <img
                    src={search}
                    width="24px"
                    height="24px"
                    alt=""/>
                <Input
                    darkTheme={darkTheme}
                    type='text'
                    placeholder='Search Github username...'
                    onChange={(e) => onHandleChange(e)}
                    required/>
                <SearchBtn>Search</SearchBtn>
        </Wrapper>
    )
}
