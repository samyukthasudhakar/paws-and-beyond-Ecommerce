import React from 'react'

import './input.css'

export function Input({type, classname, placeholder}){
    return(
        <input type={type} className='form-input mg-tb-1' placeholder={placeholder}></input>
    )
}

