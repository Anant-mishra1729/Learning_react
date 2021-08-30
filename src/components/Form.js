import React, { useState } from 'react'


export default function Textform() {

    const handleUpClick = () => {
        setUpper(text.toUpperCase());
    }

    const handleOnChange = (event) => {
        setUpper(event.target.value);
    }

    // States
    const [text, setUpper] = useState('');

    return (
        <div>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder="Enter your text here..." onChange={handleOnChange} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" id="toUpper" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    )
}
