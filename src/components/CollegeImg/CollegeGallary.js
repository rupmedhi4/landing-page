import React from 'react';
import { motion } from 'framer-motion';

export default function CollegeGallery() {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}

                className='text-center text-white text-4xl font-bold pt-9 m-auto shadow-lg shadow-indigo-500/50 '>College Gallery</motion.h2>
            <>
                {/* component */}
                <div className="container mx-auto p-4 mt-9 shadow-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 3 }}


                            className="grid gap-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/special2.jpg"
                                    alt=""
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/clg2.jpg"
                                    alt=""
                                />
                            </motion.div>

                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/clg3.jpg"
                                    alt=""
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 3 }}
                            className="grid gap-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/clg4.jpg"
                                    alt=""
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/clg5.jpg"
                                    alt=""
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/clg6.jpg"
                                    alt=""
                                />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 3 }}
                            className="grid gap-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/clg7.jpg"
                                    alt=""
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/clg8.jpg"
                                    alt=""
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/clg9.jpg"
                                    alt=""
                                />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 3 }}
                            className="grid gap-9">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/clg10.jpg"
                                    alt=""
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/special.jpg"
                                    alt=""
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src="/clg12.jpg"
                                    alt=""
                                />
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </>

        </div>
    );
}


