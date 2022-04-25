
import React from 'react';
import './InputA.scss'

interface InputAProp {
    name: string
    type: string
}

function InputA(props: InputAProp) {
    return (
        <div className='input-a-container'>
            <span>{ props.name }</span>
            <input type={props.type}></input>
        </div>
    );
}

export default InputA;
