// Code EyesOnMe Component Here

const EyesOnMe = () => {

    function focusedEyes(){
        console.log('Good!')
    }

    function blurredEyes(){
        console.log('Hey! Eyes on me!')
    }

    return(
        <button onFocus={focusedEyes} onBlur={blurredEyes}>Eyes on me</button>
    )
}

export default EyesOnMe