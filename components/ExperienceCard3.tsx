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
              src="https://s3-media0.fl.yelpcdn.com/bphoto/_3NEgPEhNr1QfS2-0omKlw/348s.jpg"
              alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Assistant Coach @ Wai Kru MMA</h4>
            <p className="font-bold text-2xl mt-1">Wai Kru MMA</p>
            <div className="flex space-x-2 my-2">
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDf-BaRWOJtnIeynKgX8JkPHzHLeew9We3z1BjXUzbQbS9YmqG7RcbvT9EAFKpWn45j7M&usqp=CAU"
                    alt=""
                />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://static.thenounproject.com/png/643352-200.png"
                    alt=""
                />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/boxing_gloves_red.png"
                    alt=""
                />
            </div>
            <p className="uppercase py-5 text-gray-300">Started: Nov 2017 - Ended: Sep 2020</p>
            <ul className="list-disc  space-y-4 ml-5 text-lg overflow-y-scroll h-25">
                <li>Designed and led warm-up exercises and drills, promoting a friendly, motivating environment</li>
                <li>Facilitated gym closure during the pandemic and handled alterations in memberships</li>
                <li>Represented Wai Kru in amateur bouts & events</li>
            </ul>
        </div>

      </article>
  ); 
}

