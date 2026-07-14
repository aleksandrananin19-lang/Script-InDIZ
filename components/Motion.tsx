'use client';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
export const FadeIn = ({children, className=''}:{children:ReactNode; className?:string}) => <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-80px'}} transition={{duration:.7, ease:'easeOut'}} className={className}>{children}</motion.div>;
