import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/footer'
import Header from './layouts/header'
import AddPage from './pages/add-pages'
import Detail from './pages/detail'
import HomePage from './pages/home-page'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/add-page' element={<AddPage/>}/>
    <Route path='/home-page/:_id' element={<Detail/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
