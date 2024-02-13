import styles from './Perfil.module.css'
//export default () => {
// eslint-disable-next-line react/prop-types
const Perfil = ({ nomeUsuario, nomePessoa }) => {  
 return (
    <div className={styles.header}>
      <div className={styles.backgroud_header} >
      <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="foto perfil" />
      <h1 className={styles.titulo}>{nomePessoa}</h1>
      </div>
    </div>
  )
}

export default Perfil