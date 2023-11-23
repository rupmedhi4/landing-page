import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";






export default function Footer() {


    return (
        <div className='flex justify-center flex-col items-center '>
            <motion.h3
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                className='text-center text-white text-4xl font-bold pt-9 m-auto shadow-lg shadow-indigo-500/50m mb-6 '>Please Subcribe to my Youtube Channel 🙏 🙏 🙏 </motion.h3>

            <motion.iframe
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                width="1350" height="484" src="https://www.youtube.com/embed/CRsduKAJfQY" title="জাগীৰোড মহাবিদ্যালয়ৰ অসমীয়া বিভাগৰ ষষ্ঠ ষান্মাসিকৰ দাদা-বা সকলৰ বিদায় সভা🥺❤||আহক চোন চাওঁ ভিডিওটি" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-[90%]'></motion.iframe>


            <div className='flex font-serif  font-bold'>
                <motion.ul 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                className='flex flex-col justify-end text-white gap-4 mt-4 text-xl cursor-pointer rounded-full '>
                    <h2 className='text-[2rem] mt-12'>Follow Me</h2>
                    <div className='flex justify-evenly text-[1.5rem] '>
                        <li><a href="https://www.instagram.com/sabitamedhi124" target='blank'> <FaInstagram /></a></li>

                        <li><a href="https://www.facebook.com/profile.php?id=100094562291985" target='blank'> <FaFacebook /></a></li>
                        <li><a href="https://www.youtube.com/@sabitamedhi5631" target='blank'> <FaYoutube /></a></li>


                    </div>

                </motion.ul>
                </div> 

                <div className='float-left font-serif'>
                    <motion.div 
                     initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                    className='flex justify-center mt-6 text-yellow-300 pb-6'>
                        <i>Copyright</i>
                        <FaRegCopyright className='h-[1.5rem] w-[2rem]' />
                        <i>2023 Rup Medhi</i>
                    </motion.div>
            </div>


        </div>

    );
}
