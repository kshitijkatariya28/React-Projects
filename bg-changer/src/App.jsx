import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="h-screen w-full" style={{backgroundColor : color}}>
         <div className="fixed bottom-12 justify-center inset-x-0 px-2">
             <div className="flex flex-wrap gap-3 rounded-3xl shadow-lg justify-center bg-white px-3 py-2 w-fit mx-auto">
            <button onClick={()=>{
              setColor("red")
            }} className="bg-red-600 px-2 rounded-3xl ">Red</button>
            <button onClick={()=>{
              setColor("green")
            }} className="bg-green-600 px-2 rounded-3xl ">Green</button>
            <button onClick={()=>{
              setColor("olive")
            }} className="bg-green-900 px-2 rounded-3xl ">Olive</button>
            <button onClick={()=>{
              setColor("yellow")
            }} className="bg-yellow-600 px-2 rounded-3xl ">Yellow</button>
            <button onClick={()=>{
              setColor("purple")
            }} className="bg-purple-600 px-2 rounded-3xl ">Purple</button>
            <button onClick={()=>{
              setColor("white")
            }} className="bg-gray-200 px-2 rounded-3xl ">White</button>
            <button onClick={()=>{
              setColor("blue")
            }} className="bg-blue-600 px-2 rounded-3xl ">Blue</button>
            <button onClick={()=>{
              setColor("black")
            }} className="bg-black px-2 text-white rounded-3xl ">Black</button>
             </div>
         </div>
     </div>
    </>
  )
}

export default App
