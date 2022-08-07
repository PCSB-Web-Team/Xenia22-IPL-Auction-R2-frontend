import React, { Component } from "react";
import xenia_logo from "../assets/images/xenia22Logo.png";
export class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div>
                  <a
                    href="#"
                    className="flex items-center  text-gray-700 hover:text-gray-900"
                  >
                    <img src={xenia_logo} alt="XENIA" className="w-[70px] h-[90px]"/>
                    <span className="font-bold">CricWars</span>
                  </a>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                  {/* <a
                    href="#"
                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                  >
                    Pricing
                  </a> */}
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a href="" className="py-5 px-3">
                  Login
                </a>
                <a
                  href=""
                  className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                >
                  Signup
                </a>
              </div>

              <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <div className="mobile-menu hidden md:hidden">
    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
  </div> */}
        </nav>
      </div>
    );
  }
}

export default navbar;
