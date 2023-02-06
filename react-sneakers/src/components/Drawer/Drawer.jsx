import React from 'react'

const Drawer = ({products, showDrawer, onHideDrawer}) => {
    return (
        <div className={`overlay ${showDrawer ? 'overlayVisible' : ''}`}>
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30" onClick={onHideDrawer}>
                    Корзина <img className="cu-p" src="img/btn-remove.svg" alt="Close" />
                </h2>

                <div className="d-flex flex-column flex">
                    <div className="items flex">
                        {products.map(poroduct => (
                            <div className="cartItem d-flex align-center mb-20">
                                <div className="cartItemImg" style={{backgroundImage: `url(${poroduct.imageUrl})` }}></div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{poroduct.title}</p>
                                    <b>{poroduct.price} руб.</b>
                                </div>
                                <img className="removeBtn" src="img/btn-remove.svg" alt="Remove"/>
                            </div>
                        ))}
                    </div>

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>12 999 руб. </b>
                            </li>
                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>{(12999 / 100) * 5} руб. </b>
                            </li>
                        </ul>
                        <button className="greenButton">
                            Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer
