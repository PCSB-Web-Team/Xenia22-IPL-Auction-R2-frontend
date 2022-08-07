import React, { Component } from 'react'
import "./leaderboard.css"
const leaderboard = () => {
    const participants = [
        {
            ParticipantsName: "Participants1",

            Ratings: "97.5",
            number: "1"

        },
        {
            ParticipantsName: "Participants2",
            Ratings: "97.5",
            number: "2"

        },
        {
            ParticipantsName: "Participants3",
            Ratings: "97.5",
            number: "3"

        },
        {
            ParticipantsName: "Participants4 ",
            Ratings: "97.5",
            number: "4"

        },
        {
            ParticipantsName: "Participants5",
            Ratings: "97.5",
            number: "5"

        },
        {
            ParticipantsName: "Participants6",
            Ratings: "97.5",
            number: "6"


        },
    ];
    return (
        
        <div className="lead_body pb-12">
            <h2 className='text-4xl pt-12 pb-12 font-mono'>Final LeaderBoard</h2>
            <table id="table" className='border-2 border-cyan-200'>
                <div class="table-section">
                    <tr class="header-row">
                        <th class="header-item items">RANK</th>
                        <th class="header-item items">PARTICIPANT NAME</th>
                        <th class="header-item items">TOTAL RATINGS</th>
                    </tr>



                    {participants.map((member, i) => (
                        
                            <tr class="table-rows " key={`member${i}`}>
                                <td class="items">{member.number}</td>
                                <td class="items">{member.ParticipantsName}</td>
                                <td class="items ">{member.Ratings}</td>
                            </tr>
                    
                    ))}
                </div>
        
        </table >
      </div >
    );
}


export default leaderboard
