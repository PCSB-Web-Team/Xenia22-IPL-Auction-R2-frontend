import React from "react";
// import "../../pages/pages.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Webteam = () => {
  

  return (
    <body>
      <div className="text-center h-[100vh]">
        <h1 className="text-cyan-400 text-6xl text-center pt-12 font-mono font-bold mb-4">
          CricWars Web Team
        </h1>
        <div className="bg-black bg-opacity-40 h-[100vh]  ">
          <div class="grid grid-cols-2 ml-[350px] mt-20 ">
            <a href="https://www.linkedin.com/in/yash-pande-1a5812206/" target="_blank">
              <div class=" h-96 w-64 shadow mt-16 bg-black bg-opacity-50 rounded-xl  hover:bg-blue-900 hover:bg-opacity-30">
                <div class=" mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                  <img
                    src="https://drive.google.com/uc?export=view&id=1LOq2Bb_04Yde_SfUtRs7AGZBekhnxony"
                    alt="Image"
                    class="object-cover object-center w-full h-full transition duration-1000 ease-in-out hover:-translate-y-1 hover:scale-125"
                  />
                </div>

                <div class="flex flex-col items-center justify-center">
                  <div class="font-bold text-indigo-500 md:text-lg">
                    Yash Pande
                  </div>
                  <p class="mb-3 text-sm text-cyan-500 md:text-base md:mb-4">
                    Web Developer
                  </p>

                  <div class="text-white">
                    <div class="flex gap-2 ">
                      <li>
                        <a href="#">
                          <i class="far fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-twitter"></i>
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/devraj-shetake-439606206/" target="_blank">
              <div class=" h-96 w-64 shadow mt-16 bg-black bg-opacity-50 rounded-xl  hover:bg-blue-900 hover:bg-opacity-30">
                <div class=" mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                  <img
                    src="https://nth22.s3.ap-south-1.amazonaws.com/devraj.jpg"
                    alt="Image"
                    class="object-cover object-center w-full h-full transition duration-1000 ease-in-out hover:-translate-y-1 hover:scale-125"
                  />
                </div>

                <div class="flex flex-col items-center justify-center">
                  <div class="font-bold text-indigo-500 md:text-lg">
                    Devraj Shetake
                  </div>
                  <p class="mb-3 text-sm text-cyan-500 md:text-base md:mb-4">
                    Backend Developer
                  </p>

                  <div class="text-white">
                    <div class="flex gap-2 ">
                      <li>
                        <a href="#">
                          <i class="far fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-twitter"></i>
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Webteam;


