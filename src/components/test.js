import React, { useState } from "react";

const Test = () => {
    const[details, setdetails] = useState({counter:0, name: ""});
    function counterIncrement() {
        setdetails((prev) => ({
            ...prev,
            counter:prev.counter + 1,
        }));
    }
    const handleNameChange = (e) => {
      setdetails((prev) => ({
        ...prev,
        name: e.target.value,
      }));
    }
  return (
    <div>
      <input type="text" onChange={handleNameChange}/>
      <h1>{details.name}Clicked {details.counter} times!</h1>
      <button onClick={counterIncrement}>Increase</button>
    </div>
  )
}

export default Test
