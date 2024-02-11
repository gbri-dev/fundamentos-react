import styles from './Perfil.module.css'
//export default () => {
// eslint-disable-next-line react/prop-types
const Perfil = ({ nomeUsuario }) => {  
 return (
    <div className={styles.header}>
      <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="foto perfil" />
      <h1 className={styles.titulo}>{nomeUsuario}</h1>
    </div>
  )
}

export default Perfil