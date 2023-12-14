import React, { useEffect, useState } from 'react'
import StudentCards from '../components/StudentCards';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [usertype, setUserType] = useState("");
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user)
        {
            if (user === "admin@gmail.com")
            {
                setUserType("admin");
                handleAdminCommand();
            }
            else
            {
                setLoading(false);
                setUserType("student");
            }
        }
        else {
            navigate("/");
        }
    },[])

    const handleAdminCommand = async () => {
        const res = await fetch("http://localhost:3001/api/students");
        const response = await res.json();
        console.log(response)
        setData(response);
        setLoading(false);
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    }

  return (
      <div className="h-screen w-screen flex justify-center items-center bg-[#c4c4c4] relative">
          {loading ? <h1>Loading...</h1>
              :
               <>
                {  usertype === "admin" ?
                  <StudentCards data={data} />
                  :
                  <h1 className="font-[Montserrat] text-[25px]">Thanks for enrolling...</h1>
                }
              </>
          }
          <div className="absolute top-[20px] right-[20px]">
          <button className="text-[2.5vh] w-[150px] text-center py-[3.5px] text-white rounded-2xl bg-gradient-to-r from-yellow-500 via-red-700 to-red-500"
              onClick={handleLogout}
          >
             LOGOUT
          </button>
          </div>
      </div>
  )
}

export default Dashboard