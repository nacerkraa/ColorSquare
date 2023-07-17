import React, { useState } from "react";

const Content = () => {
    const [input, setInput] = useState('');

    function handleInput(e) {
        setInput(e.target.value);
    }


    return (
        <main>
            <h1 className="title">My App</h1>

            <div className='boxColor' 
                style={{'backgroundColor': input}}
            >
                {input ? input : "Empty value"}
            </div>

            <input autoFocus 
                placeholder="add color name"
                type="text" onChange={handleInput} 
                value={input}
            />
        </main>
    )
}

export default Content;