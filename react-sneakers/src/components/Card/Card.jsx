import React from 'react';

const Card = ({id, title, description, price, image, click}) => {
    const buttonClick = () =>{
        alert(price)
    } 
  return (
    <div id={id} className="card">
        <div className="favorite" >
            <img src='img/unliked.svg' alt="Unliked" />
        </div>
        <div className="card-image-product d-flex justify-center">
            <img width="auto" height={135} src={image}  alt={title}/>
        </div>
        <div className="card-info">
        <h5>{title}</h5>
        <div className="description-product">{description}</div>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} $</b>
            </div>
            <div onClick={ click }>
                <img className='plus' src='img/btn-plus.svg' alt="Plus"/>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Card;