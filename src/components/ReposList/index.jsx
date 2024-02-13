import { useState } from 'react'
import { useEffect } from 'react'
import styles from './ReposList.module.css'

const ReposList = () => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/gbri-dev/repos')
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 3000)
            })
    }, [])

    return (
        <div className={styles.container}>
            {estaCarregando && (
                <div className={styles.loading}>
                    <h1>Carregando...</h1>
                </div>
            )}
            {repos.map(({ id, name, language, html_url }) => (
                <div className={styles.card} key={id}>
                    <div className={styles.itemName}>
                        <h3>Repositórios - {name}</h3>
                    </div>                    
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <div className={styles.itemLanguage}>                            
                                Linguagem: {language}
                            </div>                           
                            <a className={styles.itemLink} target="_blank" href={html_url} rel="noreferrer">Acesse aqui!</a>                            
                        </li>
                    </ul>                    
                </div>
            ))}
        </div>
    )
}

export default ReposList