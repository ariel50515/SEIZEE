import './App.css'
import ProductCard from './pages/Product/components/ProductCard'
import ProductDescripton from './pages/Product/components/ProductDescripton'
import YellowWave from './pages/Product/components/YellowWave'
import YellowWave2 from './pages/Product/components/YellowWave2'
// import Video from './pages/home/components/video'
import Video from './pages/home/components/Video'
import EventDate from './pages/home/components/EventDate'
import ProductList from './pages/Product/ProductList'

function App() {
  return (
    <>
      {/* <YellowWave /> */}
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div> */}
      <ProductList />
      {/* <Video /> */}
      {/* <ProductDescripton />
      <YellowWave2 /> */}
      {/* <ProductList /> */}
      {/* <EventDate /> */}
    </>
  )
}

export default App
