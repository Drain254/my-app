import { useState } from "react";

const MyThirdComponent = ()=>{
    // a react hook is a special function that lets you to use react features like states inside a fumctional component
    // exampe of hooks;useState,useEffect
    // the useState hook lets  you declare state variablbe of a functional component
    // const [state , serState] = useState(0)
    // state = the current value of the state variable
    // setState = function that is updating the state variable
    // 0 = initial value
    const[number,setNumber] = useState(10)
    const[marks,setMarks] = useState(30)
  return(
        <div>
            <h1>This is my third component</h1>
            <h1>current nuber is{number}</h1>
            {/* button to update the number */}
            <button onClick={()=> setNumber(20)}>update number</button>
            <h1>current marks{marks}</h1>
            <button onClick={()=> setMarks(100)}>update marks</button>
        </div>

    )
}
export default MyThirdComponent;