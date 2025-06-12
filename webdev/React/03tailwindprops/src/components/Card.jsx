import {useState} from "react";
import React from 'react'


function Card({username, btnText="visit me"}){
   // console.log(username, btnTxt)
    return(
        <>
        <div> is here</div>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          
        </p>
        <button>
            {btnText} 
          </button>
        </a>
        </>
        

    )
}
export default Card