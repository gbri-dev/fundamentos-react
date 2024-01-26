import './perfil.css'
//export default () => {
// eslint-disable-next-line react/prop-types
const Perfil = ({endereco, nome }) => {  
 return (
    <div className='container-perfil'>
      <img className='perfil-avatar' src={endereco} alt="foto perfil" />
      <h3 className='perfil-titulo'>{nome}</h3>
    </div>
  )
}

export default Perfil