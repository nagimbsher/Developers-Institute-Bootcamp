


const xhr = new XMLHttpRequest();
xhr.open('GET' ,'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json'
xhr.send();
xhr.onload = () => {
    console.log('response',xhr.response)
    let arr = xhr.response;
    const content = arr.map(item => {
        return `<div style='diply:inline-block;border:1px solid #000;margin:10px;padding:20px'>
      <img src= 'https://robohash.org/${item.id}2?size=150x150'/>
         <h2> ${item.name}</h2>
          <P>${item.email}</p>
          <p> ${item.username}</p>
        </div>`
        
    })
    document.getElementById('root').innerHTML = content.join('')
}