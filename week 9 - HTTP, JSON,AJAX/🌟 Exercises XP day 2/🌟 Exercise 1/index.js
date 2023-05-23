function compareToTen(num){
    return new Promise((resolve,reject) =>{
if (num <10){
    resolve("Number is small then 10 .A");
}else{
("Number is too hight.try again");
}
    });
}
compareToTen(15)
.then((res) => console.log(res))
.catch((err) =>console.error(err));