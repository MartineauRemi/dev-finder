import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./layout/Header"
import SearchBar from "./layout/SearchBar"
import Dashboard from "./layout/Dashboard"
import GlobalStyle from "./GlobalStyle"
import { getGithubUser } from "./API/GithubUsersAPI";

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

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const [search, setSearch] = useState()
  const [user, setUser] = useState()

  const onClickToggleTheme = () => setDarkTheme(!darkTheme)

  useEffect(() => {
    if(search){
      getGithubUser(search)
      .then(data => setUser(JSON.stringify(data)))
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
            setSearch={setSearch} />

          {user
            ? (
              <Dashboard
                darkTheme={darkTheme}
                data={user} />)
            : null}
        </Main>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
