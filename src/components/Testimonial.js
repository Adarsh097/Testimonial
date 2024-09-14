import React, { useState }  from "react";

import Card from "./Card";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Testimonial(props){
    const reviews = props.reviews;
    const length = reviews.length;

    const[ind,setIndex] = useState(0);


    function leftShiftHander(){
        // if(ind-1 <0){
        //     setIndex(length-1);
        // }else{
        //     setIndex(ind-1);
        // }
        setIndex((ind - 1 + length) % length);

    };
    function rightShiftHander(){
        setIndex((ind+1)%length);
    };

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random() * length);
        setIndex(randomIndex);
    };

return (
    <div className="flex flex-col justify-center items-center mt-10 p-10
    transition-all duration-500 ease-in-out hover:shadow-2xl w-[85vw] bg-white rounded-md md:w-[700px]">
        <Card review = {reviews[ind]}/>
        <div className="flex mx-auto  text-purple-500 text-3xl mt-5 font-bold">
                <button><IoIosArrowBack className="cursor-pointer hover:text-purple-800" onClick={leftShiftHander} /></button>
                <button><IoIosArrowForward className="hover:text-purple-800 cursor-pointer"onClick={rightShiftHander} /></button>
            </div>
            <div>
                <button className="px-4 py-2 bg-purple-600 mt-5 text-lg rounded-lg text-white  transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-purple-400"
                onClick={surpriseHandler}>Surprise Me!</button>
            </div>
    </div>
);
};