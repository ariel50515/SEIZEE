import React from 'react'
import { Link } from 'react-router-dom'
import './style/ProductCard.scss'

function ProductCard({
  shop_list_sid,
  sid,
  picture_url,
  product_name,
  unit_price,
  sale_price,
  inventory_qty,
}) {
  return (
    <>
      <div className="a-produtCardWrapper">
        <div className="a-productCardContent">
          <div className="a-productImgWrapper">
            <img src={`/img/${picture_url}`} alt="商品照" />
          </div>
          <div className="a-productCardTitle">
            <h3>{product_name}</h3>
            <img src="svg/collection.svg" alt="" />
          </div>
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
            <p className="a-quantity">{inventory_qty}</p>
            <p>數量</p>
            <p className="a-quantity2">
              {inventory_qty}
              <img src="svg/triangle.svg" alt="" />
            </p>
          </div>
          <div className="a-addButton">
            <p>加入購物車</p>
            <img src="svg/cart.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
