import React from 'react';

function Food({ name, picture }) {  
  return <div><h1>I like {name} </h1>
  <img src={picture} />
  </div>
}

const foodILike=[{
  name:"Kimchi",
  image:"https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg"
},{
  name:"Kimbap",
  image:"https://jajabakes.com/wp-content/uploads/2018/08/cut-kimbab-recipe-1.jpg"
},{
  name:"Ramen",
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg"
}];


function App() {
  return (
    <div><h1>hello</h1>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
