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
              src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/9/AmazonStores/ATVPDKIKX0DER/3d66ca4807917dadc27b0c584226098a.w400.h400._CR0%2C0%2C400%2C400_SX400_.jpg"
              alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Digital Marketing Manager</h4>
            <p className="font-bold text-2xl mt-1">Luvage</p>
            <div className="flex space-x-2 my-2">
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b3/95/c4/b395c43b-3b9b-df61-bb92-4df9c77f30e2/AppIcon-0-1x_U007emarketing-0-5-0-85-220.png/1200x630wa.png"
                    alt=""
                />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://mybrandjourney.com/wp-content/uploads/2020/02/google-analytics.png?x42868"
                    alt=""
                />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://www.freepnglogos.com/uploads/shopify-logo-png/ecommerce-shopify-logo-hd-1.png"
                    alt=""
                />
            </div>
            <p className="uppercase py-5 text-gray-300">Started: May 2020 - Present </p>
            <ul className="list-disc  space-y-4 ml-5 text-lg overflow-y-scroll h-25">
                <li>Joined Luvage, a women&apos;s apparel brand, as a marketing contractor</li>
                <li>Drove online sales, leading to best-seller on Amazon with 1200+ ratings: https://tinyurl.com/luvagelisting12</li>
                <li>Utilizing targeted SEO strategies and optimizations</li>
            </ul>
        </div>

      </article>
  ); 
}

