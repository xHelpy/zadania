import axios from "axios";
import React, {createContext, useContext, useEffect, useState} from "react";
import './App.css';


function App() {
    const [count,setCount] = useState(0)
    const [count2,setCounter] = useState(0)
    const [light,setEnabled] = useState("white")

    const [language,setLanguage] = useState("pl");

    let IntervalId;
    let currentcc = 0
    function startCounter()
    {
        if(!IntervalId)
        {
            IntervalId = setInterval(counterCounting,1000)

        }
    }
    function counterCounting()
    {
        currentcc += 1
        setCounter(currentcc)




    }
    function stopCounting()
    {
        console.log("test")
        clearInterval(IntervalId)
        IntervalId = null
    }
    if(count < 0)
    {
        setCount(0)
    }







  return (
      <div className="App" style={{backgroundColor: light}}  id="appbg">
      <div>
          <button onClick={() => setCount(count + 1)}>
              +
          </button>
          <button> Licznik: {count}</button>
          <button onClick={() => setCount(count - 1)}>
              -
          </button>
      </div>
          <button onClick={() => setEnabled("white")} >Włącz</button>
          <button onClick={() => setEnabled("black")}>Wyłącz</button>
      <div>
          <div>
              <button onClick={startCounter}>Start Counter</button>
                <p>{count2}</p>
              <button onClick={stopCounting}>Stop Counter</button>
          </div>

      </div>
          <div>
              <button onClick={() => setLanguage("pl")} >pl</button>
              <button onClick={() => setLanguage("en")}>en</button>

          </div>
          <div>
              <ol>

              </ol>

          </div>
      </div>
  );
}

export default App;
