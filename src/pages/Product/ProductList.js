import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PRODUCT } from '../../my-config'
import axios from 'axios'
import ProductCard from './components/ProductCard'

function ProductList(props) {
  const [productCard, setProductCard] = useState([])

  // const location = useLocation()
  // console.log(location)

  async function getProductCard() {
    const response = await axios.get(
      'http://localhost:3002/product_list?shop_list_sid=3'
    )
    console.log(' response ' + response)
    setProductCard(response.data)
  }
  useEffect(() => {
    console.log('useeffect')
    getProductCard()
  }, [])
  console.log(' productcard ' + productCard)
  const CardList = productCard.map((product) => {
    return (
      <ProductCard
        shopId={product.shop_list_sid}
        productId={product.sid}
        img={product.picture_url}
        name={product.product_name}
        price={product.unit_price}
        discount={product.sale_price}
        quantity={product.inventory_qty}
        residual={product.inventory_qty}
      />
    )
  })
  console.log('CardList - ' + CardList)
  return(
    <>
  { CardList }
    </>
  )
  

  // return <p>hello</p>
}
export default ProductList
