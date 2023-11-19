import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function Header({}: Props) {
  const [SocialIcon, setSocialIcon] = useState<any>(null);

  useEffect(() => {
    import('react-social-icons').then((module) => {
      setSocialIcon(() => module.SocialIcon);
    });
  }, []);

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
        initial={{ 
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        
        {/* Social Icons */}
        {SocialIcon && <SocialIcon 
          url="https://www.linkedin.com/in/jasonkchoi/" 
          fgColor='gray'
          bgColor='transparent'
        />}
        
        {SocialIcon && <SocialIcon 
          url="https://github.com/Jnadington/" 
          fgColor='gray'
          bgColor='transparent'
        />}
        {/* {SocialIcon && <SocialIcon 
          url="https://medium.com/@jason.kh.choi" 
          fgColor='gray'
          bgColor='transparent'
        />} */}
        {SocialIcon && <SocialIcon 
          url="https://www.youtube.com/" 
          fgColor='gray'
          bgColor='transparent'
        />}
        {SocialIcon && <SocialIcon 
          url="https://www.amazon.com/stores/Luvage/page/ADE81E9D-76EA-45FA-B775-2F322CC83805?ref_=ast_bln" 
          fgColor='gray'
          bgColor='transparent'
        />}



      </motion.div>

      
      <Link href='#contact'>
      <motion.div 
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      
      
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        {SocialIcon && <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />}
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
        Get in touch
        </p>
      

      </motion.div>
      </Link>
    </header>
  )
  
}
