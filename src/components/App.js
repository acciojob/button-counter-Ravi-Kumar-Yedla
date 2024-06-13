
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[count,setCount] = useState(0);

    const incrementButton =()=>{
      setCount(count+1);
    }
  return (
    <div>
      <p>Button Clicked {count}</p>
      <button onClick={incrementButton}>Increment</button>
    </div>
  )
}

export default App
