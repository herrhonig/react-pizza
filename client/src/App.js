import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import pizzaList from './assets/pizzas.json';


function App() {

  return (
    <div className="App">
      <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzaList.length &&
                pizzaList.map(pizza => 
                  <PizzaBlock  key={pizza.id} {...pizza}/>)
            }
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
