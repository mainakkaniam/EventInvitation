import React from 'react'

const StudentCards = ({ data }) => {
  console.log(data)
  return (
      <div className="flex flex-wrap">
          <table>
              <thead>
                  <td>Name</td>
                  <td>Email</td>
              </thead>
              <tbody>
              {
              data.map((item) => (
                  <>
                      <tr>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      </tr>
                  </>
              ))
              }
              </tbody>
          </table>
          <style>
              {
                  `
                  table {
                    font-family: arial, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                  }
                  
                  td, th {
                    border: 1px solid black;
                    text-align: left;
                    padding: 8px;
                  }
                  
                  tr:nth-child(even) {
                    background-color: #dddddd;
                  }
                  `
              }
          </style>
    </div>
  )
}

export default StudentCards
