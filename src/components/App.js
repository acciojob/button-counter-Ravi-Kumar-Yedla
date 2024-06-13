
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[count,setCount] = useState(0);

    const incrementButton =()=>{
      setCount(count+1);
    }
  return (
    <div>
      <p>Button Clicked {count} times</p>
      <button onClick={incrementButton}>click me</button>
    </div>
  )
}

export default App
