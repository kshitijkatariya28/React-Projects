import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("Ksh");

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str + "0123456789";
    }

    if (charAllowed) {
      str = str + "!@#$%^&*()_+[]{}|;:,.<>?";
    }

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass = pass + str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  let passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="bg-slate-800 h-50 w-150 m-auto my-15 rounded-xl ">
        <div>
          <h1 className="text-white text-2xl w-full py-6 text-center">
            Password Generator
          </h1>
        </div>
        <div className="flex justify-center gap-5 border-none mx-7">
          <input
            type="text"
            className="bg-white text-yellow-600 rounded-xl w-full"
            value={password}
            readOnly
            onClick={() => {
            navigator.clipboard.writeText(password)
            }}
          />
          <button className="bg-blue-600 p-1 px-3 text-white rounded-xl ">
            copy
          </button>
        </div>

        <div className="py-6 flex justify-center gap-2">
          <input
            type="range"
            onChange={(e) => {
              setLength(e.target.value);
            }}
            min={6}
            max={100}
            value={length}
          />
          <label className="text-yellow-600" htmlFor="">
            Length : {length}
          </label>

          <input
            type="checkbox"
            min={8}
            max={100}
            onChange={() => {
              setNumberAllowed((prevValue) => !prevValue);
            }}
          />
          <label htmlFor="" className="text-yellow-600">
            Numbers
          </label>

          <input
            type="checkbox"
            onChange={() => {
              setCharAllowed((prevValue) => !prevValue);
            }}
          />
          <label htmlFor="" className="text-yellow-600">
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
