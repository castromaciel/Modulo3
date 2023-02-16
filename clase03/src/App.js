import { useEffect, useState } from 'react';
import Nav from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  // const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <Nav name='Rolling Code' />
      <div className='mt-3 d-flex justify-content-center flex-wrap gap-3'>
        {/* {
          products?.map((product) => {
            const {id, title, image, description} = product
            
            return (<Card
              key={id}
              title={title}
              image={image}
              description={description}
            />)
          })
        } */}
        {
          products?.map((product) => (<ProductCard key={product.id} {...product} />))
        }

        {/* <span className='text-white'> Hiciste click {count} veces! </span>
        <button className='btn btn-outline-light' onClick={() => setCount(count + 1)}>
          Contador
        </button>
        {
          count >= 10
            ? <h3 className='text-white'>Felicidades, clickeaste más de 10 veces</h3>
            : null
        } */}
        
      </div>
    </>
  );
}

export default App;
