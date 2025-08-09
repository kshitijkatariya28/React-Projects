import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [card, setCard] = useState([])

  let fetchData = async ()=>{
    let api = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data =await api.json()
    setCard(data)
    console.log(data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <div className="container">
         {card.map((car)=>(
          <div className="card" key={car.id} style={{background:"tomato",border:"2px solid black"}}>
                <h1>{car.userId}</h1>
              <p>{car.title}</p>
           </div>
         )   
         )}
      </div>
    </>
  )
}

export default App
