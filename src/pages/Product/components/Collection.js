// import { useAuth } from 'utils/useAuth'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const member_id = 2

function Home() {
  // const { auth } = useAuth()
  const [foods, setFoods] = useState([
    { id: 1, name: '111', collected: false },
    { id: 2, name: '222', collected: false },
    { id: 3, name: '333', collected: false },
    { id: 4, name: '444', collected: false },
  ])

  const [collection, setCollection] = useState([])

  const getCollection = async () => {
    const res = await axios.get(
      'api/collection?member_id=' + member_id,
      {
        // withCredentials: true,
      }
    )

    console.log(res.data)

    const foodIds = res.data.data
    setCollection(foodIds)

    const newFoods = foods.map((v, i) => {
      return {
        ...v,
        collected: foodIds.includes(v.id),
      }
    })

    console.log(newFoods)

    setFoods(newFoods)
  }

  const add = async (food_id) => {
    const res = await axios.get(
      `api/collection/add?food_id=${food_id}&member_id=${member_id}`
    )

    console.log(res.data)

    const newFoods = foods.map((v, i) => {
      if (v.id === food_id)
        return { ...v, collected: !v.collected }

      return {
        ...v,
      }
    })

    setFoods(newFoods)
  }

  const remove = async (food_id) => {
    const res = await axios.get(
      `api/collection/delete?food_id=${food_id}&member_id=${member_id}`
    )

    console.log(res.data)

    const newFoods = foods.map((v, i) => {
      if (v.id === food_id)
        return { ...v, collected: !v.collected }

      return {
        ...v,
      }
    })

    setFoods(newFoods)
  }

  useEffect(() => {
    getCollection()
  }, [])

  return (
    <>
      <h1>Home</h1>
      {/* <h2>{auth.isAuth ? '會員已登入' : '未登入'}</h2> */}
      <ul>
        {foods.map((v, i) => {
          return (
            <li>
              {v.name}/
              {v.collected ? (
                <button
                  onClick={() => {
                    remove(v.id)
                  }}
                >
                  O
                </button>
              ) : (
                <button
                  onClick={() => {
                    add(v.id)
                  }}
                >
                  X
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home
