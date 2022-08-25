import React, { Component, useState, useEffect } from 'react'
import "./leaderboard.css"
const Leaderboard = () => {
    const [users,setUsers] = useState(null)

    const fetchData = () => {
        console.log(localStorage.getItem("auth-token"));
        fetch("http://localhost:8000/leaderboard/",{
          method: "GET",
          headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` },
        })
          .then(response => {
            return response.json()
          })
          .then(data => {
            console.log(data, "hgejhghfyd")
            setUsers(data);
            // setPlayerArray(data)
          })
      }

      useEffect(() => {
        fetchData();
        
      },
        []
      )
    return (
        
        <div className="lead_body pb-12 text-gray-200">
            <h2 className='text-4xl pt-12 pb-12 font-mono text-cyan-300'>Final LeaderBoard</h2>
            <table id="table" className='border-2 border-cyan-200 bg-[#111254b0]'>
                <div class="table-section">
                    <tr class="header-row">
                        <th class="header-item items">RANK</th>
                        <th class="header-item items">Username</th>
                        <th class="header-item items">TOTAL RATINGS</th>
                    </tr>



                    {users && users.map((member, i) => (
                        
                            <tr class="table-rows " key={`member${i}`}>
                                <td class="items">{i + 1}</td>
                                <td class="items">{member.username}</td>
                                <td class="items ">{member.score}</td>
                            </tr>
                    
                    ))}
                </div>
        
        </table >
      </div >
    );
}


export default Leaderboard
