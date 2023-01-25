import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/footer'
import Header from './layouts/header'
import HomePage from './pages/home-page'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
    <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
