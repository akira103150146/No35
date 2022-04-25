import React from 'react';
import Header from '../components/Header';
import './Home.scss'
import '../css/Reset.scss'

function Home() {
    return (
        <div className='home'>
            <Header></Header>
            <div className='frame-container'>
                <div className='frame'>frame1</div>
                <div className='frame'>frame2</div>
                <div className='frame'>frame3</div>
                <div className='frame'>frame4</div>
                <div className='frame'>frame5</div>
            </div>
        </div>
    );
}

export default Home;
