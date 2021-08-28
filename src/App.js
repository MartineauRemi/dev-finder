import React, {useState} from "react";
import styled from "styled-components";
import { SearchBtn } from "./components/Buttons"
import Header from "./layout/Header"
import GlobalStyle from "./GlobalStyle"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  const App = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${darkTheme ? 'var(--bg-dark-primary)' : 'var(--bg-light-primary)'};
    color: ${darkTheme ? 'var(--color-dark)' : 'var(--color-light)'};
    transition: all .3s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `

  const Main = styled.main`
    padding: 2rem 1.5rem;
    width: 100%;
    max-width: 45.625rem;

    @media screen and (min-width: 768px){
      padding: 4rem 2.5rem;
    }
  `

const onClickToggleTheme = () => setDarkTheme(!darkTheme)

  return (
    <React.Fragment>
      <GlobalStyle />
      <App className="App">
        <Main>
          <Header
            darkTheme={darkTheme}
            onClickToggleTheme={onClickToggleTheme} />
        </Main>
      </App>
    </React.Fragment>
  );
}

export default App;
