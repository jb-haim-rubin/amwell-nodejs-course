const btnRef = document.querySelector('#btn-exp')
btnRef.addEventListener('click', printThis) //Assign the function reference to the event

function printThis() {
    //This event raised before the character added to the value
    console.log(this)
    debugger
}

printThis()
