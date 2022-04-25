import React from 'react';
import './Login.scss'

function Login() {
    return (
        <div className='form'>
            <div className='title'>歡迎來到35號管理系統</div>
            <div className='input-container'>
                <input className='input' type='text' placeholder=' '></input>
                <div className='cut'></div>
                <label className='placeholder'>帳號</label>
            </div>
            <div className='input-container'>
                <input className='input' type='text' placeholder=' '></input>
                <div className='cut'></div>
                <label className='placeholder'>密碼</label>
            </div>
            <button className='login'>登入</button>
        </div>
    )
}

export default Login;
