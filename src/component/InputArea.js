import React from "react";

function InputArea(params) {
    return (
        <div className="InputClass">
            <input onChange={params.onChange} name='fname'/> 
            <button onClick={params.onClicked}>Submit</button> <br/><br/>
        </div>
    )
}

export default InputArea;