import { useState } from 'react'
import { useEffect } from 'react'
// import './ReposList.module.css'

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
        <>
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}
            {repos.map(({ id, name, language, html_url }) => (
                <div className="card" key={id}>
                    <h1>Repositórios - {name}</h1>
                    <hr />
                    <ul>
                        <li>
                            <b>Linguagem: </b> {language} <br />
                            <a target="_blank" href={html_url} rel="noreferrer">Acesse aqui.</a>
                        </li>
                    </ul>
                    <hr />
                </div>
            ))}
        </>
    )
}

export default ReposList