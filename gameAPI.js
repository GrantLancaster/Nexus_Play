
async function getJson() {
    await fetch("https://api.rawg.io/api/games?key=58cd0b7f651f43f39a9bc30c5994b3e3")
    .then(response => response.json())
    .then(response => console.log(response));
}

getJson();
