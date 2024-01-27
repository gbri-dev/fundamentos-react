import styles from './Perfil.module.css'
//export default () => {
// eslint-disable-next-line react/prop-types
const Perfil = ({endereco, nome }) => {  
 return (
    <div className={styles.header}>
      <img className={styles.avatar} src={endereco} alt="foto perfil" />
      <h3 className={styles.titulo}>{nome}</h3>
    </div>
  )
}

export default Perfil