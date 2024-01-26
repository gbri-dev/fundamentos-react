import './perfil.css'
//export default () => {
const Perfil = () => {
  const usuario = {
    nome: 'Gabriel Campos',
    avatar: 'https://github.com/gbri-dev.png'
  }

  return (
    <div className='container-perfil'>
      <img className='perfil-avatar' src={usuario.avatar} alt="foto perfil" />
      <h3 className='perfil-titulo'>{usuario.nome}</h3>
    </div>
  )
}

export default Perfil