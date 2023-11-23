
import React from 'react'
import { motion } from 'framer-motion';
import { AiOutlineDownCircle } from 'react-icons/ai';


export default function HomeImg() {
  return (

    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      className='flex flex-col justify-center mt-[10rem] text-[3rem] md:mt-[16rem] md:text-[6rem] font-bold'
    >
      <h1
        className='flex justify-center text-yellow-300'
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
      >
        Welcome
      </h1>
      <AiOutlineDownCircle className='flex justify-center mx-auto text-center mt-[5rem] text-3xl bg-transparent border border-blue-400 rounded-full animate-bounce' />
    </motion.div>




  )
}

