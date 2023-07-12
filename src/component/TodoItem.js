import React from "react";

import { useState } from 'react';

function TodoItem(params) {
    const [isDone, setIsDone] = useState(false);

    function handleStyle() {
        setIsDone((prev)=> {
          return !prev;
        })
    }
    return (
        <li onClick={handleStyle} style={{textDecoration: isDone ? "line-through": "none"}} >{params.text}</li>
    )
}

export default TodoItem;