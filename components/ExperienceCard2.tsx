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
              src="https://www.withlovela.com/wp-content/uploads/2019/07/pepperdine-graziadio-business-school-logo.jpg"
              alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Participant @ Pepperdine FinTech Bootcamp</h4>
            <p className="font-bold text-2xl mt-1">Pepperdine University</p>
            <div className="flex space-x-2 my-2">
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-1024.png"
                    alt=""
                />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
                    alt=""
                />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://user-images.githubusercontent.com/13250741/64669187-33b55380-d47e-11e9-8bbf-c02a9d42f9a7.png"
                    alt=""
                />
            </div>
            <p className="uppercase py-5 text-gray-300">Started: Jan 2022 - Ended: Jul 2022</p>
            <ul className="list-disc  space-y-4 ml-5 text-lg overflow-y-scroll h-25">
                <li>Gained project experience in creating predictive models using Python, building decenralized identity systems using blockchain technologies, and applying machine learning algorithms to trading securities</li>
                <li>Developed a trading bot using Python and the Alpaca API to automate trading strategies</li>
            </ul>
        </div>

      </article>
  ); 
}

