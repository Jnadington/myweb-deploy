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
            src="https://i.postimg.cc/bNwzvvTn/profilepic111.png"
            // src="https://i.postimg.cc/0jjbdNx6/IMG-1176.jpg"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here&apos;s a{" "}
                <span className="underline decoration-[#89F819]/50">little</span> background
            </h4>
            <p className="text-base">
                Hi! My name is <span className="font-semibold">Jason</span> and I&apos;m a FinTech Engineer and Entrepreneur based in Los Angeles! 


                
                
                <br />
                <br />
                Throughout my life I&apos;ve dabbled in many different fields but I always knew I wanted to be an entrepreneur. With the skills and connections that I&apos;ve gained, I am now pursuing my dream of starting my own business!
                
                
                <br />

                {/* The heart of coding is problem solving, and I have come to love the satisfaction that comes with solving difficult problems with my computer.
                <br /> */}
                <br />
                
                
               
                {/* <br />
                
                In my free time I like to play guitar, train Muay Thai and Jiu Jitsu, and cook perfect medium rare steaks. 
                <br />
                <br />

                My favorite guitarists of all time: Steve Vai and John Petrucci

                <br />

                My favorite fighters of all time: Anderson Silva and Mirko Cro Cop

                <br />
                Go-to steak: Ribeye */}
                {/* <br />
                <br /> */}
                But don&apos;t let that deter you from reaching out. I am always looking to collab! 
                <br />

                

            </p>
        </div>
    </motion.div>
    ); 
}

