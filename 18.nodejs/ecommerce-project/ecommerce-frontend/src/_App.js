import { useEffect, useState } from 'react'
import './App.css'
//JSX - javascript xml
const Button = ({ name, onClick }) => {
    return <button onClick={onClick}>{name}</button>
}

const InnerApp = ({ state, handleClick }) => {
    useEffect(() => {
        return () => {
            console.log(`I'm dead`)
        }
    }, [null])
    console.log(state)
    const buttons = ['Press me', 'Push me', 'Touch me']
    return (
        <div className='App'>
            {state}
            <header className='App-header'>Hello Amwell</header>
            <Button name={state} onClick={handleClick} />

            {/* {buttons.map((name) => {
            return <Button name={name} />
        })} */}
        </div>
    )
}

function App({ id }) {
    const [state, setState] = useState('Hello')
    // let state = 'Hello-me'
    return (
        <div>
            <InnerApp
                state={state}
                handleClick={(event) => {
                    //
                    console.log('OnClick')
                    setState('Tomer')
                    //state = 'Tomer'
                }}
            />
            <InnerApp state={state}></InnerApp>
        </div>
    )
}

export default App
