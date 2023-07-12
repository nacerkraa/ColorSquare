import React from "react";

import { useState } from 'react';

function TodoItem(params) {

    return (
        <li onClick={params.onChecked} >{params.text}</li>
    )
}

export default TodoItem;