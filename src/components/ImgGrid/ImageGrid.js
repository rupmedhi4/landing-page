import React from 'react'
import './Style.css'
import { motion } from 'framer-motion';


export default function ImageGrid() {
  return (
    <div >
    
      <div className="gridContainer ">
      <motion.h1 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      className='text-center text-white text-4xl font-bold pt-9 m-auto shadow-lg shadow-indigo-500/50 '>Photo Gallary</motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid1">
          <img src="/sabita2.jpg" alt="image1" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid2">
          <img src="/sabita6.jpg" alt="image2" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid3">
          <img src="/sabita4.jpg" alt="image3" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid4">
          <img src="/sabita5.jpg" alt="image4" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid5">
          <img src="/sabita6.jpg" alt="image5" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid6">
          <img src="/sabita10.jpg" alt="image6" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid6">
          <img src="/sabita8.jpg" alt="image7" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid6">
          <img src="/sabitas.jpg" alt="image7" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid2">
          <img src="/sabita9.jpg" alt="image7" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid10">
          <img src="/sabitanew2.jpg" alt="image7" />
        </motion.div>
      
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="grid10">
          <img src="/sabitanew.jpg" alt="image7" />
        </motion.div>
      </div>
    </div>


  )
}
