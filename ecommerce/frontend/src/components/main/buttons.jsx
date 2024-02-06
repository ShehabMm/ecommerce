import {useState} from 'react'
import "./main.css";

const Buttons = () => {

  const [check, setchick] = useState(false);


  return (
    <div>

      <button onClick={()=>{

setchick(!check)


      }} className={true?"active":null}>hi</button>

      <button onClick={()=>{

setchick(!check)

      }} className={true?"active":null}>bye</button>


      <button onClick={()=>{

setchick(!check)


      }} className={true?"active":null}>cry </button>
    </div>
  );
};

export default Buttons;
