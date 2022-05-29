import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import PizzaSkeleton from './components/PizzaSkeleton/PizzaSkeleton';
import Sort from './components/Sort';
import './scss/app.scss';
import axios from 'axios';


function App() {
  const [pizzaList, setPizzaList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    axios('https://62939611089f87a57ac2dab1.mockapi.io/api/v1/items')
      .then(fetchData => {
        setTimeout(() => {
          setPizzaList(fetchData.data);
          setIsLoading(false);
        }, 1200)
      })
      .catch(err => console.log(err));
  }, [])

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
                isLoading ? 
                [...Array(6)].fill(<PizzaSkeleton />)
                :
                pizzaList.length && pizzaList.map((pizza) => <PizzaBlock key={pizza?.id} {...pizza}/>)
              }
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
