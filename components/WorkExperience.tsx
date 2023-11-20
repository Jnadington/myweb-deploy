import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import ExperienceCardLuvage from './ExperienceCardLuvage'
import ExperienceCard1 from './ExperienceCard1'
import ExperienceCard2 from './ExperienceCard2'
import ExperienceCard3 from './ExperienceCard3'


type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}

        className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience
        </h3>
        

        <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-5 overflow-x-hidden overflow-x-auto md:overflow-x-scroll p-5 md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#89F819]/50">
            <ExperienceCardLuvage />
            <ExperienceCard />
            <ExperienceCard1 />
            <ExperienceCard2 />
            <ExperienceCard3 />
            {/* <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard /> */}

            {/* Experience Card */}
            {/* Experience Card */}
            {/* Experience Card */}
            {/* Experience Card */}
        </div>
    </motion.div>
  )
}

export default WorkExperience