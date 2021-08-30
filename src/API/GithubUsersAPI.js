const baseURL = "https://api.github.com"

export function getGithubUser(username){
    const param = "/users/" + username
    const url = baseURL + param

    return fetch(url)
            .then(data => data.json())
            .catch(error => {
                console.error(error)
                return null
            })
}

/**
 * 
 * @param {*} date with the format: "2008-01-14T04:33:35Z"
 * return the date with the format "14 Jan 2008"
 */
export function formatedDate(date){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const split = date.split('-')
    
    const year = split[0]
    const month = months[split[1][1] - 1]
    const day = split[2].slice(0,2)

    return `${day} ${month} ${year}`
}