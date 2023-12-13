import React from 'react'
import Form from '../components/Form'
import { motion } from "framer-motion";

const Home = () => {
  return (
      <div className="home flex h-screen w-screen relative">
          <img
              className="h-screen w-screen"
              src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
              alt="university"
          />
          <div className="gradient absolute  top-0 h-screen w-screen opacity-[0.6] bg-gradient-to-r from-red-500 via-red-700 to-yellow-500" />
          <div className="main absolute top-0 w-full">
              <motion.div
                        variants={{
                            animate:{
                               marginTop:"0%",
                               opacity:1
                            }
                            }}
                            initial={{
                              marginTop: "5%",
                              opacity:0
                            }}
                            whileInView="animate"
                            transition={{
                              duration: 1,
                            }}
                  className="declaration text-white text-center text-[22x] sm:text-[30px] font-[Montserrat] tracking-[5px] h-[50vh] flex flex-col justify-center">
                  <p>WELCOME TO</p>
                  <p className="text-[30px] sm:text-[40px] font-extrabold font-[Liber] tracking-normal">EVERYTHING UNIVERSITY</p>
                  <p className="font-bold">ENTER YOUR DETAILS TO ENROLL</p>
              </motion.div>
              <Form/>
          </div>
    </div>
  )
}

export default Home