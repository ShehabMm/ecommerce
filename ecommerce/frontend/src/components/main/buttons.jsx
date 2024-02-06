import {useState} from 'react'
import "./main.css";

const Buttons = () => {

  const [check, setchick] = useState("gg");


  return (
    <div>

      <button onClick={()=>{

setchick("hi")


      }} className={check==="hi"?"active":null}>hi</button>


      <button onClick={()=>{

setchick("bye")

      }} className={check==="bye"?"active":null}>bye</button>


      <button onClick={()=>{

setchick("cry")


      }} className={check==="cry"?"active":null}>cry </button>
    </div>
  );
};

export default Buttons;
