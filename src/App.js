import React, {useState} from "react";
import styled from "styled-components";
import Header from "./layout/Header"
import SearchBar from "./layout/SearchBar"
import Dashboard from "./layout/Dashboard"
import GlobalStyle from "./GlobalStyle"

const Wrapper = styled.div`
    width: 100vw;
    max-width: 100vw;
    overflow-y: hidden;
    min-height: 100vh;
    background-color: ${props => props.darkTheme ? 'var(--bg-dark-primary)' : 'var(--bg-light-primary)'};
    color: ${props => props.darkTheme ? 'var(--color-dark)' : 'var(--color-light)'};
    transition: all .3s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem 1.5rem;

    @media screen and (min-width: 768px){
      padding: 8.75rem 6rem;
    }
  `

  const Main = styled.main`
    width: 100%;
    max-width: 45.625rem;
  `

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const [search, setSearch] = useState()

const onClickToggleTheme = () => setDarkTheme(!darkTheme)

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
            setSearch={setSearch}/>

          <Dashboard
            darkTheme={darkTheme} />
        </Main>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
