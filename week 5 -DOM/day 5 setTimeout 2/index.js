let id;
function start(){
    let i = 0
    id =setInterval(function(){
        console.log(i++);
    },300)
}

function stop(){
    clearInterval(id)
}
