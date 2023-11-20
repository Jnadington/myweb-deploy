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
              src="https://2u.com/static/ca12e19db2fddb4043175117c6d6d41b/3d896/2u-logo.png"
              alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Instructional Specialist @ 2U</h4>
            <p className="font-bold text-2xl mt-1">2U Inc</p>
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
            <p className="uppercase py-5 text-gray-300">Started: Mar 2023 - Present</p>
            <ul className="list-disc  space-y-4 ml-5 text-lg overflow-y-scroll h-25">
                <li>Assisting students through slack/zoom/discord in data bootcamps with a specialization in Data Analysis, Machine Learning, and FinTech</li>

                <li>Integral part of the 24/7 support of bootcamp students, answering queries related to assignments and relevant topics</li>

                <li>One of the highest retention ratings amongst FinTech programs</li>
            </ul>
        </div>

      </article>
  ); 
}

