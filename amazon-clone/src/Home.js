import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345"
          title="Logitech mouse"
          price={21}
          rating={3}
          image="https://www.vedion.pl/pol_pl_-R-Myszka-Logitech-Trackman-Marble-Mouse-Trackball-26_1.png"
        />
        <Product
          id="12345"
          title="Laptop HP"
          price={300}
          rating={5}
          image="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/11/pr_2019_11_25_15_2_6_965_06.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="JBL Extreme"
          price={141}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKh8nktEreMcqSWdnIoeqIm2xgOJkk-UU5jg&usqp=CAU"
        />
        <Product
          id="12345"
          title="Air Pods"
          price={220}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9UHKwlKsC9K2g4WPuj3PEiXhVtmA1fciKe3QFSLmDD_u09GvPEzQD5Gctx8hXoSBjBx6UapM&usqp=CAc"
        />
        <Product
          id="12345"
          title="Dell monitor"
          price={110}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71UM7fcc%2BNL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="Gaming Monitor"
          price={500}
          rating={2}
          image="https://asset.conrad.com/media10/isa/160267/c1/-/pl/002162646PI00/image.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
