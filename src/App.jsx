import Main from './Components/BasicSearch/Main'
import Home from './Components/ExampleContext/Home'
import Sample from './Components/ExampleContext/Sample'
import { ThemeProvider } from "./Components/ExampleContext/ThemeProvider";
import Counter from './Components/ExampleReducer/Counter'
function App() {
  return (
    <>
        <ThemeProvider>
        <Main />
        <Home/>
      </ThemeProvider>
      <Counter/>
    </>
  )
}

export default App