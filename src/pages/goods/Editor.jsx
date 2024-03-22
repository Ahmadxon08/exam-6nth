/* eslint-disable react/prop-types */
/* eslint-disable no-dupe-keys */
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Goods.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Editor = ({ data }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [postData, setPostData] = useState({
    id: "",
    name: "",
    brand: "",
    qbCode: "",
    description: "",
    discountPercentage: "",
    price: "",
  });

  // fetch data
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      const data = res?.data;
      setPostData({
        id: data?.id,
        name: data?.name,
        brand: data?.brand,
        qbCode: data?.qbCode,
        description: data?.description,
        discountPercentage: data?.discountPercentage,
        price: data?.price,
      });
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
    try {
      const res = await axios.put(
        `http://localhost:3000/products/${id}`,
        postData
      );
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
            <h1>Редактировать продукт</h1>
            <div className="link">
              <Link to="/">Главная</Link>
              <span>/</span>
              <Link to="/">Товары</Link>
              <span>/</span>
              <Link>Редактирование</Link>
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
                    Бренд <span>*</span> <span>?</span>
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
                    Артикул производителя <span>*</span>
                    <span>?</span>
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

export default Editor;
