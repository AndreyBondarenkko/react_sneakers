

function App() {
  return (
    <div className="wrapper clear">
      { /*** Header ***/ }
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
          <li className="mr-30 cu-p">
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
              <img
                width={18}
                height={18}
                src="/img/user.svg"
                alt="Пользователь"
              />
            </a>
          </li>
        </ul>
      </header>

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

          <div className="card">
              <div className="favorite" >
                  <img src='img/liked.svg' alt="Unliked" />
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

          <div className="card">
              <div className="favorite" >
                  <img src='img/liked.svg' alt="Unliked" />
              </div>
              <div className="card-image-product d-flex justify-center">
                  <img width="auto" height={135} src="./img/sneakers/2.jpg"  alt="product"/>
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

          <div className="card">
              <div className="favorite" >
                  <img src='img/liked.svg' alt="Unliked" />
              </div>
              <div className="card-image-product d-flex justify-center">
                  <img width="auto" height={135} src="./img/sneakers/3.jpg"  alt="product"/>
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

        </div>
        
      </div>  
    </div>
  );
}

export default App;
