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
    let typee=e.target.custfood.value;
    let price=getRandomInt(5,10);
    let img;
    if (typee==='shawarma'){
    img=imgArray[2];
    new Food(name,type,img,price);
    }
    if(typee==='burger'){
    img=imgArray[0];
    new Food(name,type,img,price);
    }
    if(typee==='pizza'){
    img=imgArray[1];
    new Food(name,type,img,price);
    }

    
localStorage.setItem('Data',JSON.stringify(Food.all))
let tr =document.createElement('tr');
tablee.appendChild('tr');

let td=document.createElement('img');
td.src=img;
tr.appendChild(td);

let td1=document.createElement('td');
tr.appendChild(td1);

let p1=document.createElement('p');
td1.appendChild(p1);
p1.textContent=` name :${name}`;

let p2=document.createElement('p');
td1.appendChild(p2);
p2.textContent=`typee:${type}`;

let p3=document.createElement('p');
td1.appendChild(p3);
p3.textContent=`price:${price}`;
  }

  cust.addEventListener('submit',getData);






function render(){

  let data=JSON.parse(localStorage.getItem('Input'));
  if (data){
    Food.all=data;
    for( let i=0; i< data.length; i++){
      console.log(data);
      let tr=document.createElement('tr');
      tablee.appendChild(tr);

      let td=document.createElement('td');
      td.setAttribute('id',i)
      tr.appendChild(td);


      let img =document.createElement('img');
      img.src=data[i].img;
      document.getElementById(i).appendChild('img');


      let td1=document.createElement('td');
      tr.appendChild(td1);

      let p1=document.createElement('p');
      td1.appendChild(p1);
      p1.textContent=`name:${data[i].name}`;

      let p2=document.createElement('p');
      td1.appendChild(p2);
      p2.textContent=`typee:${data[i].type}`;

      let p3=document.createElement('p');
      td1.appendChild(p3);
      textContent=`price:${data[i]}.price}`;

    }
  }
}
render();
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}