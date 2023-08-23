import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return(
        <div className="home">
            <div className="home__container">
                <div className="home__image">
         <img src="https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png" alt="" align="middle" height="vh"/>
         </div>
           <div className="home__row">
            <Product 
            id="001"
            title="Apple 2020 MacBook Air Laptop M1 Chip"
            price={719.99}
            image="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg"
            rating={5}
            />
            <Product 
            id="002"
            title="PlayStation 5 Console CFI-1102A"
            price={499.00}
            image="https://m.media-amazon.com/images/I/51051FiD9UL._SL1456_.jpg"
            rating={5}
            />

           </div>
           <div className="home__row">
           <Product 
            id="003"
            title="Apple iPhone 12 Mini, 64GB, Blue - Unlocked "
            price={329.00}
            image="https://m.media-amazon.com/images/I/61M5w4HMIJL._AC_SL1500_.jpg"
            rating={4}
            />
             <Product 
            id="004"
            title="Sony ZX Series Wired On-Ear Headphones with Mic, White MDR-ZX110AP"
            price={19.99}
            image="https://m.media-amazon.com/images/I/514piaYBBRL._AC_SL1500_.jpg"
            rating={3}
            />
             <Product 
            id="005"
            title="Apple Watch SE (2nd Gen) [GPS 40mm] Smart Watch"
            price={19.99}
            image="https://m.media-amazon.com/images/I/71YdE55GwjL._AC_SL1500_.jpg"
            rating={4}
            />

           </div>
           <div className="home__row last__row">
           <Product 
            id="100"
            title="Samsung UN78KS9500 Curved 78-Inch 4K Ultra HD Smart LED TV (2016 Model)"
            price={300.00}
            image="https://m.media-amazon.com/images/I/91f2b+oH3YL._AC_SL1500_.jpg"
            rating={5}
            />

           </div>
            </div>
        </div>
    )


}

export default Home