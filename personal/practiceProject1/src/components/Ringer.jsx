import { useState } from 'react'

export default function Ringer () {
    const [ringBell, setRingBell] = useState([""]);
    const handleClick = () => {
        setRingBell([...ringBell, "ringadingling... "]);
    }
    return (
        <div>
            <button onClick = {handleClick}> Ring it</button>
            <p style = {{border: "2px solid black"}}>{ringBell}</p>
        </div>
    )
}