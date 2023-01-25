import React from 'react';

const Card = () => {
  return (
    <div className="card">
        <div className="favorite" >
            <img src='img/unliked.svg' alt="Unliked" />
        </div>
        <div className="card-image-product d-flex justify-center">
            <img width="auto" height={135} src="./img/sneakers/1.jpg"  alt="product"/>
        </div>
        <div className="card-info">
        <h5>Card</h5>
        <div className="description-product">Мужские кроссовки Nike Blazer Suende</div>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 $</b>
            </div>
            <div>
                <img className='plus' src='img/btn-plus.svg' alt="Plus"/>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Card;