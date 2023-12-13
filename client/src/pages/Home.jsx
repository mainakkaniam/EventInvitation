import React from 'react'
import Form from '../components/Form'

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
              <div className="declaration text-white text-center text-[16px] sm:text-[30px]">
                  <p>WELCOME TO</p>
                  <p className="text-[20px] sm:text-[40px] font-bold">EVERYTHING UNIVERSITY</p>
                  <p>ENTER YOUR DETAILS TO ENROLL</p>
              </div>
              <Form/>
          </div>
    </div>
  )
}

export default Home