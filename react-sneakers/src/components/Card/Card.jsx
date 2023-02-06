import React from 'react';

const Card = ({id, title, description, price, image, onFavorite, onPlus}) => {
    /*** добавление в корзину ***/
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPLus =  () => {
        onPlus();
        setIsAdded (!isAdded)
    };
  
    return (
        <div key={id} className="card">
            <div className="favorite" onClick={onFavorite}>
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
                <div onClick={ onClickPLus }>
                    <img className='plus' src={isAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'} alt="Plus"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;