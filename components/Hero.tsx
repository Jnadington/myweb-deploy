import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackGroundCircles from './BackGroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            
            "Hi, I'm Jason_Choi.json", 
            "Lover-of-mixed-martial-arts.txt",
            "ButLovesCodingMore == True",
            "Shredsguitar.zip",
            "github/Jnadington",
            
        ],
        loop: true,
        delaySpeed: 1950
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackGroundCircles />
            <img 
                className="relative rounded-full h-32 w-32 mx-auto object-cover"

                src="https://i.postimg.cc/HLhSb6DH/IMGwhite.png"
                // src="https://i.postimg.cc/bNwzvvTn/profilepic111.png"

                // src="https://i.postimg.cc/wMCQvmV4/profilepic1.jpg"
                alt=""
            />
            <div className="z-20">
                <h2 className="text-sm suppercase text-green-500 pb-2 tracking-[15px]"> FinTech Engineer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="#89F819" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton"> About</button>
                    </Link>
        
                    <Link href="#experience">
                        <button className="heroButton"> Experience</button>
                    </Link>
                    
                    <Link href="#skills">
                        <button className="heroButton"> Skills </button>
                    </Link>
                    
                    <Link href="#projects">
                        <button className="heroButton"> Projects </button>
                    </Link>
                </div>
            </div>
        </div>
    );
  
}