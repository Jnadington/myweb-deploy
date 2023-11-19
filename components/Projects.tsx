import { motion } from 'framer-motion';
import React from 'react'

function Projects() {
    const projects = [
        {
            title: "Algo Trading Execution",
            description: "Algo strategy execution with backtest displayed on line price chart with estimated returns. Allows user to adjust candlestick trade timeframe and TP/StopLoss for varying results. Click on the image above to view github repo: https://github.com/Jnadington/Algo-Trading-Project/tree/main",
            image: "https://i.postimg.cc/br0Tg5LS/algo-trade2.png",
            githubUrl: "https://github.com/Jnadington/Algo-Trading-Project/tree/main"
        },
        {
            title: "AWS RoboAdvisor",
            description: "This is a CUI built on the AWS platform that helps users make investment decisions based on their risk tolerance and investment horizon. Dialogue trees are fully customizable.", 
            image: "https://i.postimg.cc/pLMvp550/Test-Bot-Lambda2.gif",
            githubUrl: "https://github.com/Jnadington/AWS-RoboAdvisor"
        }
        // Add more projects with githubUrl here
    ];
    
    return (
        <div className="h-screen relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> 
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#89F819]/50">
            {projects.map((project, i) => (
    <div 
        key={project.title} // Unique key for each child
        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
    >
        <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" // This is important for security reasons
        >
            <motion.img
                initial={{
                    y: -300,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={project.image}
                alt={project.title}
            />
        </a>
        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#89F819]/50">
                    Project {i + 1} of {projects.length}:
                </span>
                 {project.title}
            </h4>
            <p>{project.description}</p>
        </div>
    </div>
))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#89F819]/10 left-0 h-[500px] -skew-y-12"/>
        </div>
    )
}

export default Projects
