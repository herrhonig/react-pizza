import React from 'react'

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const catList = ['Все', 'Мясные',  'Вегетарианская', 'Гриль','Острые', 'Закрытые'];

  const activateCategory = (index) => {
    setActiveIndex(index)
  } 

  return (
    <div className="categories">
      <ul>
        {catList.length &&
          catList.map((cat, index) => <li key={index} onClick={() => activateCategory(index) } className={activeIndex === index ? "active" : ''}>{cat}</li>)
        }
        
      </ul>
    </div>
  )
}

export default Categories;



