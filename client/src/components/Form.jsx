import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        else
        {
            if (formType === "signup")
            {
                try {
                    const res = await fetch("http://localhost:4000/api/signup", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify(data)
                    });
                    const response = await res.json();
                    toast.success(response);
                    localStorage.setItem("user", data.name);
                    navigate("/dashboard")
                }
                catch (error)
                {
                    toast.error("Failed to sign up. Please try again.");
                }
                
            }
            else
            {
                try {
                    const res = await fetch("http://localhost:4000/api/login", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify(data)
                    });
                    const response = await res.json();
                    toast.success(response);
                    navigate("/dashboard");
                }
                catch (error)
                {
                    toast.error("Failed to login . Please try again.");
                }
            }
        }
    }

  return (
      <div className="form flex flex-col items-center">
          <div className="input flex flex-col">
              <input type="text" className="text-[2.5vh] outline-none bg-white w-[300px] px-[20px] py-[5px] placeholder:text-red-500 text-red-500 text-center rounded-xl"
                  placeholder="NAME"
                  name="name"
                  onChange={handleChange}
              />
              <input type="text" className="text-[2.5vh] outline-none bg-white w-[300px] px-[10px] py-[5px] placeholder:text-red-500 text-red-500 text-center rounded-xl"
                  placeholder="EMAIL"
                  name="email"
                  onChange={handleChange}
              />
          </div> 

          <button className="text-[2.5vh] w-[250px] text-center py-[3.5px] text-white rounded-2xl bg-gradient-to-r from-red-500 via-red-700 to-yellow-500"
              onClick={handleSubmit}
          >
              GET VERIFICATION CODE
          </button>

          <div>
              {
                  formType === "login" ?
                      <p  className="text-white cursor-pointer underline"
                          onClick={() => {
                          setFormType("signup")
                          }}>New User? Register now
                      </p>
                      :
                      <p className="text-white cursor-pointer underline"
                          onClick={() => {
                          setFormType("login")
                          }}>Already registered? SignIn now
                      </p>
              }
          </div>

      </div>
  )
}

export default Form