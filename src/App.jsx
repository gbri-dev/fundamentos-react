import Perfil from './components/Perfil'
import Repos from './components/ReposList'

function App() {

  return (
    <>
    <Perfil endereco="https://github.com/gbri-dev.png" nome='Gbri-dev' />    
    <Repos />
    </>
  )
}

export default App
