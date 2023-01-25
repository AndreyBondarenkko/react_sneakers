import React from 'react';


/*** Import Components ***/
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Card from './components/Card/Card';

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
          <Card />
        </div>
        
      </div>  
    </div>
  );
}

export default App;
