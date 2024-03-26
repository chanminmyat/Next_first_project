'use client'
import { motion } from "framer-motion"
import Link from "next/link"

const Hero = () => {
  return (
    <div id='home' className='bg-gradient-to-b from-[#0A0A37] to-[#1D204E] flex-col flex items-center'>
        <div className='custom__container flex md:flex-row flex-col gap-5'>
            <motion.div
                initial={{x:-200, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:0.5, ease:'easeInOut'}} 
                className='flex flex-col lg:pt-36 lg:pb-[80px]'>
                <div>
                    <span className='inline-block text-light-blue text-2xl font-bold'>Convenience in one click</span>
                    <h1 className='text-white 2xl:text-[72px] lg:text-[65px] text-[50px] font-extrabold mb-[12px]'>Every Retailer Tool Suite</h1>
                    <p className='text-white text-lg mb-[31px]'>
                        Manage your inventory, ordering, sales, stores, employees, customer feedback,
                        and even marketing, all with one single tool.
                        <br />
                        Get all the analytics you need and use gamification to compete with any other
                        retailer in the market.
                    </p>
                </div>
                <div className="flex">
                    <Link className='relative bg-light-blue text-white px-[50px] py-[15px] rounded-full flex items-center justify-center overflow-hidden transition duration-300 ease out group' href={"/register"}>
                        <span className='absolute flex items-center justify-center w-full h-full text-white font-bold duration-300 -translate-x-full bg-light-blue group-hover:translate-x-0 ease'>
                            GET STARTED
                        </span>
                        <span className='absolute flex items-center justify-center w-full h-full text-white font-bold transition-all duration-300 transform group-hover:translate-x-full ease'>
                            JOIN US
                        </span>
                        <span className='relative invisible'>JOIN US</span>
                    </Link>
                </div>        
            </motion.div>
            <motion.div
                initial={{x:200, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:0.3, ease:'easeInOut'}}
            >
                <div className='md:pt-36'>
                    <img src={'/assets/img/hero/pos-illustration-header.png'} alt={''} />
                </div>
            </motion.div>
            
        </div>
        <div className='absolute flex top-0 left-0 lg:visible invisible'>
            <img src="/assets/img/hero/top-left-shape.png" alt="" />
        </div>
        <div className='w-[110%] mb-[-1px] mr-[0px] ml-[-5px]'>
            <img className='w-[110%] h-auto' src="/assets/img/elements/triangle-white.svg" />
        </div>
    </div>
  )
}

export default Hero