import React from 'react';


/*** Import Components ***/
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Card from './components/Card/Card';


/*** Data object ***/
const data = [{"key":1,"title":"Nike Pegasus Trail 3","description":"Mens Trail Running Shoes","price":170,"imageUrl":"./img/sneakers/1.jpg"},{"key":2,"title":"Nike Pegasus Trail 3 GORE-TEX","description":"Mens Waterproof Trail Running Shoes","price":210,"imageUrl":"./img/sneakers/2.jpg"},{"key":3,"title":"Nike React Miler 2 Shield","description":"Mens Weatherised Road Running Shoes","price":126,"imageUrl":"./img/sneakers/3.jpg"},{"key":4,"title":"Nike Free Run 5.0","description":"Mens Road Running Shoes","price":135,"imageUrl":"./img/sneakers/4.jpg"},{"key":5,"title":"Nike React Miler 2 Shield","description":"Men's Weatherised Road Running Shoes","price":180,"imageUrl":"./img/sneakers/5.jpg"},{"key":6,"title":"Мужские Кроссовки Nike Blazer Mid Suede","price":12999,"imageUrl":"img/sneakers/6.jpg"},{"key":7,"title":"Кроссовки Black Edition","price":16999,"imageUrl":"img/sneakers/6.jpg"},{"key":8,"title":"Кроссовки Orange Boomb Edition","price":7499,"imageUrl":"img/sneakers/7.jpg"}];

function App() {
  return (
    <div className="wrapper clear">
      { /*** Driver ***/ }
      <Drawer />

      { /*** Header ***/ }
      <Header/>


      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          { /*** Search ***/ }
          <div className="search-block d-flex">
            <img className="clear cu-p" src="img/btn-remove.svg" alt="Clear" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        { /*** Cards ***/ }
        <div className="card-grid d-flex flex-wrap">
          {
            data.map(product => 
            <Card 
              id={product.key}
              title={product.title}
              description={product.description}
              image={product.imageUrl}
              price={product.price}
              click={()=>console.log(product)}
            />)
          }
        </div>
        
      </div>  
    </div>
  );
}

export default App;