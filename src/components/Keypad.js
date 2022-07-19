// Code Keypad Component Here

function Keypad(){

    function inputTracker(){
        console.log("Entering password...")
    }

    return(
        <input onChange={inputTracker} type="password"/>
    );
}

export default Keypad