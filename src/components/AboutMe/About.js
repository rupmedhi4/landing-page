import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className='flex flex-col w-[80%] mx-auto justify-center mt-9'>
      <motion.h2
       initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 3 }}
       className='text-center text-white font-extrabold text-4xl'>About Me</motion.h2>
      <motion.p
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 3 }}
       className='  text-white font-bold mt-4 text-justify'>
        Greetings! I am Sabita Medhi, a dedicated student currently in my third semester pursuing a B.A. at Jagiroad College. My academic focus revolves around the enchanting realm of Assamese literature, a subject that has captivated my interest and imagination. In the pursuit of knowledge, I spend hours immersing myself in the rich tapestry of Assamese language and culture.

        Jagiroad College has become my second home, fostering an environment that nurtures both academic and personal growth. The faculty's support and the intriguing courses have made my college experience not just educational but also deeply enriching. Engaging with peers who share a passion for our cultural heritage has been an integral part of my journey.
      </motion.p>
    </div>
  );
}
