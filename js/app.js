'use strict'
let cust=document.getElementById('cust');
let table=document.getElementById('tablee');
let submit=document.getElementById('sub');
  let imgArray=['./img/burger.jpg','./img/pizza.jpg','./img/shawarma.jpg'];
function Food(name,type,img,price){
    this.name=name;
    this.type=type;
    this.img=img;
    this.price=price;
    Food.all.push(this);

}
    
Food.all=[];

function getData(e){
    e.preventDefult();

    let name=e.target.custname.value;
    let type=e.target.custfood.value;
    let price=getRandomInt(5,10);
    let img;
    if (type===shawarma){
    img=imgArray[2];
    new Food(name,type,img,price);
    }
    if(type===burger){
    img=imgArray[0];
    new Food(name,type,img,price);
    }
    if(type===pizza){
    img=imgArray[1];
    new Food(name,type,img,price);
    }

    


}

