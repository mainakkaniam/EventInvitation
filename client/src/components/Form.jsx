import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const Form = () => {
    const navigate = useNavigate();
    const [formType, setFormType] = useState("login");
    const [data, setData] = useState({});

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async () => {
        if (data.name === undefined || data.email === undefined)
        {
            toast.error("Please enter all your credentials!");
        }
        else if (handleVerifyEmail(data.email) === false)
        {
            toast.error("Please enter correct email !")
        }
        else
        {
            if (formType === "signup")
            {
                try {
                    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/signup`, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify(data)
                    });
                    const response = await res.json();
                    if (res.status === 200)
                    {
                        toast.success(response.message);
                        localStorage.setItem("user", data.email);
                        navigate("/dashboard")
                    }
                    else
                    {
                        toast.error(response.message)
                     }
                }
                catch (error)
                {
                    toast.error("Failed to sign up. Please try again.");
                }
                
            }
            else
            {
                try {
                    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify(data)
                    });
                    const response = await res.json();
                    if (res.status === 200)
                    {
                        toast.success(response.message);
                        localStorage.setItem("user", data.email);
                        navigate("/dashboard");
                    }
                    else
                        toast.error(response.message)
                }
                catch (error)
                {
                    toast.error("Failed to login . Please try again.");
                }
            }
        }
    }

    const handleVerifyEmail = (email) => {
        if (!email.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)))
            return false;
        else
            return true;
    }

  return (
      <motion.div className="form flex flex-col items-center h-[50vh] justify-evenly"
      variants={{
        animate:{
           opacity:1
        }
        }}
        initial={{
          opacity:0
        }}
        whileInView="animate"
        transition={{
          duration: 1,
        }}>
          <div className="input flex flex-col gap-y-[4vh]">
              <input type="text" className="text-[2.5vh] outline-none bg-white w-[300px] px-[20px] py-[5px] placeholder:text-red-500 text-red-500 text-center rounded-xl"
                  value={data.name}
                  placeholder="NAME"
                  name="name"
                  onChange={handleChange}
              />
              <input type="text" className="text-[2.5vh] outline-none bg-white w-[300px] px-[10px] py-[5px] placeholder:text-red-500 text-red-500 text-center rounded-xl"
                  value={data.email}
                  placeholder="EMAIL"
                  name="email"
                  onChange={handleChange}
              />
          </div> 

          <button className="text-[2.5vh] w-[250px] text-center py-[3.5px] text-white rounded-2xl bg-gradient-to-r from-yellow-500 via-red-700 to-red-500"
              onClick={handleSubmit}
          >
              {
                  formType==="signup"? "GET STARTED":"WELCOME BACK"
              }
          </button>

          <div>
              {
                  formType === "login" ?
                      <p  className="text-white cursor-pointer underline text-[17px]"
                          onClick={() => {
                          setFormType("signup")
                          }}>New User? Register now
                      </p>
                      :
                      <p className="text-white cursor-pointer underline text-[17px]"
                          onClick={() => {
                          setFormType("login")
                          }}>Already registered? SignIn now
                      </p>
              }
          </div>

      </motion.div>
  )
}

export default Form