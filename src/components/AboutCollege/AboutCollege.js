import React from 'react'
import { motion } from 'framer-motion';


export default function AboutCollege() {
    return (
        <div >
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}

                className='text-center text-white text-4xl font-bold pt-9 m-auto shadow-lg shadow-indigo-500/50 '>About My College</motion.h2>

            <div className=' p-0 m-0' id='aboutme'>


                <div className='flex md:justify-between justify-center flex-wrap md:p-5 md:pl-14'>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}

                        transition={{ duration: 1 }}
                        className='md:max-w-[50%] max-w-[50%] pb-4 text-justify '>
                        <h2 className='font-bold text-xl text-black'>
                            <span className='text-white'> Jagiroad College beautiful College</span>
                        </h2>
                        <motion.p
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 3 }}
                            className='pt-9 text-white font-serif'>

                            Jagiroad College (the erstwhile Kapili Anchalik Mahavidyalaya) was established on 8th August, 1979. The College is located at Jagiroad, a gradually developing semi-urban conglomeration of Morigaon district of Assam, at a distance of barely one hundred meters from the National Highway 37. .
                        </motion.p>

                        <motion.p
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 3 }}
                            className='pt-4 text-white font-serif'>
                            The serene campus, spread over a spacious area of twenty-five bighas of land, is nestled by the picturesque Sonaikuchi Hill. Culturally it lies very close to Na-Khola—the abode of the Prince Regent of the ancient Kingdom of the Tiwas –one of the tribes of the state endowed with its distinctive indigenous life-world. Jagiroad College was established by a group of foresighted and committed social-workers of the region
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3 }}
                        className='pl-4 w-[16rem] md:w-[28rem]'>
                        <img src="./gif.gif" alt="" className='rounded-full rounded-t-md rounded-tr-full' />
                        <div className='text-center pt-5'>

                            <img src="https://www.jagiroadcollege.co.in/upload/slider/1678729908.jpeg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
