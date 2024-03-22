/* eslint-disable no-dupe-keys */
import { Link, useNavigate } from "react-router-dom";
import "./Goods.scss";
import axios from "axios";
import { useEffect, useState } from "react";
const mark = "./assets/img/mark.png";
const Goods = ({ data }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [postData, setPostData] = useState({
    name: "",
    brand: "",
    qbCode: "",
    description: "",
    discountPercentage: "",
    price: "",
  });

  // post data
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products`);
      setProducts(res?.data);
    } catch (error) {
      console.log("Hatolik bor", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = async (e) => {
    navigate("/");
    e.preventDefault();
    const newInputData = { ...postData, id: products.length + 1 + "" };
    console.log(newInputData);
    try {
      const res = await axios.post(
        "http://localhost:3000/products",
        newInputData
      );
      setPostData(res.data);
      data(res.data);
    } catch (err) {
      console.error("Error occurred:", err);
    }
  };

  const handleChangeBrand = async (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <div className="goods">
      <div className="goodsHead">
        <div className="container">
          <div className="goods_links">
            <h1>Новый товар</h1>
            <div className="link">
              <Link to="/">Главная</Link>
              <span>/</span>
              <Link to="/">Товары</Link>
              <span>/</span>
              <Link>Новый товар</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="goodsBody">
        <div className="container">
          <div className="goods_content">
            <div className="btn">
              <Link to="/">
                <button>Основные</button>
              </Link>
            </div>
            <div className="goods_form">
              <label htmlFor="">
                Название <span>*</span>
              </label>
              <input type="number" required />
              <div className="middle">
                <div className="texts">
                  <label htmlFor="">
                    Бренд <span>*</span> <img src={mark} alt="mark" />
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={postData.brand}
                    onChange={handleChangeBrand}
                    required
                  />
                </div>
                <div className="texts">
                  <label htmlFor="">
                    Артикул производителя <span>*</span>{" "}
                    <img src={mark} alt="mark" />
                  </label>
                  <input
                    type="text"
                    name="qbCode"
                    value={postData.qbCode}
                    onChange={handleChangeBrand}
                    required
                  />
                </div>
              </div>
              <label className="coment" htmlFor="">
                Описание <span>*</span>
              </label>
            </div>
            <div className="goods_form2">
              <textarea name="" id="" cols="30" rows="10"></textarea>

              <div className="input_price">
                <div className="texts">
                  <label htmlFor="price">Цена</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={postData.price}
                    onChange={handleChangeBrand}
                    required
                  />
                </div>
                <div className="texts">
                  <label htmlFor="">Цена со скидкой</label>
                  <input
                    type="text"
                    name="discountPercentage"
                    value={postData.discountPercentage}
                    onChange={handleChangeBrand}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="goods_footer">
        <div className="container">
          <div className="btn">
            <Link to="/">
              <button onClick={handleChange} className="btn11">
                Сохранить
              </button>
            </Link>
            <Link to="/">
              <button className="btn22">Отмена</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goods;
