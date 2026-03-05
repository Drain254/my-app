const MySecondComponent =()=>{ 
    // javascript code
    let message = "I love programming"
    let age = 50
    let height = 1.2
    let weight = 76 
    return(
        <div>
            <h1>my second component</h1>
            {/* bind the variables in jsx to be visible in browser */}
            <h3>{message} and i am {age} years</h3>
            <h3>{height} metres and my  {weight} kgs</h3>
        </div>
    )
}
export default MySecondComponent;