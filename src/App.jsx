import { useState } from 'react'
import Perfil from './components/Perfil'
import Repos from './components/ReposList'

function App() {
  const [exibeInput, setExibeInput] = useState(false)
  const [nickName, setNickName] = useState('gbri-dev')   

  return (
    <>
      <Perfil nomeUsuario={nickName} />
      <Repos nomeUsuario={nickName} />
      <footer className="footer">
        <div className="cop" onClick={() => setExibeInput(!exibeInput)}>&raquo; {nickName} &laquo;</div>
        {exibeInput && (
          <input className="inputNickName" type="text" placeholder='Nick name?' onBlur={e => setNickName(e.target.value) } />
        )}
      </footer>   
    </>
  )
}

export default App
