import { useState } from 'react'
import { useEffect } from 'react'
import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuErro, setDeuErro] = useState(true)
    const [mensagemErro, setMensagemErro] = useState('')
    const MensagemErro = ({ mensagem }) => {
        return (
            <div className="erro">
                <p>{mensagem}</p>
            </div>
        );
    };
    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (res.status !== 200) {
                    setEstaCarregando(false)
                    setErro(true)
                } else {
                    return res.json();
                }
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setDeuErro(false)
                    setRepos(resJson)
                }, 3000)
            })
            .catch(error => {
                setMensagemErro('Usuário não encontrado!')
                setDeuErro(true)
            })
    }, [nomeUsuario])
    return (
        <div className="container">
            {deuErro ? (<MensagemErro mensagem={mensagemErro} />) : (
                <>
                {estaCarregando ? (
                    <div className={styles.loading}>
                        <h1>Carregando...</h1>
                    </div>
                ) : (
                    <>
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
                    </>
                )}  
                </>          
            )}            
        </div>
    )
}

export default ReposList