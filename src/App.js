import { Scene } from "./components"
import Menu from "./components/Menu/Menu"
import { LinkToPortfolio } from "./components/Scene/Scene.elements"

function App() {
  return (
    <>
      <Scene />
      <Menu />
      <LinkToPortfolio>
        This Project was made by
        <a href="https://juansportafolio.vercel.app/">
          John's Script
        </a>
      </LinkToPortfolio>
    </>
  )
}

export default App
