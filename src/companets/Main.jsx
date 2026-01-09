import React from 'react'
import "./main.css"
function Main() {
  return (
    <div>


      <section className="hero">
        <div className="hero-content">
          <h1>Dive into Delights Of Delectable <span>Food</span></h1>
          <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
          <div className="hero-btns">
            <button className="order-btn">Order Now</button>
            <div className="watch-video">
              <div className="play-btn">▶</div>
              <span>Watch Video</span>
            </div>
          </div>
        </div>



        <img src="./ooo.png" alt="Delicious Food" className="food-image" />


      </section>



      <section className="categories">

        <p className="small-title">CUSTOMER FAVORITES</p>

        <h2>Popular Categories</h2>

        <div className="category-cards">

          <div className="cat-card">
<img src="./11.png" alt="" />
            <h4>Main Dish</h4>

            <p>(86 dishes)</p>

          </div>

          <div className="cat-card">
<img src="./11.png" alt="" />
            <h4>Break Fast</h4>
            <p>(12 break fast)</p>
          </div>

          <div className="cat-card">
<img src="./11.png" alt="" />
            <h4>Dessert</h4>
            <p>(48 dessert)</p>
          </div>

          <div className="cat-card">
<img src="./11.png" alt="" />
            <h4>Browse All</h4>
            <p>(255 items)</p>
          </div>
        </div>
      </section>


      <section className="dishes">
        <p className="small-title">SPECIAL DISHES</p>
        <h2>Standout DishesFrom Our Menu</h2>

        <div className="dish-cards">
          <div className="dish-card">
            <img src="./12.png" alt="" />
            <h4>Fattoush salad</h4>
            <p>Description of the item</p>
            <div className="price">
              <span>$24.00</span>
              <span> 4.9</span>
            </div>
          </div>

          <div className="dish-card">
            <img src="./12.png" alt="" />
            <h4>Vegetable salad</h4>
            <p>Description of the item</p>
            <div className="price">
              <span>$26.00</span>
              <span> 4.6</span>
            </div>
          </div>

          <div className="dish-card">  
            <img src="./12.png" alt="" /> 
            <h4>Egg vegi salad</h4>
            <p>Description of the item</p>
            <div className="price">
              <span>$23.00</span>
              <span> 4.5</span>
            </div>
          </div>
        </div>
      </section>







    </div>
  )
}

export default Main
