import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import andre from "../../assets/images/impact/andrerussell.jpg"
import boult from "../../assets/images/impact/trentboult.jpg"
import tim from "../../assets/images/impact/timdavid.jpg"
import chahal from "../../assets/images/impact/yuzi.jpg"
import bhuvi from "../../assets/images/impact/bhuvi.png"

const ImpactPlayer = () => {

    const navigate = useNavigate();
    const playerArray = [
        {
            id: 101,
            name: "Andre Russell",
            price: 0,
            rating: 0,
            img: andre
        },
        {
            id: 102,
            name: "Trent Boult",
            price: 0,
            rating: 0,
            img: boult
        },
        {
            id: 103,
            name: "Tim David",
            price: 0,
            rating: 0,
            img: tim
        },
        {
            id: 104,
            name: "Yuzvendra Chahal",
            price: 0,
            rating: 0,
            img: chahal
        },
        {
            id: 105,
            name: "Bhuvneshwar Kumar",
            price: 0,
            rating: 0,
            img: bhuvi
        },

    ];
    const [impactPlayer, setImpactPlayer] = useState();
    // const [playerCount, setPlayerCount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let inst = { 'impact_player_name': impactPlayer };

        // if (playerCount !== 1) return;

        fetch(`${process.env.REACT_APP_BACKEND_URL}/add_impact_player/`, {
            method: "POST",
            headers: { "content-type": "application/json", "Authorization": `Token ${localStorage.getItem("auth-token")}` },
            body: JSON.stringify(inst),
        }).then((res) => {
            console.log(res);
            return res.json();

        }).then((data) => {
            console.log(data);
            navigate("/selected-11");
        });
    };


    return (
        <body>
            <div className="">
                <h1 className="text-cyan-400 text-4xl text-center pt-12 font-mono font-bold mb-4">
                    Select the Impact Player
                </h1>
                <div className="container  text-center">
                    <form onSubmit={handleSubmit} method="POST">
                        <div className=" text-center pt-4 ">
                            {playerArray.map((member, i) => (
                                <div
                                    key={`member${i}`}
                                    className=" card transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110  p-3  inline-block m-6 cursor-pointer rounded-xl"
                                >
                                    <div className="card-img h-[200px] w-[200px] ">
                                        <img src={member.img} alt="cricketer" />
                                    </div>
                                    <div className="card-content text-center">
                                        <p className="fontname text-gray-100  font-semibold ">
                                            {member.name}
                                        </p>
                                        <br />
                                        <br></br>
                                        <input
                                            type="radio"
                                            className="w-4 h-4 text-center"
                                            onChange={(e) => {
                                                if (e.target.checked)
                                                    setImpactPlayer(
                                                        member.name
                                                    );
                                            }}
                                            checked={impactPlayer === member.name}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="my-8 text-center  rounded-lg text-white bg-gradient-to-r from-blue-400 via-purple-500 to-violet-400 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium  px-5 py-2.5  mx-auto text-lg inline-block"
                        >
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </body>
    );
}

export default ImpactPlayer
