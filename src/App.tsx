import { useEffect, useState } from 'react'
import './index.css'
import Loading from './components/Loading'
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import BasketPage from './elements/BasketPage';
import ShippedPage from './pages/ShippedPage';
import RegisterationPage from './pages/RegisterationPage';

const App: React.FC =() => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false); 
  }, 4000);
  },[])

  if (loading) {
    return(
      <Loading/>
    )
  }

  return (
    <div className='w-[100%] overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category' element={<CategoryPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/shipped' element={<ShippedPage/>} />
        <Route path='/registration' element={<RegisterationPage/>}/>
      </Routes>
    </div>
  )
}

export default App
