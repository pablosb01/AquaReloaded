"use client";

import { useState, useEffect } from 'react';

export default function NameRotator({names, interval = 1000}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, interval);

        return() => clearInterval(timer);
    },[names, interval]);

    return(
        <div>
            <h1 className='text-5xl'>{names[currentIndex]}</h1>
        </div>
    )
}