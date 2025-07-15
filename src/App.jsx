
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutComponent from './component/dashboard/layout'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutComponent />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
