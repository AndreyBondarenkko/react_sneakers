import React from 'react'

const Header = ({onShowDrawer}) => {
  return (
    <header className="d-flex justify-between align-center p-40">
        <a href="/">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="Logotype" />
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
        </a>
        <ul className="d-flex list-header">
            <li className="mr-30 cu-p" onClick={onShowDrawer}>
                <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
                <span>1205 руб.</span>
            </li>
            <li className="mr-20 cu-p">
                <a href="/favorites">
                    <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
                </a>
            </li>
            <li>
                <a href="/orders">
                    <img width={18} height={18} src="/img/user.svg" alt="Пользователь"/>
                </a>
            </li>
        </ul>
    </header>
  )
}

export default Header
