import { useState } from 'react'
import plsBackground from "../public/please.gif";
import thanksBackground from "../public/thanks.gif";
import './App.css'

function App() {
  const [yesHeight, setYesHeight] = useState(5)
  const [noHeight, setNoHeight] = useState(3.5)
  const [yesWidth, setYesWidth] = useState(11)
  const [noWidth, setNoWidth] = useState(11)
  const [noText, setNoText] = useState("No")
  const [accepted, setAccepted] = useState(false)

  const beggings = [
    "Pweasu?", 
    "Don't be so cold.", 
    "Think again plese TwT", 
    "Am I that bad?",
    "Have a heart >_<",
    "I'll be a cute pookie UwU"
  ]

  return (
    <div className="text-center h-screen w-screen flex flex-col latte">
      <img src={
        `${(accepted?thanksBackground:plsBackground)}`
      } className="px-64 -z-10 fixed"/>
      <h1 className={`text-4xl mt-52 p-8 rounded-4xl backdrop-blur ${(accepted?"hidden":"")}`} >Will you be my Valentine?</h1>
      <div className={`grid grid-rows-2 gap-4 items-center justify-center ${(accepted?"pt-64 text-4xl":"")}`}>
        <button 
          className={`font-bold bg-ctp-green p-4 rounded-2xl w-44 h-20 ${(accepted?"bg-ctp-green/75 backdrop-blur":"bg-ctp-green")}`}
          style={{height: `${yesHeight}em`, width: `${yesWidth}em`}}
          onClick={e=>{
            setAccepted(true)
            setYesHeight(6)
            setYesWidth(12)
          }}
        >
          {accepted?" I WUV YOUUU SOOO MUCH >_<":"Yes"}
        </button>
        <button 
          className={`font-bold bg-ctp-maroon p-4 rounded-2xl px-10 ${(accepted?"hidden":"")}`}
          onClick={
            e=>{ 
              setYesHeight(yesHeight+0.5)
              setYesWidth(yesWidth+0.5)
              setNoHeight(noHeight-0.1)
              setNoWidth(noWidth-0.1)
              setNoText(beggings[Math.floor(Math.random() * beggings.length)])
            }
          }>
          {noText}
        </button>
      </div>
    </div>
  )
}

export default App
