const jokeTitle = document.getElementById('joke-title')
const jokeBody = document.getElementById('joke-box')

async function getJoke() {
    const options = {
        method: 'GET',};
    const response = await fetch("https://official-joke-api.appspot.com/random_joke", options);
    const jsonData = await response.json();
    const title = jsonData.setup;
    const joke = jsonData.punchline;
    jokeTitle.innerText = title
    jokeBody.innerText = joke
    console.log(title + joke);
}
getJoke()

const finalJoke = document.getElementById('btn')
finalJoke.addEventListener('click', getJoke)
