import { motion } from 'framer-motion'
import React from 'react'
import Skill from '@/components/Skill'
import SkillSolidity from './SkillSolidity'
import SkillPython from './SkillPython'
import SkillChatGPT from './SkillChatGPT'
import SkillAWS from './SkillAWS'
import SkillTensorflow from './SkillTensorflow'
import SkillGit from './SkillGit'
import SkillSQL from './SkillSQL'
import SkillTableau from './SkillTableau'
import SkillScikit from './SkillScikit'
import SkillR from './SkillR'
import SkillVBA from './SkillVBA'
import SkillPandas from './SkillPandas'
import SkillAlteryx from './SkillAlteryx'
import SkillMongoDB from './SkillMongoDB'
import SkillGoogle from './SkillGoogle'
import SkillAmazon from './SkillAmazon'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5}}
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Skills
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">Hover over a skill for current proficiency
        </h3>

        <div className="grid grid-cols-4 gap-5">

            <SkillPython />
            <SkillGit />
            <SkillSQL />
            <SkillGoogle />
            <SkillAmazon />
            <SkillAWS />
            <SkillVBA />
            <SkillTensorflow />
            <SkillChatGPT />
            <SkillSolidity />
            <SkillScikit />
            <SkillR />
            <SkillTableau />
            <Skill />
            <SkillPandas />
            <SkillMongoDB />

            {
            // <Skill2 />
            // <Skill3 /> 
            /* <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill /> */}
        </div>
    </motion.div>
  )
}

export default Skills