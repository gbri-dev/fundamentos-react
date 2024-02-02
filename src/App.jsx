import Perfil from './components/Perfil'
import Repos from './components/ReposList'

function App() {

  return (
    <>
      <Perfil endereco="https://github.com/gbri-dev.png" nome='Gbri-dev' />
      <div className='d-flex'>
        <div className="card">
          <Repos />
        </div>
      </div>
    </>
  )
}

export default App
