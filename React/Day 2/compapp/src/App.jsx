import Student from './components/Student'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
const App = ()=>{

  return(<>
  <div>
    <div className='parent'>
      <h1 className='start'>Task 1</h1>
      <Student/>
    </div>
    <div className='parent'>
      <h1 className='start'>Task 2</h1>
      <Header/>
      <Content/>
      <Footer/>
    </div>
    <div className='parent'>
      <h1 className='start'>Task 3</h1>
      <div className="products">
        <ProductCard name="Notebook" price="$4.99" category="Stationery" available={true} />
        <ProductCard name="Water Bottle" price="$12.50" category="Accessories" available={true} />
        <ProductCard name="Desk Lamp" price="$24.00" category="Home" available={false} />
      </div>
    </div>
  </div>
    
    
  </>
  )
}

export default App
