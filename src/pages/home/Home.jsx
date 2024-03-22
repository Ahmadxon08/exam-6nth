/* eslint-disable react/prop-types */
// Home.js
import { Link } from "react-router-dom";
const search = "./assets/img/search.png"; // Rasm faylni o'qish
import "./Home.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";

const Home = ({ data }) => {
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState([]);

  // fetch data
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setProducts(res.data);
      setSearchData(res.data);
    } catch (error) {
      console.log("Hatolik bor", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [data]);

  const handleSearchData = (e) => {
    let value = e.target.value.toLowerCase();
    const filteredData = searchData?.filter((el) => {
      return (
        el?.description?.toLowerCase().includes(value) ||
        el?.brand?.toLowerCase().includes(value)
      );
    });
    setProducts(filteredData);
  };

  return (
    <div className="home">
      <div className="homeHead">
        <div className="container">
          <div className="home_links">
            <h1>Товары</h1>
            <div className="link">
              <Link>Главная</Link>
              <span>/</span>
              <Link>Товары</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="homeBody">
        <div className="container">
          <div className="homeContent">
            <div className="contentHead">
              <h1>Все товары {products.length}</h1>
              <div className="search">
                <img src={search} alt="you can search" />
                <input
                  type="search"
                  placeholder="Поиск"
                  onChange={handleSearchData}
                />
              </div>
            </div>
            <div className="contentBody">
              <div className="table_head">
                <span>Наименование</span>
                <span>Артикул</span>
                <span>Бренд</span>
                <span>Цена</span>
                <span>Цена со скидкой</span>
                <span>Настойки</span>{" "}
              </div>
              <div className="line"></div>
              <div className="table_body">
                <Products products={products} data={fetchProducts} />
              </div>
            </div>
          </div>
          <div className="add">
            <Link to="/goods">+ Новый товар</Link>
            <h2>© Anymarket 2022</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
