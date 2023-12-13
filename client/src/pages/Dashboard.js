import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [usertype, setUserType] = useState("");
    const [data, setData] = useState({});

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
    },[])

    const handleAdminCommand = async () => {
        const res = await fetch("http://localhost:3001/api/students");
        const response = await res.json();
        setData(response);
        setLoading(false);
    }

  return (
      <div className="h-screen w-screen justify-center items-center">
          {loading && <h1>Loading...</h1>}
          {
              !loading && usertype === "admin" ?
                  <StudentCards data/>
                  :
                  <h1>Thanks for enrolling...</h1>
          }
      </div>
  )
}

export default Dashboard