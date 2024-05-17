import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/pages/Home/Home'

export function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
