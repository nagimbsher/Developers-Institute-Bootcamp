function getRandomJoke(e){
    e.preventDafault()
    const xhr = new XMLDocument();
    xhr.withCredentials = true;



xhr.open('GET', 
`https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=${e.target.cat.value}`)


xhr.setRequestHeader('accept', 'application/json');
xhr.setRequestHeader('X-RapidAPI-Key', '2cf1c3b674msh48fb6fd7449e52cp136cadjsn4980875ef17a');
xhr.setRequestHeader('X-RapidAPI-Host', 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com');


xhr.send();

xhr.onload = () => {
    let joke = JSON.parse(xhr.response).value;
    document.getElementById('root').innerHTML = joke
console.log(JSON.parse(xhr.response).value);

}

}
