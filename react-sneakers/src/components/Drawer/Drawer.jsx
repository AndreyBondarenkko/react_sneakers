import React from 'react'

const Drawer = () => {
  return (
    <div className="overlay">
        <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
                Корзина <img className="cu-p" src="img/btn-remove.svg" alt="Close" />
            </h2>

            <div className="d-flex flex-column flex">
                <div className="items flex">
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{backgroundImage: "url(/img/sneakers/1.jpg)" }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">title</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="img/btn-remove.svg" alt="Remove"/>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{backgroundImage: "url(/img/sneakers/2.jpg)" }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">title</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="img/btn-remove.svg" alt="Remove"/>
                    </div>
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
