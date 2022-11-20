import { useState, useEffect } from 'react'
import axios from 'axios'
import './components/ProductDetail.scss'
import RecommendCard from './components/RecommendCard'

function ProductDetail(
  shop_list_sid,
  sid,
  picture_url,
  shop_name,
  product_name,
  category_name,
  shop_deadline,
  product_description,
  unit_price,
  sale_price,
  inventory_qty
) {
  const [detail, setDetail] = useState([])

  async function getDeatil() {
    const response = await axios.get(
      'http://localhost:3002/product_list?shop_list_sid=3'
    )
    console.log(response)
    setDetail(response.data)
  }
  useEffect(() => {
    getDeatil()
  }, [])

  return (
    <>
      <div className="a-productDetailWrapper">
        <div className="a-detailWrapper">
          <div className="a-shopNameWrapper">
            <img src="svg/map.svg" alt="" />
            <h3>{shop_name}</h3>
          </div>
          <div className="a-productName">
            <img src="svg/bling.svg" alt="" />
            <h3>{product_name}</h3>
          </div>
          <div className="a-informationWrapper">
            <div className="a-productCategory">
              <img src="svg/drink.svg" alt="" />
              <p>{category_name}</p>
            </div>
            <div className="a-shopDeadline">
              <img src="svg/shop.svg" alt="" />
              <p>{shop_deadline}</p>
            </div>
            <div className="a-productCollection">
              <img src="svg/collection.svg" alt="" />
              <p>加入收藏清單</p>
            </div>
          </div>
          <div className="a-productDescription">
            <p>{product_description}</p>
          </div>
        </div>
        <div className="a-priceContent">
          <div className="a-priceWrapper">
            <div className="a-productPrice">
              <p>$原價{unit_price}元</p>
            </div>
            <div className="a-productDiscount">
              <img src="./svg/like.svg" alt="" />
              <p>$折價{sale_price}元</p>
            </div>
          </div>
          <div className="a-productQuantity">
            <p>惜食剩餘數量</p>
            <p className="a-qty">{inventory_qty}</p>
          </div>
          <div className="a-quantity">
            <p>數量</p>
            <div className="a-quantityButton">
              <p>-</p>
              <p>+</p>
            </div>
          </div>
          <div className="a-addButton">
            <p>加入購物車</p>
            <img src="svg/cart.svg" alt="" />
          </div>
        </div>
      </div>
      <RecommendCard />
    </>
  )
}

export default ProductDetail
