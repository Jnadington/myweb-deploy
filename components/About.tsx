import { motion } from "framer-motion";
import React from "react"
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >

        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img
            initial={{
                x: -250,
                opacity: 0,
            }}
            transition={{
                duration: 1.5,
            }}
            whileInView={{ opacity:1, x: 0 }}
            viewport={{ once: true}}
            src="https://i.postimg.cc/yx3NVfv9/IMG-1585.jpg"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here&apos;s a{" "}
                <span className="underline decoration-[#89F819]/50">little</span> background
            </h4>
            <p className="text-base">
                Thank you for visiting my first fully deployed website! 
                <br />
                <br />
                Although I&apos;m not a web developer, I figured I&apos;d give it a shot at building my own. After all, how can I call myself a developer if I can't even build a simple website?
                
                <br />
                <br />
                I think it turned out pretty good :)

                <br />
                <br />
                I am a big fan of the minimalist design and I wanted to create a website that is simple and easy to navigate. I hope you enjoy it!
                <br />
                <br />
                I&apos;m a FinTech Engineer and Data Analyst based in Los Angeles. I graduated from Babson College in 2021 with a B.S. in Business and Finance. I was initially drawn to the finance world because of cryptocurrencies and blockchain technology. And I have come to love the technology and the community behind it. I enjoy building trading bots, analyzing data, and thinking of ways to implement new technologies into the financial world. I am a creative at heart and would love to work with a team that is eager to bring positive changes to the world. 

                <br />

                <br />
                In my free time I like to play guitar, train Muay Thai and Jiu Jitsu, and cook perfect medium rare steaks. 

                

            </p>
        </div>
    </motion.div>
    ); 
}

