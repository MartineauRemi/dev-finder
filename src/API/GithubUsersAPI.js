const baseURL = "https://api.github.com"

export function getGithubUser(username){
    const param = "/users/" + username
    const url = baseURL + param

    return fetch(url)
            .then(data => data.json())
            .catch(error => console.error(error))
}