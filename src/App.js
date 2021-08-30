import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./layout/Header"
import SearchBar from "./layout/SearchBar"
import Dashboard from "./layout/Dashboard"
import GlobalStyle from "./GlobalStyle"
import { getGithubUser } from "./API/GithubUsersAPI"
import searchIllustration from "./assets/search-illustration.svg"

const Wrapper = styled.div`
    min-height: 100vh;
    background-color: ${props => props.darkTheme ? 'var(--bg-dark-primary)' : 'var(--bg-light-primary)'};
    color: ${props => props.darkTheme ? 'var(--color-dark)' : 'var(--color-light)'};
    transition: all .3s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 2rem 1.5rem; */

    /* @media screen and (min-width: 768px){
      padding: 8.75rem 6rem;
    } */
  `

  const Main = styled.main`
    width: 100%;
    max-width: 45.625rem;
  `

  const Picture = styled.picture`
    display: grid;
    img{
      place-self: center;
      max-height: 20rem;
    }
  `

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const [search, setSearch] = useState()
  const [user, setUser] = useState()
  const [unknownUser, setUnknownUser] = useState(false)

  const onClickToggleTheme = () => setDarkTheme(!darkTheme)

  useEffect(() => {
    if(search){
      getGithubUser(search)
      .then(data => {
        if(data.id)
          setUser(JSON.stringify(data))
        else
          setUnknownUser(true)
      })
      .catch(error => console.error(error))
    }
  }, [search])

  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper
        className="App"
        darkTheme={darkTheme}>
        <Main>
          <Header
            darkTheme={darkTheme}
            onClickToggleTheme={onClickToggleTheme} />

          <SearchBar
            darkTheme={darkTheme}
            setSearch={setSearch}
            unknownUser={unknownUser}
            setUnknownUser={setUnknownUser}/>

          {user
            ? (
              <Dashboard
                darkTheme={darkTheme}
                data={user} />)
            : (
              <Picture>
                <img src={searchIllustration} alt="" />
              </Picture>
            )}
        </Main>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
