import React from 'react';
import takeshiface from '../assets/wallpaperbetter.jpg';

export const username = "あやっぴー";
function Gallery() {
    return(
        <img src={takeshiface} alt={username} width="800px" />
    );
    
}

export 
function Homepage() {
    return (
        <div>
            <h1 color='red'>ようこそ。{username}のウェブ開発へ</h1>
            <p>reactを学習中の{username}です!!!</p>
            <Gallery />
        </div>
    );
}

export default Homepage;