export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(response => response.json())
}