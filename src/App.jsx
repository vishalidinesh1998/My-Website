import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Header from './components/Header'
import Hero from "./components/Hero"
import Artical from "./components/Artical"
import Footer from "./components/Footer"
import Table from "./components/Table"
import Aside from "./components/Aside"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar></Navbar>
    <Header></Header>
    <Hero></Hero>
{/* 
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto p-6 items-start">
  <main className="md:col-span-2 space-y-6">
    <Artical />
    <Table />
  </main>
  <Aside />
</div> */}

 <div className='container flex flex-col md:flex-row mx-auto p-6'>
        <main className='flex-1'>
          <Artical />
          <Table />
        </main>
        <Aside />
      </div>

    <Footer></Footer>
    </div>
  )
}

export default App
