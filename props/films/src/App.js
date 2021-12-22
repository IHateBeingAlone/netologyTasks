import React from "react";
import {Stars} from './components/Stars';
import "./style.css";

export default function App() {

    const counts = 1;

    let isShow;

    counts >= 1 && counts <= 5 ? isShow = true : isShow =  false;

    if (isShow) {
        return (
            <ul className="card-body-stars">
                <Stars className="stars" counts={counts}/>
            </ul>
        );
    }
}