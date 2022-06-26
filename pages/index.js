import React from 'react'

const Index = (props) => {
    return (
        <div>
            <h1>Bem-vindo!</h1>
            <div>{props.currentDate}</div>
            {props.repos.map(repo => {
                return (
                    <div>
                        <h3>{repo.full_name}</h3>
                        <p>Language: {repo.language} / Starts: {repo.stargazers_count}</p>
                    </div>
                )
            })}
        </div>
    )
}
export async function getServerSideProps(context) {
    const resRepos = await fetch('https://api.github.com/users/wallaceherlon/repos?sort=updated')
    const repos = await resRepos.json()
    return {
        props: {
            currentDate: new Date().toString(),
            repos
        }
    }
}
export default Index