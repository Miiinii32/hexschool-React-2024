import axios from "axios";
import React from "react";
import LoginPage from "./loginPage";
LoginPage;
const { useState, useEffect } = React;
const url = `${import.meta.env.VITE_BASE_URL}`;
const path = `${import.meta.env.VITE_API_PATH}`;

const ProductList = ({ product, setProductDetail }) => {
  return (
    <>
      <tr>
        <td scope="row">{product.title}</td>
        <td>{product.origin_price}</td>
        <td>{product.price}</td>
        <td>{product.is_enabled}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setProductDetail(product);
            }}
          >
            查看細節
          </button>
        </td>
      </tr>
    </>
  );
};
const ProductDetail = ({ product }) => {
  return (
    <>
      <div className="card">
        <img
          src={product.imageUrl}
          className="card-img-top"
          style={{ height: "350px", objectFit: "contain" }}
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">
            {product.title}
            <span className="badge text-bg-primary ms-2">
              {product.category}
            </span>
          </h5>
          <p className="card-text">
            <span>商品描述：</span>
            {product.description}
          </p>
          <p className="card-text">
            <span>商品內容：</span>
            {product.content}
          </p>
          <p className="card-text">
            <span className="text-secondary text-line-through">
              {product.origin_price}
            </span>
            {`元 / ${product.price}元`}
          </p>
          <h5 className="card-title">更多圖片：</h5>
          <div className="row">
            <div className="col-6">
              <img src={product.imagesUrl[0]} alt="" className="w-100" />
            </div>
            <div className="col-6">
              <img src={product.imagesUrl[1]} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ProductListPage = () => {
  const [productDetail, setProductDetail] = useState({});
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProductList = async () => {
      try {
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        );
        axios.defaults.headers.common["Authorization"] = token;
        const res = await axios.get(`${url}/v2/api/${path}/admin/products/all`);
        setProductList(Object.values(res.data.products));
        // console.log(Object.values(res.data.products));
      } catch (error) {
        console.log(error.response);
      }
    };
    getProductList();
  }, []);
  const handleLogout = () => {
    const logout = async () => {
      try {
        const res = await axios.post(`${url}/v2/logout`);
        console.log(res);
        document.cookie = `hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC}`;
        delete axios.defaults.headers.common["Authorization"];
        window.location.href = "/";
        setIsLogout(true);
      } catch (error) {
        console.log(error.response);
      }
    };
    logout();
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h2>產品列表</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">產品名稱</th>
                  <th scope="col">原價</th>
                  <th scope="col">售價</th>
                  <th scope="col">是否啟用</th>
                  <th scope="col">查看細節</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((product) => {
                  return (
                    <ProductList
                      product={product}
                      key={product.id}
                      setProductDetail={setProductDetail}
                    />
                  );
                })}
              </tbody>
            </table>
            <button
              type="button"
              className="btn btn-info mt-5"
              onClick={handleLogout}
            >
              登出會員
            </button>
          </div>
          <div className="col-6">
            <div className="d-flex mb-3">
              <h2 className="mb-0">單一產品細節 </h2>
              <button
                type="buttonz"
                className="btn btn-secondary btn-sm ms-2 align-items-center"
                onClick={() => {
                  setProductDetail({});
                }}
              >
                關閉商品詳細頁
              </button>
            </div>

            {productDetail.imageUrl ? (
              <ProductDetail product={productDetail} />
            ) : (
              <p className="text-secondary">請選擇一個商品查看</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
