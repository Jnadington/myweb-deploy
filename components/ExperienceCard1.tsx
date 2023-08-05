import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}        
              transition={{ duration: 1.2}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true }}
              className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
              src="https://www.emotivebrand.com/wp-content/uploads/2020/12/Topstep-Animationdzs.jpg"
              alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Funded Trader @ Topstep</h4>
            <p className="font-bold text-2xl mt-1">Topstep LLC</p>
            <div className="flex space-x-2 my-2">
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://play-lh.googleusercontent.com/JXKzB18F4sn2juqCJJTGZ-RrRxRe0iV-L3bUX8BmP5ZeDFUybMS5pvt35a7Fo0n_oeXD"
                    alt=""
                />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://avatars.githubusercontent.com/u/7644688?s=280&v=4"
                    alt=""
                />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://user-images.githubusercontent.com/13250741/64669187-33b55380-d47e-11e9-8bbf-c02a9d42f9a7.png"
                    alt=""
                />
            </div>
            <p className="uppercase py-5 text-gray-300">Started: Jan 2022 - Ended: Jan 2023</p>
            <ul className="list-disc  space-y-4 ml-5 text-lg overflow-y-scroll h-25">
                <li>Progressed from initial funding of $100k to $150k as a trader with topstep</li>
                <li>Specialized in 15min - 1hr timeframe trades</li>
                <li>Designed algorithm to generate trade signals using EMAs, VIX, and ADX indicators using Python</li>
                <li>Developed machine learning algorithm utilizing deep reinforcement learning and optimizing deceision-making in market environments</li>
            </ul>
        </div>

      </article>
  ); 
}

