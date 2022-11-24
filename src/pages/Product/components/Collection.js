// import { useState, useEffect } from 'react'
// import axios from 'axios'

// function Collection() {
//   const [collection, setCollection] = useState([])
//   const [errorMessage, setErrorMessage] = useState([])

//   async function getCollection() {
//     try {
//       const response = await axios.get('/collection?member_sid=2')
//       console.log(response)
//       const Cdata = response.data
//       setCollection(Cdata)
//     } catch (e) {
//       console.error(e.message)
//       setErrorMessage(e.message)
//     }
//   }

//   const add = async (food_product_sid) => {
//     const res = await axios.get(
//       `api/collection/add?food_product_sid=${food_product_sid}&member_sid=${member_sid}`
//     )
//     console.log(res.data)

//     {
//       setCollection.map((v, i) => {
//         if (v.sid === food_product_sid) return { ...v, collected: !v.collected }

//         return {
//           ...v,
//         }
//       })
//     }
//   }

//   const remove = async (food_product_sid) => {
//     const res = await axios.get(
//       `api/collection/delete?food_product_sid=${food_product_sid}&member_sid=${member_sid}`
//     )
//     console.log(res.data)

//     {
//       setCollection.map((v, i) => {
//         if (v.id === food_product_sid) return { ...v, collected: !v.collected }

//         return {
//           ...v,
//         }
//       })
//     }
//   }
//   useEffect(() => {
//     getCollection()
//   }, [])

//   return (
//     <>
//       <ul>
//         {collection.map((v, i) => {
//           return (
//             <li>
//               {v.name}/
//               {v.collected ? (
//                 <button
//                   onClick={() => {
//                     remove(v.id)
//                   }}
//                 >
//                   <img src="04-product/svg/collection.svg" alt="" />
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     add(v.id)
//                   }}
//                 >
//                   <img src="04-product/svg/like.svg" alt="" />
//                 </button>
//               )}
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }

// export default Collection
