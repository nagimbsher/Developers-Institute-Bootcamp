let formData = new FormData(document.forms.articleBlog);
let formDataJson = JSON.stringify(Object.fromEntries(formData))
console.log(formDataJson); 
//{"title":"Great Article","body":"Article about Javascript"}

// send it out
let xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(formDataJson);
xhr.onload = () => console.log(JSON.parse(xhr.response));
// {title: 'Great Article', body: 'Article about Javascript', id: 101}
